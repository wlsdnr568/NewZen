<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>뉴젠솔루션 - 거래처등록</title>
<link rel="shortcut icon" href="<c:url value="/resources/img/favicon.ico"/>" /> 
<script src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
<script src="<c:url value="/resources/js/jquery-ui.js"/>"></script>
<script src="<c:url value="/resources/js/common.js" />"></script>
<script src="<c:url value="/resources/js/datepicker.js" />"></script>    
<script src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
<script src="<c:url value="/resources/js/realgridjs_eval.1.1.28.min.js"/>"></script>
<script src="<c:url value="/resources/js/realgridjs-api.1.1.28.js" />"></script>
<script src="<c:url value="/resources/js/jszip.min.js" />"></script>
<script src="<c:url value="/resources/js/jquery-ui.js" />"></script>
<script type="text/javascript">
	//페이지 로딩시
	$(document).ready(function() {
		//window.print();
		
	});

</script>
</head>
<body>
	<frameset rows="100%" framespacing="0" frameborder="0" border="0">
		<iframe id="myFrame" style="display:block; width:100vw; height: 100vh;" src="http://211.44.250.187:8090/oz70/ozhviewer/sampledata3.html?ozData=${ozData}&ozData2=${ozData2}" scrolling="no"></iframe>
	</frameset>	
</body>
</html>