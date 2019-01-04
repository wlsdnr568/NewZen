package com.my.test.controller;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.my.test.model.Cust;
import com.my.test.service.CodeHelperService;

@Controller
@RequestMapping(value="/codeHelper")
public class CodeHelperController {
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired
	CodeHelperService codeHelperService;
	
	@RequestMapping(value="/test")
	public String main() {
		return "codeHelper/test";
	}
	
	@RequestMapping(value="/loadCodeHelperModal", method=RequestMethod.POST)
	public String loadCodeHelperModal() {
		return "codeHelper/codehelper";
	}
	
	@RequestMapping(value="/loadCodeHelperData", method=RequestMethod.POST, produces="application/json; charset=utf8")
	@ResponseBody
	public String loadCodeHelperData(
			@RequestParam(name="tableName") String tableName,
			@RequestParam(name="attribute") String attribute,
			@RequestParam(name="headfix") String headfix,
			@RequestParam(name="where") String where) throws JsonProcessingException{
		
		String filePath = servletContext.getRealPath("/WEB-INF/tbl/codeHelper.xml");
		
		return codeHelperService.loadCodeHelperData(filePath, tableName, attribute, headfix, where);
	}
	
	@RequestMapping(value="/searchAddress", method=RequestMethod.GET)
	public String searchAddress(
			@RequestParam(value="zipNo") String zipNo,
			@RequestParam(value="addr") String addr,
			@RequestParam(value="addrDetail") String addrDetail) {
		return "util/codehelper/search_address";
	}
	
	@RequestMapping(value="/getCustTData", method=RequestMethod.GET)
	@ResponseBody
	public List<Cust> getCustTData(@RequestParam(value="CustCd") String custCd,Model model) {
		
		List<Cust> cust = codeHelperService.getCustTData(custCd); 
		
		return cust;
	}
	
}
