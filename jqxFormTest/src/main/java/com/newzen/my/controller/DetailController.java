package com.newzen.my.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.newzen.my.service.DetailService;

@Controller
@RequestMapping(value="/")
public class DetailController {
	
	@Autowired
	DetailService detailService;
	
	/**
	 * 메인 홈
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		
		return "detail";
	}
	
	/**
	 * jqxfor내용 수정시 업데이트 이벤트
	 * @param formData
	 * @return
	 */
	@RequestMapping(value="/updateFormData",method= {RequestMethod.POST})
	@ResponseBody
	public String updateFormData(@RequestParam Map<String, Object> formData) {
		
		boolean result = detailService.updateFormData(formData);
		
		if(result) {
			return "성공";
		}else {
			return "실패";
		}
		
	}
	
	
}
