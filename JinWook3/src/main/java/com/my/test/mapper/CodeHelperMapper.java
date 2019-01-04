package com.my.test.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.my.test.model.Cust;


@Mapper
public interface CodeHelperMapper {
    
    public List<Cust> getCustTData(String custCd);
    
}
   