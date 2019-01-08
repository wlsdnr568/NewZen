package com.newzen.my.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.newzen.my.model.Cust;
import com.newzen.my.service.CodeHelperService;
import com.newzen.my.service.DetailService;

@Controller
@RequestMapping(value="/codeHelper")
public class CodeHelperController {
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired
	CodeHelperService codeHelperService;
	
	/**
	 * 주소검색
	 * @param zipNo
	 * @param addr
	 * @param addrDetail
	 * @return cust - 거래처코드를 get방식으로 받아서 쿼리문을 통해 cusg VO객체로 담아서 반환 
	 */
	@RequestMapping(value="/searchAddress", method=RequestMethod.GET)
	public String searchAddress(
			@RequestParam(value="zipNo") String zipNo,
			@RequestParam(value="addr") String addr,
			@RequestParam(value="addrDetail") String addrDetail) {
		return "util/codehelper/search_address";
	}
	
	/**
	 * jqxform안에 값 불러오는 이벤트
	 * @param custCd
	 * @return cust - 거래처코드를 get방식으로 받아서 쿼리문을 통해 cusg VO객체로 담아서 반환 
	 */
	@RequestMapping(value="/getCustTData", method=RequestMethod.GET)
	@ResponseBody
	public List<Cust> getCustTData(@RequestParam(value="CustCd") String custCd) {
		
		List<Cust> cust = codeHelperService.getCustTData(custCd); 
		
		return cust;
	}
	
}
