package com.newzen.my.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newzen.my.mapper.CodeHelperMapper;
import com.newzen.my.model.Cust;

@Service
public class CodeHelperServiceImpl implements CodeHelperService{

	@Autowired
	CodeHelperMapper codeHelperMapper;
	
	@Override
	public List<Cust> getCustTData(String custCd) { 
		
		List<Cust> custList = codeHelperMapper.getCustTData(custCd);
		
		return custList;
	}

	
}
