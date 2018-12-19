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
	
	    var fields = [
	        {
	            fieldName: "field1"
	        },
	        {
	            fieldName: "field2"
	        }
	    ];
	
	    dataProvider.setFields(fields);
	    
	    var columns = [
	    	{
				name: "coll",
				fieldName: "field1",
				header : {
					text: "컬럼1"
				},
				width: 200
	    	},
	    	{
	    		name: "col2",
	    		fieldName: "field1",
	    		header : {
	    			text: "컬럼2"
	    		},
	    		width: 200
	    	}
	    ]
	    gridView.setColumns(columns);
	    
	    var data=[
			["data1","data2"]
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
	<div style="width:10%; margin: 0 auto"><a href="/jinWook3/practice/practice3">이전 페이지</a></div>
	<div style="width:10%; margin: 0 auto"><a href="/jinWook3/practice/practice5">다음 페이지</a></div>
</body>
</html>







