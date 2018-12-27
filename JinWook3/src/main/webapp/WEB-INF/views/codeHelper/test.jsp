<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

	<link rel="stylesheet" href="<c:url value="/resources/css/jquery-ui.css"/>">
	<link rel="stylesheet" href="<c:url value="/resources/css/tab_01.css"/>">
	<link rel="stylesheet" href="<c:url value="/resources/css/acc02030.css"/>">
	
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-ui.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/realgridjs_eval.1.1.30.min.js"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-api.1.1.30.js" />"></script>
	
	<script src="<c:url value="/resources/js/codehelper/initEvent_test.js" />"></script>
	<script src="<c:url value="/resources/js/codehelper/codehelper_test.js" />"></script>
	<script src="<c:url value="/resources/js/codehelper/common_test.js" />"></script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
<title>코드헬퍼 테스트</title>
</head>
<body>

	<table width="300" border="0" cellspacing="0" cellpadding="0">
		<tbody>
			<tr>
				<td>
					<input type="text" id="compChrgEmpCd" name="compChrgEmpCd" tabindex="16" class="box_tel" />
				</td>
				
				<td style="padding-left: 10px;">
					<input type="text" id="compChrgEmpNm" name="compChrgEmpNm" readonly="readonly" class="box_key" cssStyle="background-color:#f1f8fe;" />
				</td>
				<td style="padding-left: 10px;"> 
					<input type="text" id="compChrgEmpEmail" name="compChrgEmpEmail" readonly="readonly"/>
				</td>
				<td align="center" style="padding-left: 3px;">
					<a href="" id="compChrgEmpHelper"> 
						<img id="btn_compChrgEmp" src="<c:url value="/resources/img/btn_msg.png"/>" width="16" height="15" border="0"/>
					</a>
				</td>
			</tr>
		</tbody>
	</table>
	
</body>
</html>



