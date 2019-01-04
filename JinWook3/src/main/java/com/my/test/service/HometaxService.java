package com.my.test.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface HometaxService {

	String getBusnPersStatus(String busnPersNo, HttpServletRequest request, HttpServletResponse response);
}
