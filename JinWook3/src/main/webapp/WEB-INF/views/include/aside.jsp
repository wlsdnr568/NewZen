<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style type="text/css">

	#aside_menuBox {
		float: left;
		border: 1px #bababa solid;
		width: 166px;
		min-height: 794px;
		height: auto;
		
	}
	
	#aside_ul {
		list-style: none;
		padding: 8px;
	}
	
	#aside_ul li {
		border: 1px solid gray;
		margin-top: 5px;  
		text-align: center;
		padding: 2px;
		background-color: #e5ecf1;
		font-size: 15px;
	}
	
	#aside_ul li:hover {
		background-color: #4092d7;
		cursor: pointer;
	}
	
</style>
<title>aside</title>
</head>
<body>
	<div id="aside_menuBox">
		<ul id="aside_ul">
			<li onclick="location.href='/jinWook3/board/boardMain'">일반 게시판</li>
			<li onclick="location.href='/jinWook3/practice/practiceG'">전표 입력</li>
		</ul>
	</div>
</body>
</html>
