package com.my.test.controller;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
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
	
}
