package com.newzen.my.mapper;


import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.newzen.my.model.Cust;

@Mapper
public interface DetailMapper {
    
//    public int updateFormData(Map<String, Object> formMap); map을 파라미터로 받는 방식
    public int updateFormData1(Cust cust); //VO를 파라미터로 받는 방식
    
}
   