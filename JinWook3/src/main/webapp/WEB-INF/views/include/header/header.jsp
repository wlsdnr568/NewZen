<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script type="text/JavaScript" src="<c:url value="/resources/js/codehelper/sub_menu.js"/>"></script>
<link rel="stylesheet" href="<c:url value="/resources/css1/header.css"/>">	
<script>
	$(document).ready(function(){
		$("#btnMenu").on("click", function(e){
			e.preventDefault();
			wrapWindowByMask();
			
		});
	});
	function wrapWindowByMask(){
		//화면의 높이와 너비를 구한다.
		var maskHeight = $(document).height();  
		var maskWidth = $(window).width();  
	
		//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
		$('#mask').css({'width':maskWidth,'height':maskHeight});  
	
		//애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
		$('#mask').fadeIn(1000);      
		$('#mask').fadeTo("slow",0.8);    
	
		//윈도우 같은 거 띄운다.
		$("#menuTab").show();
	}
</script>

<!-- header area start -->
<div id="header">
	<div id="header_top">
		<div id="header_contents">
			<div class="header_icon">
				<a href="#" id="btnMenu" class="openMask">
					<img src="<c:url value="/resources/img1/top_icon.png"/>" alt="" width="18" height="16" border="0" />
				</a>
			</div>
			<div class="search_header">
				<input type="text" name="search" value="" class="search_box">
			</div>
		</div>
		<div id="header_title">
			<div class="header_number">
				<div class="new_tlt">
					[9995]이젠뉴젠그룹법인 - 
				</div>
				<div class="num_reperion">
					대표자 17기 2018.01.01 - 2018.12.31 [621-88-41144]
				</div>
			</div>
			<div class="header_img">
				<a href="" id="btnLogout" 
					onMouseOut="MM_swapImgRestore()"
					onMouseOver="MM_swapImage('image111','','<c:url value="/resources/img1/top_logout_up.png"/>',1)">
					<img src="<c:url value="/resources/img1/top_logout_down.png"/>" name="image111" border="0"></a>
			</div>
		</div>
	</div>
	<!-- header area end -->
	
	<!-- menu area start -->
	<%@ include file="/WEB-INF/views/include/header/menu_list.jsp" %>
	<!-- menu area end -->
</div>