package com.my.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.test.model.ApprovalJson;
import com.my.test.service.ProductService;

@Controller
@RequestMapping(value="/practice")
public class PracticeController {
	
	@Autowired
	private ProductService proService;
	
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String practice() {
		
		return "practice/main";
	}
	
	@RequestMapping(value = "/practice1", method = RequestMethod.GET)
	public String practice1() {
		
		return "practice/practice1";
	}
	
	@RequestMapping(value = "/practice2", method = RequestMethod.GET)
	public String practice2() {
		
		return "practice/practice2";
	}
	
	@RequestMapping(value = "/practice3", method = RequestMethod.GET)
	public String practice3() {
		
		return "practice/practice3";
	}
	
	@RequestMapping(value = "/practice4", method = RequestMethod.GET)
	public String practice4() {
		
		return "practice/practice4";
	}
	
	@RequestMapping(value = "/practice5", method = RequestMethod.GET)
	public String practice5() {
		
		return "practice/practice5";
	}
	
	@RequestMapping(value = "/practice6", method = RequestMethod.GET)
	public String practice6() {
		
		return "practice/practice6";
	}
	
	@RequestMapping(value = "/practice7", method = RequestMethod.GET)
	public String practice7() {
		
		return "practice/practice7";
	}
	
	@RequestMapping(value = "/practice8", method = RequestMethod.GET)
	public String practice8() {
		
		return "practice/practice8";
	}
	
	@RequestMapping(value = "/practice9", method = RequestMethod.GET)
	public String practice9() {
		
		return "practice/practice9";
	}
	
	@RequestMapping(value = "/practiceA", method = RequestMethod.GET)
	public String practiceA() {
		
		return "practice/practiceA";
	}
	
	@RequestMapping(value = "/practiceB", method = RequestMethod.GET)
	public String practiceB() {
		
		return "practice/practiceB";
	}
	
	@RequestMapping(value = "/practiceC", method = RequestMethod.GET)
	public String practiceC() {
		
		return "practice/practiceC";
	}
	
	@RequestMapping(value = "/practiceD", method = RequestMethod.GET)
	public String practiceD() {
		
		return "practice/practiceD";
	}
	
	@RequestMapping(value = "/practiceE", method = RequestMethod.GET)
	public String practiceE() {
		
		return "practice/practiceE";
	}
	
	@RequestMapping(value = "/practiceF", method = RequestMethod.GET)
	public String practiceF() {
		
		return "practice/practiceF";
	}
	
	@RequestMapping(value = "/practiceG", method = RequestMethod.GET)
	public String practiceG() {
		
		return "practice/practiceG";
	}
	
}





