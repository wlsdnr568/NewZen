package com.newzen.my.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface HometaxService {
	
	//사업자등록번호 조회 이벤트
	String getBusnPersStatus(String busnPersNo, HttpServletRequest request, HttpServletResponse response);
}
