<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="<c:url value="/resources/css1/tab_menu.css"/>">
<style>
	 .ui-state-active .ui-icon,
	 .ui-button:active .ui-icon {
	  	background-image: url("<c:url value="/resources/img1/ui-icons_ffffff_256x240.png"/>");
	 }

	.ui-icon,
	.ui-widget-content .ui-icon {
		background-image: url("<c:url value="/resources/img1/ui-icons_444444_256x240.png"/>");
	}
 
</style>

<script>
	$(document).ready(function(){
		let tabs = $("#tab_menu").tabs({
			beforeLoad: function (event, ui) {
                if (ui.tab.data("loaded")) {
                    event.preventDefault(); 
                    return;
                }
                ui.ajaxSettings.cache = false,
                ui.jqXHR.done(function() {
                    ui.tab.data( "loaded", true );
                })
			}
		});
		
		$("#btnAdd").on("click", function(){
			addTab("test", getContextPath() + "/test");
		});
		
		tabs.on( "click", "span.ui-icon-close", function() {	
		    // 홈탭 제외 다른 탭 삭제 
		    let panelId = $(this).closest( "li" ).attr("aria-controls");
		    
		    if(panelId === "home")
		    	return;
		    
		    // 탭 삭제
		    $( this ).closest( "li" ).remove().attr( "aria-controls" );

		    // 내용 삭제
		    $("#" + panelId).remove();

		    tabs.tabs( "refresh" );
		    
	   		// 마지막 탭 선택
			$("#tab_menu").tabs({
				active : -1
			});	
	    });
	});
</script>
	<div id="tab_menu" class="ui-tabs"> 
		<ul class="ui-tabs-nav">
			<li>
				<a href="#home">Home</a>
				<span class="ui-icon ui-icon-close" role="presentation"></span>
			</li>
		</ul>
		
		<div id="home" style="text-align:center; margin-top:-20px;">
			<img src="<c:url value="/resources/img1/home_img_01.png"/>" name="image1" border="0">
		</div>
	</div>

 