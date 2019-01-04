package com.my.test.service;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.my.test.model.Cust;

public interface CodeHelperService {

	public String loadCodeHelperData(String filePath, String tableName, String attrbuteStr, String headfixStr, String whereStr) throws JsonProcessingException;
	public List<Cust> getCustTData(String custCd);
	
}
