package com.my.test.service;

import java.util.List;
import java.util.Map;

import com.my.test.model.Board;

public interface BoardService {
	
	public boolean writeBoard(Map<String, Object> board);
	
	public List<Map<String, Object>> getAllBoard();
	
	public Map<String, Object>  readBoard(int boardNo); 
	
	public boolean deleteBoard(int boardNo);
	
	public int getTotalCount();
	
	public Map<String, Object> getBoardList(Map<String, Object> board, int page);
	
}
	
