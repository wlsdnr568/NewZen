<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="<c:url value="/resources/css/toolbar.css"/>">	
<!-- common_toolbar -->
<div id="tab_common">
    <div id="tab_many">
        <ul style="margin: 0; padding: 0;">
            <li id="save_btn" class="tab_tool">
            	<a href="" id="btnCommonTabSave" 
            		onclick="return false;" 
            		onMouseOut="MM_swapImgRestore()" 
            		onMouseOver="MM_swapImage('image11','','<c:url value="/resources/img/icon_save_up.png"/>',1)">
            		<img src="<c:url value="/resources/img/icon_save.png"/>" name="image11" border="0" alt="저장">
            	</a>
            </li>

            <li class="tab_tool">
            	<a href="" id="btnCommonTabHelp" class="notUsedBtn"
            		onclick="return false;" 
            		onMouseOut="MM_swapImgRestore()" 
            		onMouseOver="MM_swapImage('image12','','<c:url value="/resources/img/icon_help_up.png"/>',1)">
            		<img src="<c:url value="/resources/img/icon_help.png"/>" name="image12" border="0" alt="도움">
            	</a>
            </li>

            <li class="tab_tool">
            	<a href="" id="btnCommonTabCode" class="notUsedBtn"
            		onclick="return false;" 
            		onMouseOut="MM_swapImgRestore()" 
            		onMouseOver="MM_swapImage('image13','','<c:url value="/resources/img/icon_code_up.png"/>',1)">
            		<img src="<c:url value="/resources/img/icon_code.png"/>" name="image13" border="0" alt="코드">
            	</a>
            </li>

            <li id="del_btn" class="tab_tool">
            	<a href="" id="btnCommonTabDelete"
            		onclick="return false;" 
            		onMouseOut="MM_swapImgRestore()" 
            		onMouseOver="MM_swapImage('image141','','<c:url value="/resources/img/icon_delete_up.png"/>',1)">
            		<img src="<c:url value="/resources/img/icon_delete.png"/>" name="image141" border="0" alt="삭제">
            	</a>
            </li>

            <li id="print_btn" class="tab_tool" style="cursor: default;">
            	<a href="" id="btnCommonTabPrint" 
            		onclick="return false;" 
            		onMouseOut="MM_swapImgRestore()" 
            		onMouseOver="MM_swapImage('image15','','<c:url value="/resources/img/icon_print_up.png"/>',1)" style="cursor: default;">
            		<img src="<c:url value="/resources/img/icon_print.png"/>" name="image15" border="0" alt="인쇄">
            	</a>
            </li>

            <li class="tab_tool">
            	<a href="" id="btnCommonTabRetrive"
            		onclick="return false;" 
            		onMouseOut="MM_swapImgRestore()" 
            		onMouseOver="MM_swapImage('image16','','<c:url value="/resources/img/icon_search_up.png"/>',1)">
            		<img src="<c:url value="/resources/img/icon_search.png"/>" name="image16" border="0" alt="조회">
            	</a>
            </li>

            <li class="tab_tool">
            	<a href="" id="btnCommonTabPrev" class="notUsedBtn"
            		onclick="return false;" 
            		onMouseOut="MM_swapImgRestore()" 
            		onMouseOver="MM_swapImage('image18','','<c:url value="/resources/img/icon_prev_up.png"/>',1)">
            		<img src="<c:url value="/resources/img/icon_prev.png"/>" name="image18" border="0" alt="전기">
            	</a>
            </li>

            <li class="tab_tool">
            	<a href="" id="btnCommonTabNext" class="notUsedBtn"
            		onclick="return false;" 
            		onMouseOut="MM_swapImgRestore()" 
            		onMouseOver="MM_swapImage('image19','','<c:url value="/resources/img/icon_next_up.png"/>',1)">
            		<img src="<c:url value="/resources/img/icon_next.png"/>" name="image19" border="0" alt="차기">
            	</a>
            </li>
        </ul>
    </div>
</div>
<!-- common_toolbar -->