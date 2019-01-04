<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script type="text/JavaScript" src="<c:url value="/resources/js/codehelper/sub_menu.js"/>"></script>
<script type="text/javascript">
	function wrapWindowByMask() {
		//화면의 높이와 너비를 구한다.
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
		$('#mask').css({
			'width' : maskWidth,
			'height' : maskHeight
		});

		//애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("slow", 0.8);

		//윈도우 같은 거 띄운다.
		$('.window').show();
	}

	$(document).ready(function() {
		//검은 막 띄우기
		$('.openMask').click(function(e) {
			e.preventDefault();
			wrapWindowByMask();
		});

		//닫기 버튼을 눌렀을 때
		$('.window .close').click(function(e) {
			//링크 기본동작은 작동하지 않도록 한다.
			e.preventDefault();
			$('#mask, .window').hide();
		});

	//검은 막을 눌렀을 때
	/*$('#mask').click(function () {  
	    $(this).hide();  
	    $('.window').hide();  
	});*/
	});


	$(function() {

		$("#tabs1").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");

		$("#tabs1 li").removeClass("ui-corner-top").addClass("ui-corner-left");

	});

	$(document).ready(function() {
		$(".tab_content").hide();
		$("ul.tabs1 li:first").addClass("active").show();
		$(".tab_content:first").show();


		$("ul.tabs1 li").click(function() {
			$("ul.tabs1 li").removeClass("active");
			$(this).addClass("active");
			$(".tab_content").hide();
			var activeTab = $(this).find("a").attr("href");
			$(activeTab).fadeIn();
			return false;
		});

	});
</script>

<style>
	#tabs1 {
		width: 1036px;
		height: 679px;
	}
	
	.ui-tabs-vertical .ui-tabs-nav {
		width: 54px;
		height: 679px;
		background-color: #2f7bc9;
		float: left;
		margin: 0;
		padding: 0;
	}
	
	li {
		list-style: none;
	}
	
	#mask {
		position: absolute;
		z-index: 9000;
		background-color: #80868b;
		opacity: 1;
		display: none;
		left: 0;
		top: 0;
		width: 100%;
	}
	
	.window {
		width: 1036px;
		height: 679px;
		border-radius: 5px 5px 5px 5px;
		background-color: #ffffff;
		border: 8px solid #2c5c8e;
		display: none;
		position: absolute;
		margin: 0 auto;
		z-index: 10000;
	}
	
	#header_contents {
		float: left;
		width: 320;
		height: 46px;
	}
	
	.header_icon {
		width: 20px;
		height: 46px;
		display: inline;
		position: absolute;
		line-height: 45px;
		float: left;
		text-align: center;
	}
	
	.input_box {
		background: url(../resources/img1/top_search.png) no-repeat;
		background-position: right;
		background-position-x: 100%;
		background-color: #ffffff;
		width: 204px;
		height: 23px;
		border: #2f7bc9 1px solid;
		cursor: pointer;
	}
	
	.header_search {
		width: 160px;
		padding: 8px 0px 0px 30px;
		font-family: 굴림;
		font-size: 13px;
		color: #000000;
	}
	
	#header_title {
		float: right;
		width: 630px;
		height: 44px;
	}
	
	.header_text {
		width: 176px;
		height: 44px;
		line-height: 39px;
		float: left;
		text-align: center;
		font-family: 굴림;
		font-size: 13px;
		font-weight: bold;
		color: #ffffff;
		padding-top: 3px;
	}
	
	.header_number {
		width: 510px;
		height: 44px;
		line-height: 39px;
		margin-left: 42px;
		float: left;
		text-align: right;
		padding-top: 3px;
		font-family: 굴림;
		font-size: 13px;
		color: #ffffff;
	}
	
	.header_img {
		width: 49px;
		height: 44px;
		line-height: 39px;
		float: right;
		text-align: right;
		padding: 8px 20px 0px 0px;
	}
	
	#header_top {
		width: 1024px;
		height: 44px;
		margin: auto;
	}
	
	/* .ui-widget.ui-widget-content {
		border: none;
	} */
</style>


<!--상단부분-->
<div id="header_top">
	<div id="header_top">
		<div id="header_contents">
	    	<div class="header_icon"><a href="#" class="openMask"><img src="<c:url value="/resources/img1/top_icon.png"/>" alt="" width="18" height="16" border="0" /></a></div>
	      	<div class="header_search"><input type="text" name="search" value="" class="input_box" /></div>
	   	</div>
	   	<div id="header_title">
	    	<div class="header_number"><span style="font-weight: bold;">[9995]이젠뉴젠그룹법인 –</span> 대표자 17기 2018.01.01 – 2018.12.31 [621-88-41144]</div>
	    	<div class="header_img"><a href="#" onclick="return false;" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image2','','<c:url value="/resources/img1/top_logout_up.png"/>',1)"><img src="<c:url value="/resources/img1/top_logout_down.png"/>" name="image21" border="0"></a></div>
	    </div>
	</div>
