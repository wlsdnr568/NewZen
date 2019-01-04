<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.text.DateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

	<link rel="stylesheet" href="<c:url value="/resources/css/board_css.css"/>">
	<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.base.css"/>">
	<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.arctic.css"/>">
	
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcore.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxbuttons.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxscrollbar.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxlistbox.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxdropdownlist.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxdropdownbutton.js"/>"></script>    
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcolorpicker.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxwindow.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxeditor.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxtooltip.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcheckbox.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcore.js"/>"></script>
	  
	<script type="text/javascript">
        $(document).ready(function () {
            $('#editor').jqxEditor({
                height: 500,
                width: 700,
                localization: {
                    "bold": "굵게",
                    "italic": "기울이기",
                    "underline": "밑줄",
                    "format": "Block-Format",
                    "font": "글씨체",
                    "size": "글자크기",
                    "color": "글자색",
                    "background": "배경색",
                    "left": "Links ausrichten",
                    "center": "Mitte ausrichten",
                    "right": "Rechts ausrichten",
                    "outdent": "Weniger Einzug",
                    "indent": "Mehr Einzug",
                    "ul": "Legen Sie ungeordnete Liste",
                    "ol": "Geordnete Liste einfügen",
                    "image": "사진",
                    "link": "링크",
                    "html": "html",
                    "clean": "Formatierung entfernen"
                }
            });
        });
	    
	    function addBoard(){
			$("#board_write_formBox").css("display","block")
			$("#board_write_formBox").show("slow")
			$("#mask").css("display","block")
			$("#mask").show("slow")     
		}
	    
	    function cancelBtn(){
	    	
	    	$("#board_write_formBox").css("display","none")
			$("#board_write_formBox").hide("slow")
			
			$("#mask").css("display","none")
			$("#mask").hide("slow")
			
			$("#board_write_form")[0].reset();
	    	$("#editor").jqxEditor('val', '');
	    }
	    
	    function writeBoard(){
	    	
	    	var data={};
	    	data["boardName"] = $("#boardName").val();
	    	data["writer"] = $("#writer").val();
	    	data["writeDate"] = $("#writeDate").val();
	    	data["content"] = $("#editor").jqxEditor('val');
	    	
	    	$.ajax({
	    		url : "/jinWoo3/board/writeBoard",
	    		type : "post",
	    		data : data,
	    		dataType : "json",  
	    		success : function(result){
	    			
	    			if(result){
		    			alert("작성되었습니다.");
	    			}else{
	    				alert("데이터 전송 실패")
	    			}
	    			
	    		},error : function(){
	    		}
	    	});
	    	cancelBtn();
	    	location.reload();
	    }
	</script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style type="text/css">
	
</style>
<title>게시판 메인</title>
</head>
<body>

	<div id="mask"></div>
<!-- 	 헤더 -->
	 <%@ include file="/WEB-INF/views/include1/header.jsp" %>
<!-- 	 내용 -->
	 <div id="cont">
<!-- 	 	내용 -> 메뉴 -->
	 	<%@ include file="/WEB-INF/views/include1/aside.jsp" %>
<!-- 	 	내용 -> 메인 화면 -->
	 	<div id="cont_right"> 
