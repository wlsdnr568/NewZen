<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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

    // 정렬초기화
    $("#btnResetOrder").on("click", function(){
        gridView.orderBy([], []);
    })   

    // 국어, 수학 컬럼을 순방향 정렬하기위해 orderBy() 함수 사용
    $("#btnChangeOrders").on("click", function(){
        gridView.orderBy(["field2", "field3"], ["ascending", "ascending"]);
    })    

});
</script>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>realGrid</title>
</head>
<body>
	<button type="button" class="btn btn-primary btn-xs" id="btnResetOrder">정렬상태 초기화</button>
	<button type="button" class="btn btn-primary btn-xs" id="btnChangeOrders">국어, 수학 컬럼 순방향 정렬</button>
	<div id="realgrid" style="width: 50%; height: 200px; border: 1px solid black; margin: 0 auto; margin-top: 200px"></div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/practiceB">이전 페이지</a></div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/practiceD">다음 페이지</a></div>
</body>
</html>



