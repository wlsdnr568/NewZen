<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/bootstrap.css"/>" />
<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>

<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs_eval.1.1.30.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-api.1.1.30.js" />"></script>

<script>
	var gridView;
	var dataProvider;
	var gridViewPopup;
	var dataProviderPopup;
	
	$(document).ready( function(){
	    $('#addRowDialog').on('shown.bs.modal', function() {
	        gridViewPopup.resetSize();
	    });
	
	    $("#dialog_btnAddRow").click(function () {
	        var newRows = [];
	        var checkedRows = gridViewPopup.getCheckedRows();
	        for (var r in checkedRows) {
	            newRows.push(dataProviderPopup.getJsonRow(checkedRows[r]));
	        }
	        dataProvider.addRows(newRows);
	        $("#addRowDialog").modal('hide');
	    });
	
	    RealGridJS.setTrace(false);
	    RealGridJS.setRootContext("/test/resources/js");
	    
	    dataProvider = new RealGridJS.LocalDataProvider();
	    setFields(dataProvider);
	    gridView = new RealGridJS.GridView("realgrid");
	    gridView.setDataSource(dataProvider);   
	    setColumns(gridView);
	    setOptions(gridView)
	///////////////////////////////////////////////////////////////////////////////////////////////
	    dataProviderPopup = new RealGridJS.LocalDataProvider();
	    setFields(dataProviderPopup);
	    gridViewPopup = new RealGridJS.GridView("realgridPopup");
	    gridViewPopup.setDataSource(dataProviderPopup);   
	    setColumns(gridViewPopup);
	    setOptions(gridViewPopup);
	    setRows(dataProviderPopup);   
	})
	
	function setFields(provider) {
	    provider.setFields([{
	        fieldName: "name"
	    }, {
	        fieldName: "company"
	    }, {
	        fieldName: "email"
	    }]);
	}
	
	function setColumns(grid) {
	    grid.setColumns([{
	        fieldName: "name",
	        name: "name",
	        width: 70,
	        styles: {
	            textAlignment: "center"
	        },
	        header: {text: "이름"}
	    }, {
	         fieldName: "company",
	        name: "company",
	        width: 150,
	        styles: {
	            textAlignment: "center"
	        },
	        header: {text: "회사"}
	    }, {
	       fieldName: "email",
	        name: "email",
	        width: 200,
	        header: {text: "e-mail"}
	    }]);
	}
	
	function setOptions(grid) {
	    grid.setEditOptions({
	        insertable: false,
	        appendable: false
	    });
	}
	
	function setRows(provider) {
	    var data = [{
	        name: "홍길동",
	        company: "(주)율도",
	        email: "gdhong@yuldo.com"
	    }, {
	        name: "동방삭",
	        company: "사단법인 삼천갑자",
	        email: "dongbangsac@3000.net"
	    }, {
	        name: "일지매",
	        company: "의적협회",
	        email: "apricot@heros.net"
	    }, {
	        name: "각시탈",
	        company: "가",
	        email: "bridal-mask@korea.com"
	    }, {
	        name: "각시탈",
	        company: "나",
	        email: "bridal-mask@korea.com"
	    }, {
	        name: "각시탈",
	        company: null,
	        email: "bridal-mask@korea.com"
	    }];
	    provider.setRows(data);
	}
</script>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>realGrid</title>
</head>
<body>


	<div id="realgrid" style="width: 50%; height: 200px; border: 1px solid black; margin: 0 auto; margin-top: 200px"></div>
	<button type="button" style="margin: 0 auto" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#addRowDialog">Add rows</button>
  
	<div class="modal fade" id="addRowDialog" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				
				<div class="modal-body">
					<div id="realgridPopup" style="width: 100%; height: 200px;"></div>
				</div>
				
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" id="dialog_btnAddRow">Add
						Checked Rows</button>
					<button type="button" class="btn btn-default" id="dialog_btnClose"
						data-dismiss="modal">Close</button>
				</div>
			
			</div>
		</div>
	</div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/practiceE">이전 페이지</a></div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/main">처음으로</a></div>

</body>
</html>



