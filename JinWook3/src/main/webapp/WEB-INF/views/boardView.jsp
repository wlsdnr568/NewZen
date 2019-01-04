<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<link rel="stylesheet" href="<c:url value="/resources/css/board_css.css"/>">
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
	
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<!-- 	 헤더 -->
	 <%@ include file="/WEB-INF/views/include1/header.jsp" %>
	 
<!-- 	 내용 -->
	 <div id="cont">
	 	
<!-- 	 	내용 -> 메뉴 -->
	 	<%@ include file="/WEB-INF/views/include1/aside.jsp" %>
	 	
<!-- 	 	내용 -> 메인 화면 -->
	 	<div id="cont_right"> 
	 	
	 		<div style="width: 800px; height: 600px; margin: 0 auto">
				<table style="width: 60%; height: 50%; border: 1px solid black; margin: 200px auto"> 
					<tr>
						<th colspan="1" width="100px">번호</th>
						<td>${board.boardNo}</td>
					</tr>
					<tr>
						<th colspan="1">제목</th> 
						<td>${board.boardName}</td>
					</tr>
					<tr>
						<th colspan="1">작성자</th>
						<td>${board.writer}</td>
					</tr>
					<tr>
						<th colspan="1">작성일</th>
						<td>${board.writeDate}</td>
					</tr>
					<tr>
						<th colspan="1">내용</th>
						<td style="overflow: auto;">${board.content}</td>
					</tr>
					<tr>
						<td>
							<button onclick="location.href='/jinWook3/board/deleteBoard?boardNo=${board.boardNo}'">삭제하기</button>
						</td>
					</tr>
				</table>
	
			</div>
	 	
	 	</div>
	 	
	 	
	 </div>




</body>
</html>