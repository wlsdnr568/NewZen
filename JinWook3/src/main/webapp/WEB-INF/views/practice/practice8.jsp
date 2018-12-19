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
	    RealGridJS.setRootContext("/jinWook3");
	    
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
	        ["송윤아", "1등"],
	        ["전도연", "2등"],
	        ["하지원", "3등"],
	        ["전지현", "4등"]
	    ];
	    dataProvider.setRows(data);
		
	    //동적으로 두 번째 행을 선택하는 함수
	    function setCurrent2Row(){
	    	var current = {};
	    	current.dataRow = 1;
	    	gridView.setCurrent(current);
	    }
	    
	    //ItemIndex와 RowId를 팝업하는 함수
	    function popupIndex(){
	    	var focusCell = gridView.getCurrent();
	    	alert("ItemIndex:" + focusCell.itemIndex + ", RowId:" + focusCell.dataRow);
	    }
	    
	    //두 번째 필드의 데이터를 기준으로 역순으로 정렬
	    function changeOrder(){
	    	var fields = ["field2"];
	    	var dirs = [RealGridJS.SortDirection.DESCENDING];
	    	gridView.orderBy(fields, dirs);
	    }
	    
	 	 //버튼을 클릭하면 포커스행을 두번째 행으로 선택합니다.
	    $("#btnSetCurrent2Row").on("click", function(){
	        setCurrent2Row();
	    })

	    //버튼을 클릭하면 ItemIndex와 RowId를 표시 합니다.
	    $("#btnPopupIndex1").on("click", function(){
	        popupIndex();
	    })
	    //버튼을 클릭하면 정렬순서를 바꿉니다.
	    $("#btnChangeOrder").on("click", function(){
	        changeOrder();
	    })

	    //버튼을 클릭하면 ItemIndex와 RowId를 표시 합니다.
	    $("#btnPopupIndex2").on("click", function(){
	        popupIndex();
	    })
	    
	});
	</script>
	
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>realGrid</title>
</head>
<body>
	<button type="button" class="btn btn-primary btn-xs" id="btnSetCurrent2Row">1. 두 번째 행 선택 하기</button>
	
	<button type="button" class="btn btn-primary btn-xs" id="btnPopupIndex1">2. ItemIdex와 RowId 팝업하기</button>
	
	<button type="button" class="btn btn-primary btn-xs" id="btnChangeOrder">3. 정렬순서 변경하기</button>
	
	<button type="button" class="btn btn-primary btn-xs" id="btnPopupIndex2">4. ItemIdex와 RowId 다시 팝업하기</button>
	<div id="realgrid" style="width: 50%; height: 200px; border: 1px solid black; margin: 0 auto; margin-top: 200px"></div>
	<div style="width:10%; margin: 0 auto"><a href="/jinWook3/practice/practice7">이전 페이지</a></div>
	<div style="width:10%; margin: 0 auto"><a href="/jinWook3/practice/practice9">다음 페이지</a></div>
</body>
</html>







