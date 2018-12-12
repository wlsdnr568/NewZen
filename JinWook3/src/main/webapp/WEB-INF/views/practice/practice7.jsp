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
	    
	    //두 개의 필드를 가진 배열 객체를 생성합니다.
	    var fields = [
	        {
	            fieldName: "field1"
	        },
	        {
	            fieldName: "field2"
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
	                text: "컬럼1"
	            },
	            width: 150
	        },
	        {
	            name: "col2",
	            fieldName: "field2",
	            header : {
	                text: "컬럼2"
	            },
	            width: 150
	        }
	    ];
	    //컬럼을 GridView에 입력 합니다.
	    gridView.setColumns(columns);
	
	    var data = [
	        ["data1-1", "data1-2"],
	        ["data2-1", "data2-2"],
	        ["data3-1", "data3-2"],
	        ["data4-1", "data4-2"]
	    ];
	    dataProvider.setRows(data);
	
	    function popupRowId(){
	        var focusCell = gridView.getCurrent();
	        alert(focusCell.itemIndex);
	    }
	
	    //버튼을 클릭하면 포커스된 셀의 RowId를 표시합니다.
	    $("#btnToggleFocus").on("click", function(){
	        popupRowId();
	    })    
	
	});
	</script>
	
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>realGrid</title>
</head>
<body>
	<button type="button" class="btn btn-primary btn-xs" id="btnToggleFocus">포커스셀 ItemIndex 팝업하기</button> 버튼을 클릭하여 ItemIndex가 팝업 되는 것을 확인하세요.
	<div id="realgrid" style="width: 50%; height: 200px; border: 1px solid black; margin: 0 auto; margin-top: 200px"></div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/practice6">이전 페이지</a></div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/practice8">다음 페이지</a></div>
</body>
</html>







