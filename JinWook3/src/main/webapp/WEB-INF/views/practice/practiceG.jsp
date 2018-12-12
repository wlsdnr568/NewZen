<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/bootstrap.css"/>" />
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	 
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	
	<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/realgridjs_eval.1.1.30.min.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-api.1.1.30.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/common/common.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/common/grid.js"/>"></script>
	
	<style type="text/css">
	#realgridPopup {
	   display: none;
	   position: fixed;
	   left: calc( 50% - 160px ); top: calc( 50% - 70px );
	   width: 320px; height: 140px; 
	   background: #fff;
	   z-index: 11;
	   padding: 10px;
	}
	#realgridPopup-background {
	    display: none;
	    position: fixed;
	    top: 0; left: 0;
	    width: 100%; height: 100%;
	    background: rgba(0,0,0,.3);
	    z-index: 10;
	}
	</style>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>realGrid</title>
</head>  
<body>
	
	<div id="box" style="width: 55%; margin: 0 auto; margin-top: 100px;"> 
		<input type="text" id="datepicker" size="14" style="text-align: center;">
		<input type="button" value="변경" id="change">	
		<label for="exchage">현금잔액:</label>
		<input type="text" readonly="readonly" id="exchange">
		<label for="asd">대차차액:</label>
		<input type="text" readonly="readonly" id="asd">
	</div>
	
	<div id="realgrid" style="width: 55%; height: 500px; border: 1px solid black; margin: 0 auto; margin-top: 20px"></div>
	<div id="helpBox" style="width: 55%; margin: 0 auto; margin-top: 5px"></div>
	<div id="realgridPopup" style="width: 20%; height: 350px; border: 1px solid black;"></div>     
	<div id="realgridPopup-background"></div>
	
</body>
</html>
  






