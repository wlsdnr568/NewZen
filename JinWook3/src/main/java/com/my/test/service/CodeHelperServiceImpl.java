package com.my.test.service;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.my.test.element.Root;
import com.my.test.element.Root_Sheet;
import com.my.test.element.Root_Sheet_Headfix;
import com.my.test.element.Root_Sheet_Mask;
import com.my.test.mapper.CodeHelperMapper;
import com.my.test.model.Cust;

@Service
public class CodeHelperServiceImpl implements CodeHelperService{

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Autowired
	CodeHelperMapper codeHelperMapper;
	
	@Override
	public String loadCodeHelperData(String filePath, String tableName, String attributeStr, String headfixStr, String whereStr)
			throws JsonProcessingException {
		Map<String, Object> jsonMap = new HashMap<String, Object>();
		String jsonStr = "";
		
		try {
			JAXBContext jc = JAXBContext.newInstance(Root.class);
			Unmarshaller um = jc.createUnmarshaller();
			
			// Xml 파일 읽어옴
			Root root = (Root)um.unmarshal(new File(filePath));
			System.out.println(root);
			
			Root_Sheet_Headfix headfix = null;
			Root_Sheet_Mask mask = null;
			
			// Sheet 가져옴
			for(Root_Sheet root_sheet : root.getSheet()) {
				
				if(root_sheet.getId().equals(tableName.toUpperCase())) {
					// Title 가져옴
					jsonMap.put("title", root_sheet.getName());
					 
					// HeadFix 가져옴
					for(Root_Sheet_Headfix root_sheet_headfix : root_sheet.getHeadfix()) {
						if(root_sheet_headfix.getId().equals("headfix" + headfixStr)) {
							// HeadfixedText 가져옴
							headfix = root_sheet_headfix;
							break;
						}
					}
					// Mask 가져옴
					for(Root_Sheet_Mask root_sheet_mask : root_sheet.getMask()) {
						if(root_sheet_mask.getId().equals("attribute" + attributeStr)) {
							mask = root_sheet_mask;
							
							break;
						}
					}
					break;
				}
			}
			
			if(headfix != null && mask != null) {
				// Query 생성
				StringBuffer sb = new StringBuffer(); 
				sb.append("SELECT ");
				sb.append(headfix.getFixed().getText());
				
				if(whereStr.isEmpty() == false) {
					sb.append(" WHERE " + whereStr);
				}
				
				List<Map<String, Object>> tableDataList;
				tableDataList = jdbcTemplate.queryForList(sb.toString());
				
				// Column list가져옴
				String headfixText = headfix.getFixed().getText();
				String columnList = headfixText.substring(0, headfixText.indexOf("FROM")).replace(" ", "");
				jsonMap.put("columnList", columnList.split(","));
				
				// Attribute 가져옴
				jsonMap.put("attribute", mask);
				
				if(tableDataList.size() > 0) {
					// Data 가져옴
					List<Object> dataList = new ArrayList<Object>();
					
					for(Map<String, Object> map : tableDataList) {
						dataList.add(map.values());
					}
					jsonMap.put("data", dataList);
				}
				
				// JSON parse
				ObjectMapper objectMapper = new ObjectMapper();
				
				jsonStr = objectMapper.writeValueAsString(jsonMap);
			}
		} catch (JAXBException e) {
			e.printStackTrace();
		}
		return jsonStr;
	}

	@Override
	public List<Cust> getCustTData(String custCd) { 
		
		List<Cust> custList = codeHelperMapper.getCustTData(custCd);
		
		return custList;
	}

	
}
