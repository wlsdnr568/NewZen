<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="<c:url value="/resources/css/user_toolbar.css"/>">	
<!-- user_toolbar -->
<div id="tool_bar">
    <div class="tool_bar_interval">
        <ul id="nav" style="padding: 0; margin: 0;">
            <li id="clsf_btn" style="width:62px;">
            	<a href="#" onclick="return false;" >
            		<img src="<c:url value="/resources/img/font4.png"/>" width="59" height="21" alt="분류등록" />
           		</a>
           	</li>
            <li style="width:97px">
            	<a href="#" onclick="return false;" class="notUsedBtn">
            		<img src="<c:url value="/resources/img/font1.png"/>" width="96" height="21" alt="거래처명복원" />
           		</a>
          	</li>
            <li style="width:61px;">
            	<a href="#" onclick="return false;" class="notUsedBtn">
            		<img src="<c:url value="/resources/img/font5.png"/>" width="59" height="21" alt="환경설정" />
            	</a>
            </li>
            <li style="width:86px;">
            	<a href="#" onclick="return false;" class="notUsedBtn">
            		<img src="<c:url value="/resources/img/font6.png"/>" width="85" height="21" alt="삭제된데이타" />
           		</a>
           	</li>
            <li style="width:37px;">
            	<a href="#" onclick="return false;" class="notUsedBtn">
            		<img src="<c:url value="/resources/img/font7.png"/>" width="35" height="21" alt="검색" />
           		</a>
          	</li>
            <li style="width:73px;">
            	<a href="#" onclick="return false;" class="notUsedBtn">
            		<img src="<c:url value="/resources/img/font8.png"/>" width="72" height="21" alt="엑셀업로드" />
            	</a>
           	</li>
            <li style="width:61px;">
            	<a href="#" onclick="return false;" class="notUsedBtn">
            		<img src="<c:url value="/resources/img/font9.png"/>" width="60" height="21" alt="엑셀다운" />
            	</a>
            </li>
            <li style="width:73px;">
            	<a href="#" onclick="return false;" class="notUsedBtn">
            		<img src="<c:url value="/resources/img/font2.png"/>" width="72" height="21" alt="전표변경" />
            	</a>
            </li>
            <li style="width:145px; display: inline;">
            	<a href="#" onclick="return false;" class="notUsedBtn">
            		<img src="<c:url value="/resources/img/font3.png"/>" width="144" height="21" alt="인쇄거리처명일괄변경" />
            	</a>
            </li>
        </ul>
    </div>
</div>
<!-- user_toolbar -->