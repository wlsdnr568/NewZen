<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>뉴젠솔루션</title> 
<link rel="shortcut icon" href="<c:url value="/resources/img/601819.png"/>" /> 
<link rel="stylesheet" href="<c:url value="/resources/css1/jquery-ui.css"/>">

<script src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
<script src="<c:url value="/resources/js/jquery-ui.js"/>"></script>
<script src="<c:url value="/resources/js/codehelper/sub_menu.js"/>"></script>

<style>
	body {
		margin : 0px;
		overflow-x : hidden;
	}
</style>
<script type="text/javascript">
//<![CDATA[
	$(document).ready(function() {
		$("#footer_icon").hide();
	});
// ]]>
</script>
</head>
<body>
	<%@ include file="/WEB-INF/views/include/header/header.jsp" %>
	<%@ include file="/WEB-INF/views/include/tab_menu.jsp" %>
	<%@ include file="/WEB-INF/views/include/footer.jsp" %>
</body>
</html>