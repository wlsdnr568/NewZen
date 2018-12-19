package com.my.test.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.my.test.model.User;


@Mapper
public interface UserMapper {
    
    public User selectOne(String userId);
    
}
   