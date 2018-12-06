<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="<c:url value="/resources/css/tab2.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.base.css"/>" type="text/css" />
<%-- <link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.temp.css"/>" type="text/css" /> --%>
<%-- <link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.office.css"/>" type="text/css" /> --%>

<script src="<c:url value="/resources/jqwidgets/globalization/globalize.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxcore.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxbuttons.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxcheckbox.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxinput.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxlistbox.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxscrollbar.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxpanel.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxdropdownlist.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxradiobutton.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxpasswordinput.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxnumberinput.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxcalendar.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxdatetimeinput.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxform.js"/>"></script>

<script src="<c:url value="/resources/jqwidgets/jqxmaskedinput.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxcombobox.js"/>"></script>
<script src="<c:url value="/resources/jqwidgets/jqxformattedinput.js"/>"></script>

<script src="<c:url value="/resources/js/common/acc02030/initPageFinComp.js" />"></script>
<script src="<c:url value="/resources/js/common/acc02030/initSheetFinComp.js" />"></script>
<script src="<c:url value="/resources/js/common/acc02030/initSheetAutoTaxPaym.js" />"></script>

<script>
	$(document).ready(function(){
		initSheetFinComp();
		initPageFinComp();
		initSheetAutoTaxPaym();
		
		selectFinCompList();
		
	});
</script>

<!--  
<div id="boardTbl">
   <div id="tblList">
      <img src="<c:url value="/resources/img/tab_02.png"/>" alt="" width="417" height="703" border="0" />
   </div>
   <div id="boxForm">
      <img src="<c:url value="/resources/img/tab_02_img.png"/>" alt="" width="569" height="404" border="0" />
   </div>
   <div id="gradeForm">
      <img src="<c:url value="/resources/img/tab_03_img.png"/>" alt="" width="570" height="270" border="0" />
   </div>
</div>
-->



<div id="tab_02" >
	<div id="gvFinComp" style="width:417px; height: 703px;">
		<%-- <img src="<c:url value="/resources/img/tab_02.png"/>" alt="" width="417" height="703" border="0" /> --%>
	</div>
	<div id="jqFinComp" style="width:569px; height:510px;">
		<%-- <img src="<c:url value="/resources/img/tab_02_img.png"/>" alt="" width="569" height="404" border="0" /> --%>
	</div>
	
	<div id="gvAutoTaxPaym" style="width:569px; height:193px;">
		<%-- <img src="<c:url value="/resources/img/tab_03_img.png"/>" alt="" width="570" height="270" border="0" /> --%>
	</div>
	
</div>







