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
        },
        {
            fieldName: "field3"
        },
        {
            fieldName: "field4"
        },
        {
            fieldName: "field5"
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
                text: "직업"
            },
            width: 100
        },
        {
            name: "col2",
            fieldName: "field2",
            header : {
                text: "성별"
            },
            width: 100
        },
        {
            name: "col3",
            fieldName: "field3",
            header : {
                text: "이름"
            },
            width: 100
        },
        {
            name: "col4",
            fieldName: "field4",
            header : {
                text: "국어"
            },
            width: 100
        }
        ,{
            name: "col5",
            fieldName: "field5",
            header : {
                text: "수학"
            },
            width: 100
        }
    ];
    //컬럼을 GridView에 입력 합니다.
    gridView.setColumns(columns);

    var data = [
        ["배우", "여자", "송윤아", "10", "33"],
        ["배우", "여자", "전도연", "20", "22"],
        ["가수", "여자", "이선희", "40", "33"],
        ["배우", "여자", "하지원", "10", "11"],
        ["가수", "여자", "소찬휘", "30", "55"],
        ["가수", "여자", "박정현", "40", "22"],
        ["배우", "여자", "전지현", "20", "44"]
    ];
    dataProvider.setRows(data);
  

});
</script>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>realGrid</title>
</head>
<body>
	<div id="realgrid" style="width: 50%; height: 200px; border: 1px solid black; margin: 0 auto; margin-top: 200px"></div>
	<div style="width:10%; margin: 0 auto"><a href="/jinWook3/practice/practiceC">이전 페이지</a></div>
	<div style="width:10%; margin: 0 auto"><a href="/jinWook3/practice/practiceE">다음 페이지</a></div>
</body>
</html>



