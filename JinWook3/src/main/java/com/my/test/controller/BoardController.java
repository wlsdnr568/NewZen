package com.my.test.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.test.service.BoardService;

@Controller
@RequestMapping(value="/board")
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	@RequestMapping(value="/main",method=RequestMethod.GET)
	public String boardMain(Model model
			,@RequestParam(required = false)String keyword
			,@RequestParam(defaultValue = "0")int type
			,@RequestParam(defaultValue = "1")int page) {
		
		Map<String, Object> board = new HashMap<String, Object>();
		board.put("type", type);
		board.put("keyword", keyword);

		Map<String, Object> viewData = boardService.getBoardList(board, page); 
		viewData.put("type", type);
		viewData.put("keyword", keyword);
		
		model.addAttribute("viewData", viewData);
		
		return "boardMain";    
	}
	
	@ResponseBody
	@RequestMapping(value="/writeBoard",method=RequestMethod.POST)
	public boolean writeBoard(@RequestParam Map<String, Object> board) {
		
		boolean result = boardService.writeBoard(board);
		
		if(result) {
			return true;
		}else {
			return false;
		}
		
	}
	
	@RequestMapping(value="/boardView",method=RequestMethod.GET)
	public String boardView(Model model,int boardNo) {
		 
		Map<String, Object> board = boardService.readBoard(boardNo);
		
		model.addAttribute("board",board);
		
		return "boardView"; 
	}
	
	@RequestMapping(value="/deleteBoard",method=RequestMethod.GET)
	public String boardEventDelete(int boardNo,Model model) {
		  
		boardService.deleteBoard(boardNo);
		
		model.addAttribute("url","/test/board/main");
		model.addAttribute("msg","삭제 성공!");
		
		return "result";  
	}
	
	
}
