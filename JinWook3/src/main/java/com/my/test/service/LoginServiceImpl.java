package com.my.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.test.mapper.UserMapper;
import com.my.test.model.User;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	UserMapper userMapper;
	
	@Override
	public boolean loginCheck(String userId, String userPw) {
		// TODO Auto-generated method stub
		
		User user = userMapper.selectOne(userId);
		System.out.println(user);
		
		if(user != null) {
			
			if(user.getUserPw().equals(userPw)) {
				return true;
			}else {
				return false;
			}
			
		}else {
			
			return false;
			
		}
		
	}

	@Override
	public User getUser(String userId, String userPw) {

		User user = userMapper.selectOne(userId);
		
		return user;
	}

	
}
