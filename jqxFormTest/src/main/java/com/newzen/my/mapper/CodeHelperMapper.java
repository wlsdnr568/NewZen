package com.newzen.my.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.newzen.my.model.Cust;


@Mapper
public interface CodeHelperMapper {
    
    public List<Cust> getCustTData(String custCd);
    
}
   