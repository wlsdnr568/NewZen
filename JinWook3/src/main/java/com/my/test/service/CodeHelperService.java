package com.my.test.service;

import com.fasterxml.jackson.core.JsonProcessingException;

public interface CodeHelperService {

	String loadCodeHelperData(String filePath, String tableName, String attrbuteStr, String headfixStr, String whereStr) throws JsonProcessingException;
	
}
