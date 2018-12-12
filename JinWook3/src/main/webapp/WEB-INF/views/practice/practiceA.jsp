<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/bootstrap.css"/>" />
	
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
	
	<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/realgridjs_eval.1.1.30.min.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-api.1.1.30.js" />"></script>
	
	<script>
	var gridView;
	var dataProvider;
	    
	$(document).ready( function() {
	
	    RealGridJS.setTrace(false);
	    RealGridJS.setRootContext("/script");
	    
	    dataProvider = new RealGridJS.LocalDataProvider();
	    gridView = new RealGridJS.GridView("realgrid");
	    gridView.setDataSource(dataProvider);
	
	    //그리드의 소트 옵션 설정 함수
	    function setSortStyles(style) {
	        var options = {};
	        options.style = style;
	        gridView.setSortingOptions(options);        
	    }
	
	    //두 개의 필드를 가진 배열 객체를 생성합니다.
	    var fields = [
	        {
	            fieldName: "field1"
	        },
	        {
	            fieldName: "field2"
	        },
	        {
	            fieldName: "field3"
	        }
	    ];
	    //DataProvider의 setFields함수로 필드를 입력합니다.
	    dataProvider.setFields(fields);
	
	    //field1필드와 연결된 컬럼을 가진 배열 객체를 생성합니다.
	    var columns = [
	        {
	            name: "col1",
	            fieldName: "field1",
	            header : {
	                text: "이름"
	            },
	            width: 150
	        },
	        {
	            name: "col2",
	            fieldName: "field2",
	            header : {
	                text: "국어"
	            },
	            width: 150
	        },
	        {
	            name: "col3",
	            fieldName: "field3",
	            header : {
	                text: "수학"
	            },
	            width: 150
	        }
	    ];
	    //컬럼을 GridView에 입력 합니다.
	    gridView.setColumns(columns);
	
	    var data = [
	        ["송윤아", "10", "33"],
	        ["전도연", "20", "22"],
	        ["하지원", "10", "11"],
	        ["전지현", "20", "44"]
	    ];
	    dataProvider.setRows(data);
	
	    // SortStyle을 NONE으로 설정
	    $("#btnChangeSortStyleNone").on("click", function(){
	        setSortStyles(RealGridJS.SortStyle.NONE);
	    })    
	
	    // SortStyle을 EXCLUSIVE로 설정
	    $("#btnChangeSortStyleExclusive").on("click", function(){
	        setSortStyles(RealGridJS.SortStyle.EXCLUSIVE);
	    })    
	});
	</script>
	
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>realGrid</title>
</head>
<body>
	<button type="button" class="btn btn-primary btn-xs" id="btnChangeSortStyleNone">SortStyle을 NONE으로 설정</button>
	<button type="button" class="btn btn-primary btn-xs" id="btnChangeSortStyleExclusive">SortStyle을 EXCLUSIVE로 설정</button>
	<div id="realgrid" style="width: 50%; height: 200px; border: 1px solid black; margin: 0 auto; margin-top: 200px"></div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/practice9">이전 페이지</a></div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/practiceB">다음 페이지</a></div>
</body>
</html>







