package com.my.test.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.test.mapper.BoardMapper;
import com.my.test.model.Board;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardMapper boardMapper;
	
	// 한 페이지 표시될 게시글 수
	private static final int NUM_OF_BOARD_PER_PAGE = 15;
	// 한번에 표시될 네비게이션의 개수
	private static final int NUM_OF_NAVI_PAGE = 5;

	@Override
	public boolean writeBoard(Map<String, Object> board) {

		if (boardMapper.insertBoard(board) > 0) {
			System.out.println("작성 성공");
			return true;
		} else {
			System.out.println("작성 실패");
			return false;
		}

	}

	@Override
	public List<Map<String, Object>> getAllBoard() {

		List<Map<String, Object>> boardList = boardMapper.getAllBoard();

		return boardList;
	}

	@Override
	public Map<String, Object> readBoard(int boardNo) {

		Map<String, Object> board = boardMapper.selectOneBoard(boardNo);

		return board;
	}

	@Override
	public boolean deleteBoard(int boardNo) {

		if (boardMapper.deleteBoard(boardNo) > 0) {
			System.out.println("성공");
			return true;
		} else {
			System.out.println("실패");
			return false;
		}

	}
	
	@Override
	public int getTotalCount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Map<String, Object> getBoardList(Map<String, Object> board, int page) {

		List<Map<String, Object>> boardList;
		int pageTotalCount;
		int startPage = getStartPage(page);
		int endPage = getEndPage(page);
		int firstRow = getFirstRow(page);
		int endRow = getEndRow(page);

		board.put("firstRow", firstRow);
		board.put("endRow", endRow);

		int type = (int) board.get("type");
		String keyword = (String) board.get("keyword");

		if (type == 1) {
			board.put("boardName", keyword);
		} else if (type == 2) {
			board.put("writer", keyword);
		} else if (type == 3) {
			board.put("boardName", keyword);
			board.put("writer", keyword);
		}

		pageTotalCount = getPageTotalCount(boardMapper.getTotalCount(board));
		boardList = boardMapper.searchBoard(board);

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("boardList", boardList);
		result.put("startPage", startPage);
		result.put("endPage", endPage);
		result.put("currentPage", page);
		result.put("pageTotalCount", pageTotalCount);

		return result;
	}

	
	////////////페이징 처리용 함수/////////////////////////////
	private int getPageTotalCount(int totalCount) {
		int pageTotalCount = 0;
		if (totalCount != 0) {
			pageTotalCount = (int) Math.ceil(((double) totalCount / NUM_OF_BOARD_PER_PAGE));
		}
		return pageTotalCount;
	}
	
	private int getStartPage(int currentPage) {
		return ((currentPage - 1) / NUM_OF_NAVI_PAGE) * NUM_OF_NAVI_PAGE + 1;
	}
	
	private int getEndPage(int currentPage) {
		return (((currentPage - 1) / NUM_OF_NAVI_PAGE) + 1) * NUM_OF_NAVI_PAGE;
	}
	
	private int getFirstRow(int currentPage) {
		return (currentPage - 1) * NUM_OF_BOARD_PER_PAGE + 1;
	}
	
	private int getEndRow(int currentPage) {
		return currentPage * NUM_OF_BOARD_PER_PAGE;
	}
	

}
