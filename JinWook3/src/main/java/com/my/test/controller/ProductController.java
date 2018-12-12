package com.my.test.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.test.model.Product;
import com.my.test.service.ProductService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

@Controller
@RequestMapping(value="/product")
public class ProductController {

	@Autowired
	private ProductService proService;

	@ResponseBody
	@RequestMapping(value = "/getProducts")   
	public List<Product> productlList() {
		
		List<Product> product = proService.getProductList();
		
		return product;     
	} 
	
	@ResponseBody
	@RequestMapping(value= "/insertProducts")
	public int insertProduct(@ModelAttribute Product product) {
		
		System.out.println(product);
		
		int num = proService.addProduct(product);
		
		return num;
	}
	
	@ResponseBody
	@RequestMapping(value= "/updateProducts")
	public int updateProduct(@ModelAttribute Product product) {   
		    
		return proService.updateProduct(product);
	}
	
	@ResponseBody
	@RequestMapping(value= "/deleteProducts")
	public int deleteProduct(@RequestParam String code) { 
		
		return proService.delProduct(code);
	}
	
	@ResponseBody
	@RequestMapping(value= "/allSaveProducts", method=RequestMethod.POST)
	public int allSaveProducts(@RequestBody String pdStringList) { 
		
		List<Product> pdList = new ArrayList<Product>();
		
		JSONArray productJson = JSONArray.fromObject(JSONSerializer.toJSON(pdStringList));
		
		for(int i=0;i<productJson.size();i++) {
			Product pd = (Product) JSONObject.toBean(productJson.getJSONObject(i), Product.class);
			pdList.add(pd);
		}
		
		return proService.addAllProduct(pdList);
	}
	
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String addProduct(@ModelAttribute Product product,Model model)  {
		
		int num = proService.addProduct(product);
		
		if(num == 1) {
			model.addAttribute("msg","입력되었습니다.");
			model.addAttribute("url","test1");
		}else {
			model.addAttribute("msg","입력 실패하였습니다.");
			model.addAttribute("url","test1");
		}
		
		return "result";   
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
		
		return "result";
	}
	
	
}





