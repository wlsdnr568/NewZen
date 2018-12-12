<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<script src='//code.jquery.com/jquery.min.js'></script>

<style>
	#dialog-background {
	    display: none;
	    position: fixed;
	    top: 0; left: 0;
	    width: 100%; height: 100%;
	    background: rgba(0,0,0,.3);
	    z-index: 10;
	}
	#my-dialog {
	    display: none;
	    position: fixed;
	    left: calc( 50% - 160px ); top: calc( 50% - 70px );
	    width: 320px; height: 140px; 
	    background: #fff;
	    z-index: 11;
	    padding: 10px;
	}
</style>

<script>
$(function(){
	$("#btn-open-dialog").click(function () {
		$("#my-dialog,#dialog-background").fadeIn("fast");
	});
	$("#btn-close-dialog").click(function () {     
		$("#my-dialog,#dialog-background").fadeOut("fast");
	});
});
</script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

	간단한 모달창 <button id="btn-open-dialog">창 열기</button>

	<div id="my-dialog">창 내용<button id="btn-close-dialog">창 닫기</button></div>
	<div id="dialog-background"></div>
	
</body>
</html>