<!--상단부분-->

	<div id="mask"></div>
	<div class="window" id="tabs1" style="border: 8px solid #2c5c8e;">
		<div id="tabs1">
			<ul>
				<li style="list-style: none; margin: 0px; border: none; background: none;">
					<a href="#tabs-1" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image45','','<c:url value="/resources/img1/top_menu_01_up.png" />',1)" style="float: none; padding: 0; text-decoration: none;">
					<img src="<c:url value='/resources/img/top_menu_01.png' />" name="image45" border="0" /></a>
				</li>

				<li style="list-style: none; margin: 0px; border: none; background: none;">
					<a href="#tabs-2" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image46','','<c:url value="/resources/img1/top_menu_02_up.png" />',1)" style="float: none; padding: 0; text-decoration: none;">
					<img src="<c:url value='/resources/img/top_menu_02.png' />" name="image46" border="0" /></a>
				</li>

				<li style="list-style: none; margin: 0px; border: none; background: none;">
					<a href="#tabs-3" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image47','','<c:url value="/resources/img1/top_menu_03_up.png" />',1)" style="float: none; padding: 0; text-decoration: none;">
					<img src="<c:url value='/resources/img/top_menu_03.png' />" name="image47" border="0" /></a>
				</li>

				<li style="list-style: none; margin: 0px; border: none; background: none;">
					<a href="#tabs-4" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image48','','<c:url value="/resources/img1/top_menu_04_up.png" />',1)"  style="float: none; padding: 0; text-decoration: none;">
					<img src="<c:url value='/resources/img/top_menu_04.png' />" name="image48" border="0" /></a>
				</li>

				<li style="list-style: none; margin: 0px; border: none; background: none;">
					<a href="#tabs-5" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image49','','<c:url value="/resources/img1/top_menu_05_up.png" />',1)"  style="float: none; padding: 0; text-decoration: none;">
					<img src="<c:url value='/resources/img/top_menu_05.png' />" name="image49" border="0" /></a>
				</li>

				<li style="list-style: none; margin: 0px; border: none; background: none;">
					<a href="#tabs-6" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image50','','<c:url value="/resources/img1/top_menu_06_up.png" />',1)"  style="float: none; padding: 0; text-decoration: none;">
					<img src="<c:url value='/resources/img/top_menu_06.png' />" name="image50" border="0" /></a>
				</li>

				<li style="list-style: none; margin: 0px; border: none; background: none;">
					<a href="#tabs-7" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image51','','<c:url value="/resources/img1/top_menu_07_up.png" />',1)"  style="float: none; padding: 0; text-decoration: none;">
					<img src="<c:url value='/resources/img/top_menu_07.png' />" name="image51" border="0" /></a>
				</li>

			</ul>

			<!--닫기버튼-->
			<div style="width: 30px; height: 30px; margin-left: 1000px; float: right; display: inline; position: absolute;">
				<ul style="padding: 0; margin: 0;">
					<li>
						<a href="#" class="close" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image1','','<c:url value="/resources/img1/layer_btn_exit_up.png" />',1)">
							<img src="<c:url value='/resources/img1/layer_btn_exit.png' />" name="image1" border="0" />
						</a>
					</li>
				</ul>
			</div>
			<!--닫기버튼-->

			<div id="tabs-1" style="width: 982px; height: 678px; float: right; display: none; border-width: 0; padding: 0; background: none;">
				<%@ include file="/WEB-INF/views/tabmenu/tab_menu_01.jsp" %>
			</div>

			<div id="tabs-2" style="width: 982px; height: 678px; float: right; display: none; border-width: 0; padding: 0; background: none;">
				<%@ include file="/WEB-INF/views/tabmenu/tab_menu_02.jsp" %>
			</div>

			<div id="tabs-3" style="width: 982px; height: 678px; float: right; display: none; border-width: 0; padding: 0; background: none;">
				<%@ include file="/WEB-INF/views/tabmenu/tab_menu_03.jsp" %>
			</div>

			<div id="tabs-4" style="width: 982px; height: 678px; float: right; display: none; border-width: 0; padding: 0; background: none;">
				<%@ include file="/WEB-INF/views/tabmenu/tab_menu_04.jsp" %>
			</div>

			<div id="tabs-5" style="width: 982px; height: 678px; float: right; display: none; border-width: 0; padding: 0; background: none;">
				<%@ include file="/WEB-INF/views/tabmenu/tab_menu_05.jsp" %>
			</div>

			<div id="tabs-6" style="width: 982px; height: 678px; float: right; display: none; border-width: 0; padding: 0; background: none;">
				<%@ include file="/WEB-INF/views/tabmenu/tab_menu_06.jsp" %>
			</div>

			<div id="tabs-7" style="width: 982px; height: 678px; float: right; display: none; border-width: 0; padding: 0; background: none;">
				<%@ include file="/WEB-INF/views/tabmenu/tab_menu_07.jsp" %>
			</div>

		</div>

	</div>
</div>