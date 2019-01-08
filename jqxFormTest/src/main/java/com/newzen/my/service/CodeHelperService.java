package com.newzen.my.service;

import java.util.List;

import com.newzen.my.model.Cust;

public interface CodeHelperService {
	
	//jqxform안에 값 불러오는 이벤트
	public List<Cust> getCustTData(String custCd);
	
}
