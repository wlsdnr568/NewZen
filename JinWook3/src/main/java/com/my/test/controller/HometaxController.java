package com.my.test.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.test.service.HometaxService;

@Controller
@RequestMapping(value="/hometax")
public class HometaxController {
	
	@Autowired
	HometaxService hometaxServce;
	
	/**
	 * 홈택스내 사업자번호로 상태조회
	 * @param busnPersNo
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value="/getBusnPersStatus", method=RequestMethod.POST, produces="application/xml;charset=UTF-8")
	@ResponseBody
	public String getBusnPersStatus(@RequestParam("busnPersNo") String busnPersNo, HttpServletRequest request, HttpServletResponse response) {
	
		return hometaxServce.getBusnPersStatus(busnPersNo, request, response);
	}
}