<!-- 	 		내용 -> 메인 화면 -> 메뉴바 -->
	 		<div id="cont_toolbar">
	 			<ul>
	 				<li><span onclick="addBoard()">글쓰기</span></li>
	 				<c:if test="">
	 					<li><span onclick="addBoard()">글쓰기</span></li>
	 				</c:if>
	 			</ul>
	 		</div>
	 		
	 		<div id="board_write_formBox">  
	 			<form id="board_write_form">  
					<table id="board_write_form_table">
						<tr>
							<th colspan="2" style="background-color: #4092d7; color: white; font-size: 18px">게시글 작성</th>
						</tr>
						<tr>
							<th>제목</th>
							<td>
								<input id="boardName" name="boardName" type="text" size="35">
							</td>  
						</tr>
						<tr>
							<th>작성자</th>
							<td>
								<input id="writer" name="writer" type="text" size="10">
							</td>
						</tr>
						<tr>
							<th>작성일</th>
							<td>
								<% 
									Date now = new Date();
								
									SimpleDateFormat sf = new SimpleDateFormat("yyyy/MM/dd hh:mm:ss");
	
									String today = sf.format(now);
								%>  
								<input id="writeDate" name="writeDate" type="text" size="15" value="<%=today%>" readonly="readonly">  
							</td>
						</tr>
						<tr>
							<th>내용</th>
							<td style="padding-left: 5px;padding-right: 5px">
								<textarea name="editor" id="editor"></textarea>
							</td>
						</tr>
					</table>
					
					<div id="btnInBox">
						<input id="btnSubmit" type="button" value="확인" onclick="writeBoard()">
						<input id="btnReset" type="reset" value="다시 작성">
						<input id="btnCancel" type="button" value="취소" onclick="cancelBtn()">
					</div>
					
	 			</form>
	 		</div>
				 		
	 		<div id=cont_list>
	 			<div id="cont_listContent">
	 				<table id="cont_listContent_table">
 						<tr>
	 						<th width="100" style="background-color: #e5ecf1">글 번호</th>   
	 						<th width="150" style="background-color: #e5ecf1">제목</th>
	 						<th width="100" style="background-color: #e5ecf1">작성자</th>
	 						<th iwdth="150" style="background-color: #e5ecf1">작성일</th> 
	 						<th colspan="1" style="background-color: #e5ecf1"><input name="checkAll" id="th_checkAll" onclick="checkAll()" type="checkbox"></th> 
	 					</tr>
		 					 
		 				<c:forEach items="${viewData.boardList}" var="board">
		 					<tr id="row" style="border-bottom: 1px solid #e6e6e6;">
		 						<td style="width: 70px;">${board.boardNo}</td>   
		 						<td><a href="/jinWook3/board/boardView?boardNo=${board.boardNo}">${board.boardName}</a></td>
		 						<td style="width: 70px;">${board.writer}</td>
		 						<td>${board.writeDate}</td>
		 						<td><input type="checkbox" id="checkRow" name="checkRow"></td>
		 					</tr>
		 				</c:forEach>
	 				</table>
	 			</div>
	 			
	 			
	 			<!--///////////////////////////페이징///////////////////////////////////////////////// -->
	 				<div style="text-align: center;">
		
						<c:if test="${viewData.startPage !=1 }">
							<a style="font-weight: normal" 
								href="main?page=1"<c:if test="${viewData.type != null}">&type=${viewData.type}</c:if>
												  <c:if test="${viewData.keyword != null}">&keyword=${viewData.keyword}</c:if>
							>[처음]
							</a>
							
							<a style="font-weight: normal" 
								href="main?page=${viewData.startPage-1}"<c:if test="${viewData.type != null}">&type=${viewData.type}</c:if>
																		<c:if test="${viewData.keyword != null}">&keyword=${viewData.keyword}</c:if>
							>[이전]
							</a>
						</c:if>
						
						<c:forEach var="pageNum" begin="${viewData.startPage}" 
						end="${viewData.endPage < viewData.pageTotalCount ? viewData.endPage : viewData.pageTotalCount}">
							<c:choose>
							
								<c:when test="${pageNum == viewData.currentPage}">
									<b>[${pageNum}]</b>
								</c:when>
								
								<c:otherwise>
									<a style="font-weight: normal;" 
										href="main?page=${pageNum}<c:if test="${viewData.type != null}">&type=${viewData.type}</c:if>
																  <c:if test="${viewData.keyword != null}">&keyword=${viewData.keyword}</c:if>"
									>[${pageNum}]</a>
								</c:otherwise>
								
							</c:choose>
						</c:forEach>
						
						<c:if test="${viewData.endPage < viewData.pageTotalCount}">
							<a style="font-weight: normal;" 
								href="main?page=${viewData.endPage+1}"<c:if test="${viewData.type != null}">&type=${viewData.type}</c:if>
																	  <c:if test="${viewData.keyword != null}">&keyword=${viewData.keyword}</c:if>
							>[다음]</a>
							
							<a style="font-weight: normal;" 
								href="main?page=${viewData.pageTotalCount}"<c:if test="${viewData.type != null}">&type=${viewData.type}</c:if>
																		   <c:if test="${viewData.keyword != null}">&keyword=${viewData.keyword}</c:if>
							>[마지막]</a>
						</c:if>
						
					</div>
<!--///////////////////////////페이징///////////////////////////////////////////////// -->
					<form action="main" style="text-align: center; margin-top: 40px; margin-bottom: 100px">
						<select name="type" style="height: 25px;">
							<option value="1">제목</option>
							<option value="2">작성자</option>
							<option value="3">제목+작성자</option>
						</select> 
						<input style="border: 1px solid gray" type="text" name="keyword">
						<input style="cursor: pointer;border: 1px solid gray" id="searchBtn" type="submit" value="검색">
					</form>
<!-- 	 				///////////////////////////////////////////////// -->
	 			
	 		</div>
	 		
	 		
	 	</div>
	 </div>
	 
</body>
</html>

