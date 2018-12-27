<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/JavaScript" src="<c:url value="/resources/js/codehelper/sub_menu.js"/>"></script>	
<link rel="stylesheet" href="<c:url value="/resources/css/codehelper.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/css/jquery-ui.css"/>">

<div id="codeHelperModal" style="display:none; font-family:굴림; font-size:12px;">
	<!-- 상단 조회영역 -->
	<div style="display:inline; position:absoulte;">
		<div style="float:left; height:28px; vertical-align: top; ">
			<select id="optCodeHelperSearch" style="width:100px; height:22px; font-family:굴림; font-size:12px; color:#000000;"></select>
		</div> 
		<div style="float:right; margin-top:2px;"><input type="text" id="txtCodeHelperSearch" style="height:15px;" ></div>
	</div>
	
	<div style="height:30px;"></div>
	<!-- 그리드영역 -->
	<div id="gvCodeHelper" style="width: 100%; height: 350px;"></div>
	<!-- 하단 버튼영역 -->
	<div>
		<ul style="display: table; margin: auto; margin-top: 5px; padding:0; padding-left:2px;">
			<li id="btnCodeHelperOk" class="layer_btn_confim1">
				<a href="#" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image81','','<c:url value="/resources/img/btn_confirm_up.png"/>',1)">
					<img src="<c:url value="/resources/img/btn_confirm.png"/>" name="image81" border="0">
				</a>
			</li>
			<li id="btnCodeHelperCancel" class="layer_btn_exit1" style="width:40px;">
				<a href="#" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image91','','<c:url value="/resources/img/btn_cancel_up.png"/>',1)">
					<img src="<c:url value="/resources/img/btn_cancel.png"/>" name="image91" border="0">
				</a>
			</li>
		</ul>
	</div>	
	
</div>


