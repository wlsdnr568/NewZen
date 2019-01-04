<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	
	<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.base.css"/>"><!-- 드랍다운리스트 때문에 적용 -->
	<script data-main="<c:url value="/resources/js/main.js"/>" src="<c:url value="/resources/js/require/require.js" />"></script>
	<script type="text/javascript">
	
		require(["initCustReg2"], function () {
			
		}); 
		
	</script>
 
<head>
<meta charset="utf-8">
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<div id="custRegForm"></div>
</body>
</html>
