<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Untitled Document</title>
    <script src="<c:url value="/resources/js/codehelper/sub_menu.js" />"></script>
</head>
<body>
<!-- 변수에 따라 레프트 메뉴 이미지 표시 -->
	<div style="width:166px;">
	    <ul class="aside_left">
	        <li style="list-style:none;">
	        	<c:choose>
	        		<c:when test="${pageMain eq '1'}">
		        		<a href="<c:url value="/contSearch"/>">
			        		<img src="<c:url value="/resources/img1/left_menu_01_up.png"/>" border="0" />
			        	</a>
	        		
	        		</c:when>
	        		<c:otherwise>
	        			<a href="<c:url value="/contSearch"/>" 
			        		onMouseOut="MM_swapImgRestore()" 
			        		onMouseOver="MM_swapImage('Image1','','<c:url value="/resources/img1/left_menu_01_up.png"/>',1)">
			        		<img src="<c:url value="/resources/img1/left_menu_01.png"/>" name="Image1" border="0" />
			        	</a>	
	        		</c:otherwise>
	        	</c:choose>
	        </li>
	        <li class="aside_menu">
		        <c:choose>
	        		<c:when test="${pageMain eq '2'}">
		        		<a href="<c:url value="/contApproval"/>">
			        		<img src="<c:url value="/resources/img1/left_menu_02_up.png"/>" border="0" />
			        	</a>
	        		
	        		</c:when>
	        		<c:otherwise>
	        			<a href="<c:url value="/contApproval"/>" 
			        		onMouseOut="MM_swapImgRestore()" 
			        		onMouseOver="MM_swapImage('Image2','','<c:url value="/resources/img1/left_menu_02_up.png"/>',1)">
			        		<img src="<c:url value="/resources/img1/left_menu_02.png"/>" name="Image2" border="0" />
			        	</a>	
	        		</c:otherwise>
	        	</c:choose>
	        </li>
	        <li class="aside_menu">
	        	<c:choose>
	        		<c:when test="${pageMain eq '3'}">
		        		<a href="<c:url value="/contComplete"/>">
			        		<img src="<c:url value="/resources/img1/left_menu_03_up.png"/>" border="0" />
			        	</a>
	        		
	        		</c:when>
	        		<c:otherwise>
	        			<a href="<c:url value="/contComplete"/>" 
			        		onMouseOut="MM_swapImgRestore()" 
			        		onMouseOver="MM_swapImage('Image3','','<c:url value="/resources/img1/left_menu_03_up.png"/>',1)">
			        		<img src="<c:url value="/resources/img1/left_menu_03.png"/>" name="Image3" border="0" />
			        	</a>	
	        		</c:otherwise>
	        	</c:choose>
	        </li>
	
	    </ul>
	</div>
</body>
</html>