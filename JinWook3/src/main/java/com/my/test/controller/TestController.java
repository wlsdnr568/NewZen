package com.my.test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.test.model.Product;
import com.my.test.service.ProductService;

@Controller
@RequestMapping(value="/")
public class TestController {

	@Autowired
	private ProductService proService;
	
	@ResponseBody
	@RequestMapping(value = "/getProducts")   
	public List<Product> productlList() {
		
		List<Product> product = proService.getProductList();
		
		return product;     
	} 
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String main() {
		
		return "test/test";
	}
	
	@RequestMapping(value = "/test1", method = RequestMethod.GET)
	public String test1() {
		
		return "test/test1";
	}
	
	@RequestMapping(value = "/test2", method = RequestMethod.GET)
	public String test2() {
		
		return "test/test2";
	}
	
	@RequestMapping(value = "/test3", method = RequestMethod.GET)
	public String test3() {
		
		return "test/test3";
	}
	
	@RequestMapping(value = "/test4", method = RequestMethod.GET)
	public String test4() {
		
		return "test/test4";
	}
	
	@RequestMapping(value = "/test5", method = RequestMethod.GET)
	public String test5() {
		
		return "test/test5";
	}
	
	@RequestMapping(value = "/test6", method = RequestMethod.GET)
	public String test6() {
		
		return "test/test6";
	} 
	
	@RequestMapping(value = "/test7", method = RequestMethod.GET)
	public String test7() {
		
		return "test/test7";
	}
	
	@RequestMapping(value = "/jusoPopup", method = RequestMethod.GET)
	public String jusoPopup() {
		
		return "/juso/jusoPopup";
	}
	
	@RequestMapping(value="/add1",method=RequestMethod.POST)
	public String addProduct1(@ModelAttribute Product product,Model model)  {
		
		int num = proService.addProduct(product);
		
		if(num == 1) {
			model.addAttribute("msg","입력되었습니다");
		}else {
			model.addAttribute("msg","입력 실패하였습니다");
		}
		
		model.addAttribute("url","test6");
		
		return "test/result";
	}
	
	
}





