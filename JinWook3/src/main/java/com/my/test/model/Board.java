package com.my.test.model;

import java.sql.Date;

public class Board {
	
	int boardNo;
	String boardName;
	String writer;
	Date writeDate;
	String content;
	
	public int getBoardNo() {
		return boardNo;
	}
	public void setBoardNo(int boardNo) {
		this.boardNo = boardNo;
	}
	public String getBoardName() {
		return boardName;
	}
	public void setBoardName(String boardName) {
		this.boardName = boardName;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public Date getWriteDate() {
		return writeDate;
	}
	public void setWriteDate(Date writeDate) {
		this.writeDate = writeDate;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	@Override
	public String toString() {
		return "TestModel [boardNo=" + boardNo + ", boardName=" + boardName + ", writer=" + writer + ", writeDate="
				+ writeDate + ", content=" + content + "]";
	}
	
	
	
	
}
