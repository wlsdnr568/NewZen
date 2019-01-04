<!-- 
	180718_kmh
	메뉴 리스트 페이지 (modal)
-->
<link rel="stylesheet" href="<c:url value="/resources/css1/menu_list.css"/>">	

<script>
	$(document).ready(function() {
		loadMenuListByModule("acc_01"); // 기본 회계메뉴 선택

		$("#btnMenuListClose").on("click", function(e) {
			e.preventDefault();
			$('#mask, #menuTab').hide();
		});

		$("#btnMenuListAcc01").on("click", function(e) {
			e.preventDefault();
			loadMenuListByModule("acc_01");
		});

		$("#btnMenuListAcc02").on("click", function(e) {
			e.preventDefault();
			loadMenuListByModule("acc_02");
		});

		$("#btnMenuListTax").on("click", function(e) {
			e.preventDefault();
			loadMenuListByModule("tax");
		});

		$("#btnMenuListCor").on("click", function(e) {
			e.preventDefault();
			loadMenuListByModule("cor");
		});

		$("#btnMenuListCit").on("click", function(e) {
			e.preventDefault();
			loadMenuListByModule("cit");
		});

		$("#btnMenuListPhy").on("click", function(e) {
			e.preventDefault();
			loadMenuListByModule("phy");
		});

		$("#btnMenuListTar").on("click", function(e) {
			e.preventDefault();
			loadMenuListByModule("tar");
		});
	});

	function getContextPath() {
		return window.location.pathname.substring(0, window.location.pathname
				.indexOf("/", 2));
	}

	function addTab(title, link) {
		/*
		let tabs_id = "tabs-" + $(link).attr("id");
		let find_id = $("[id=" + tabs_id + "]").attr("id");
		let tab_id = "#" + tabs_id;
		*/
		
		// 탭에 추가할 탭이 포함되어 있는지 확인
		// - 포함된 경우 해당 탭으로 포커스 이동
		// - 미포함인 경우 탭 추가 후 마지막 탭으로 포커스 이동
		let isExist = false;
		$("#tab_menu ul > li").each(function(i){
			let cmpTitle = $(this).find("a").text();
			
			if(cmpTitle === title) {
				// 탭 포커스 이동
				$("#tab_menu").tabs({
					active : i
				});	
				
				isExist = true;
				return false;	// break; 와 같은 역할
			}
		});
		
		if(isExist == true) {
			$('#mask, #menuTab').hide();
			return;
		}
	
		// li template를 기반으로 탭 생성
		// Ajax를 통해 Content 가져와서 탭 내용 설정
		let tabTemplate = "<li><a href='<%="#"%>{href}'><%="#"%>{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";
		 
		let label = $(link).text();
		let id = "tabs-" + $(link).attr("id");
		let rel = $(link).attr("rel");
		
		let li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(
				/#\{label\}/g, label));
		let contentHtml = "";

		$.ajax(getContextPath() + "/" + rel, {
			type : "GET",
			async : false,
			dataType : "html"
		})
		.done(function(data) {	// success 시
			// 탭 추가
			$("#tab_menu .ui-tabs-nav").append(li);
			
			// 탭 내용 추가
			contentHtml = data;
			$("#tab_menu").append("<div id=" + id +">" + contentHtml + "</div>");
			
			$("#tab_menu").tabs("refresh");
			
			// 탭 포커스 설정
			$("#tab_menu").tabs({
				active : -1
			});
		})
		.fail(function(data) {
			alert("loadLogs failed");
		});

		
		$('#mask, #menuTab').hide();
	}

	function loadMenuListByModule(module) {
		$.ajax(getContextPath() + "/practice/loadMenuListByModule", {
			type : "post",
			dataType : "html",
			data : {
				module : module
			},
			async : false
		}).done(function(data) { // success 시
			$("#menuContents").html(data);
			//alert(data);
		}).fail(function(data) {
			alert("loadLogs failed");
		});
	}
</script>

<!-- 화면 마스킹 area start -->
<div id="mask"></div>
<!-- 화면 마스킹 area end -->


<!-- tab area start -->
<div id="menuTab">
	<div id="menuModuleList">
		<ul style="margin: 0; padding: 0;">
			<li><a href="" id="btnMenuListAcc01"
				onMouseOut="MM_swapImgRestore()"
				onMouseOver="MM_swapImage('image45','','<c:url value="/resources/img1/top_menu_01_up.png"/>',1)">
					<img src="<c:url value="/resources/img1/top_menu_01.png"/>"
					name="image45" border="0">
			</a></li>
			<li><a href="" id="btnMenuListAcc02"
				onMouseOut="MM_swapImgRestore()"
				onMouseOver="MM_swapImage('image46','','<c:url value="/resources/img1/top_menu_02_up.png"/>',1)">
					<img src="<c:url value="/resources/img1/top_menu_02.png"/>"
					name="image46" border="0">
			</a></li>
			<li style="padding: 0; margin: 0;"><a href=""
				id="btnMenuListTax" onMouseOut="MM_swapImgRestore()"
				onMouseOver="MM_swapImage('image47','','<c:url value="/resources/img1/top_menu_03_up.png"/>',1)">
					<img src="<c:url value="/resources/img1/top_menu_03.png"/>"
					name="image47" border="0">
			</a></li>
			<li><a href="" id="btnMenuListCor"
				onMouseOut="MM_swapImgRestore()"
				onMouseOver="MM_swapImage('image48','','<c:url value="/resources/img1/top_menu_04_up.png"/>',1)">
					<img src="<c:url value="/resources/img1/top_menu_04.png"/>"
					name="image48" border="0">
			</a></li>
			<li><a href="" id="btnMenuListCit"
				onMouseOut="MM_swapImgRestore()"
				onMouseOver="MM_swapImage('image49','','<c:url value="/resources/img1/top_menu_05_up.png"/>',1)">
					<img src="<c:url value="/resources/img1/top_menu_05.png"/>"
					name="image49" border="0">
			</a></li>
			<li><a href="" id="btnMenuListPhy"
				onMouseOut="MM_swapImgRestore()"
				onMouseOver="MM_swapImage('image50','','<c:url value="/resources/img1/top_menu_06_up.png"/>',1)">
					<img src="<c:url value="/resources/img1/top_menu_06.png"/>"
					name="image50" border="0">
			</a></li>
			<li><a href="" id="btnMenuListTar"
				onMouseOut="MM_swapImgRestore()"
				onMouseOver="MM_swapImage('image51','','<c:url value="/resources/img1/top_menu_07_up.png"/>',1)">
					<img src="<c:url value="/resources/img1/top_menu_07.png"/>"
					name="image51" border="0">
			</a></li>
		</ul>
	</div>

	<!-- menu contents area start -->
	<div id="menuContents"></div>
	<!-- menu contents area end -->

	<!-- close button area start -->
	<div id="btnExit">
		<ul style="padding: 0; margin: 0;">
			<li><a href="" id="btnMenuListClose" class="close"
				onMouseOut="MM_swapImgRestore()"
				onMouseOver="MM_swapImage('image1','','<c:url value="/resources/img1/layer_btn_exit_up.png"/>',1)">
					<img src="<c:url value="/resources/img1/layer_btn_exit.png"/>"
					name="image1" border="0">
			</a></li>
		</ul>
	</div>
	<!-- close button area end -->
	<%-- 
	<div id="menu_01" style="width: 982px; height: 678px; float: right;">
		<%@ include file="/WEB-INF/views/include/header/menu_list_01.jsp" %>
	</div>
	<div id="menu_02" style="width: 982px; height: 678px; float: right;">
		<%@ include file="/WEB-INF/views/include/header/menu_list_02.jsp" %>
	</div>
	<div id="menu_03" style="width: 982px; height: 678px; float: right;">
		<%@ include file="/WEB-INF/views/include/header/menu_list_03.jsp" %>
	</div>
	<div id="menu_04" style="width: 982px; height: 678px; float: right;">
		<%@ include file="/WEB-INF/views/include/header/menu_list_04.jsp" %>
	</div>
	<div id="menu_05" style="width: 982px; height: 678px; float: right;">
		<%@ include file="/WEB-INF/views/include/header/menu_list_05.jsp" %>
	</div>
	<div id="menu_06" style="width: 982px; height: 678px; float: right;">
		<%@ include file="/WEB-INF/views/include/header/menu_list_06.jsp" %>
	</div>
	<div id="menu_07" style="width: 982px; height: 678px; float: right;">
		<%@ include file="/WEB-INF/views/include/header/menu_list_07.jsp" %>
	</div>
	 --%>
</div>
<!-- tab area end -->