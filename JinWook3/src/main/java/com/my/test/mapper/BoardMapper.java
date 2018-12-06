package com.my.test.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.my.test.model.Board;

@Mapper
public interface BoardMapper {
    
    public int insertBoard(Map<String, Object> board);
    
    public List<Map<String, Object>> getAllBoard();
    
    public Map<String, Object>  selectOneBoard(int boardNo);
    
    public int deleteBoard(int boardNo);
    
    public Board listCriteria();
    
    public int getTotalCount(Map<String, Object> board);
    
    public List<Map<String, Object>> searchBoard(Map<String, Object> board);
    
}
   