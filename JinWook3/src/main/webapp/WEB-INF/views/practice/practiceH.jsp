<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.text.DateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/bootstrap.css"/>" />
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet" href="<c:url value="/resources/css/board_css.css"/>">

<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs_eval.1.1.30.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-api.1.1.30.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/js/common/common.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/common/grid.js"/>"></script>

<style type="text/css">
div {
	z-index: 0
}

th, td {
	border: 1px solid black;
	height: 30px;
}

th {
	width: 80px;
	margin-left: 20px;
}

td {
	width: 400px;
}

table {
	border-collapse: separate;
	border-spacing: 10px;
	margin: auto;
}

input{
	border: 1px solid black;
}
</style>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style type="text/css">
</style>
<title>전표 입력</title>
</head>
<body>

	<div id="mask"></div>
	<!-- 	 헤더 -->
	<%@ include file="/WEB-INF/views/include1/header.jsp"%>

	<!-- 	 내용 -->
	<div id="cont">

		<!-- 	 	내용 -> 메뉴 -->
		<%@ include file="/WEB-INF/views/include1/aside.jsp"%>

		<!-- 	 	내용 -> 메인 화면 -->
		<div id="cont_right">

			<div id="wrapBox" style="border: 1px solid gray; width: 85%; margin: 0 auto; margin-top: 20px; height: 800px">

				<div id="box" style="width: 98%; margin: 0 auto; margin-top: 20px;">
					<input type="text" id="datepicker" size="14" style="text-align: center;border: 1px solid black"> 
					<input type="button" value="변경" id="change" style="border: 1px solid black"> 
					<label for="exchage">현금잔액:</label>
					<input type="text" readonly="readonly" id="exchange" style="border: 1px solid black"> 
					<label for="asd">대차차액:</label> 
					<input type="text" readonly="readonly" id="asd" style="border: 1px solid black">
				</div>

				<div id="realgrid" style="width: 98%; height: 500px; border: 1px solid gray; margin: 0 auto; margin-top: 20px"></div>
				<button id="addBtn" style="display: none" type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-backdrop="static" data-target="#addRowDialog">Addrows</button>
				<div id="subBox" style="width: 95%; height: 250px; margin: 0 auto; margin-top: 20px; margin-bottom: 5px; display: none">
					<div style="width: 100%; height: 25px; border: 1px solid black; margin: 4px auto;">적요</div>
					<table>
						<tr>
							<th>1</th>
							<td>당좌예금 현금입금</td>
							<th></th>
							<td></td>
						</tr>
						<tr>
							<th>2</th>
							<td>당좌예금 현금인출</td>
							<th></th>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td></td>
							<th></th>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td></td>
							<th></th>
							<td></td>
						</tr>
					</table>
				</div>

				<!-- 				모달창                                          -->
				<div class="modal fade" id="addRowDialog" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">

							<div class="modal-header"
								style="padding: 3px 5px 3px 15px; background-color: #2f7bc9; color: white">
								<b id="modalTitle"></b>
								<button type="button" class="close" data-dismiss="modal"
									aria-hidden="true" style="color: white">×</button>
							</div>

							<div class="modal-body">

								<div style="margin-bottom: 10px">
									<select>
										<option>전체</option>
										<option>코드</option>
										<option>계정명</option>
										<option>참고</option>
									</select> <input type="text" size="31">
								</div>

								<div id="realgridPopup" style="width: 100%; height: 300px; z-index: 1"></div>

							</div>

							<div class="modal-footer">
								<button type="button" class="btn btn-default" id="dialog_btnSubmit">확인</button>
								<button type="button" class="btn btn-default" id="dialog_btnClose" data-dismiss="modal">취소</button>
							</div>

						</div>
					</div>
				</div>
				<!-- 				모달창                                          -->

			</div>
			<div id="helpBox" style="width: 60%; height: 25px; margin-left: 125px;"></div>

		</div>

	</div>

</body>
</html>

