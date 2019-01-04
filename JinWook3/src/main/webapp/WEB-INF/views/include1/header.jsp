<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style type="text/css">
	#header_wrapBox1{
		width: 100%;
		height: 60px;     
		border: 1px solid #2f7bc9;
		background-color: #2f7bc9;
	}
	
	#header_wrapBox2{
		width: 1440px; 
		height: 59px;     
		border: 1px solid #2f7bc9;
		background-color: #2f7bc9;
		margin: auto;
	}
	
	#header_logoBox{
		position: fixed;
		display: inline-block;
		float: left;
		padding-top: 12px;
	}
	
	#header_logo{
		font-size: 23px;
		color: white;
		font-weight: bold;
	}
	
	#header_slash{
		font-size: 23px;
		color: white;
	}
	
	#header_name{
		font-size: 23px;
		color: white;
	}
	
</style>
<title>header</title>
</head>
<body>

	<div id="header_wrapBox1">
	
		<div id="header_wrapBox2">
			
			<div id="header_logoBox">
				<span id="header_logo" style="cursor: pointer;" onclick="location.href='main'">NewZen </span>
				<span id="header_slash"> | </span>
				<span id="header_name"> 게시판</span>
			</div>
			
			<%String id = (String)session.getAttribute("userId");%>
			<div style="color: white;float: right;">
				<div>'<%=id%>'님 반갑습니다.</div>
				<a id="logout" style="color: white;float: right;font-weight: bold" href="/jinWook3/logOut">로그아웃</a> 
			</div>
			
		</div>
		
	</div>
	
	
</body>
</html>



