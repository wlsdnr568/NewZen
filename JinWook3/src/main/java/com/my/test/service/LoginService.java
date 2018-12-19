package com.my.test.service;

import com.my.test.model.User;

public interface LoginService {

	public boolean loginCheck(String userId, String userPw);
	public User getUser(String userId, String userPw);
	
}
