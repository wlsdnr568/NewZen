package com.newzen.my.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newzen.my.mapper.DetailMapper;
import com.newzen.my.model.Cust;

@Service
public class DetailServiceImpl implements DetailService{

	@Autowired
	DetailMapper detailMapper;
	
	@Override
	public boolean updateFormData(Map<String, Object> formData) {
		
		//VO에 값 담아서 넘기는 방법
		Cust cust = new Cust();
		
		String custCd = (String)formData.get("formData[custCd]"); //ajax로 formData를 넘길 때 키 값이 이런방식으로 저장되어 있음. 
		int custCdInt = Integer.parseInt(custCd);
		
		cust.setCustCd(custCdInt);
		cust.setCustNm((String)formData.get("formData[custNm]"));
		cust.setRepstvNm((String)formData.get("formData[repstvNm]"));
		cust.setBsnCdt((String)formData.get("formData[bsnCdt]"));
		cust.setItm((String)formData.get("formData[itm]"));
		cust.setZipNo((String)formData.get("formData[zipNo]"));
		cust.setAddr((String)formData.get("formData[addr]"));
		cust.setAddrDtl((String)formData.get("formData[addrDtl]"));
		cust.setTel1((String)formData.get("formData[tel1]"));
		cust.setTel2((String)formData.get("formData[tel2]"));
		cust.setTel3((String)formData.get("formData[tel3]"));
		cust.setRegsNo((String)formData.get("formData[regsNo]"));
		cust.setBusnPersRegsNo((String)formData.get("formData[busnPersRegsNo]"));
		
		int result = detailMapper.updateFormData1(cust);
		
		//Map에 값 담아서 넘기는 방법
//		Map<String, Object> formMap = new HashMap<String, Object>();
//		formMap.put("custCd", formData.get("formData[custCd]"));
//		formMap.put("custNm", formData.get("formData[custNm]"));
//		formMap.put("repstvNm", formData.get("formData[repstvNm]"));
//		formMap.put("bsnCdt", formData.get("formData[bsnCdt]"));
//		formMap.put("itm", formData.get("formData[itm]"));
//		formMap.put("zipNo", formData.get("formData[zipNo]"));
//		formMap.put("addr", formData.get("formData[addr]"));
//		formMap.put("addrDtl", formData.get("formData[addrDtl]"));
//		formMap.put("tel1", formData.get("formData[tel1]"));
//		formMap.put("tel2", formData.get("formData[tel2]"));
//		formMap.put("tel3", formData.get("formData[tel3]"));
//		formMap.put("regsNo", formData.get("formData[regsNo]"));
//		formMap.put("busnPersRegsNo", formData.get("formData[busnPersRegsNo]"));
//		
//		int result = detailMapper.updateFormData(formMap);
		
		if(result == 1) {
			return true;
		}else {
			return false;
		}
		
	}
	
}

