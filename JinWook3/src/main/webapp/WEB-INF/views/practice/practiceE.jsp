<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
    
$(document).ready( function(){
    $("#dialog_btnAddRow").click(function () {
        var newRow = {
            name: $("#dialog_txtName").val(),
            company: $("#dialog_txtCompany").val(),
            email: $("#dialog_txtEmail").val()
        };
        dataProvider.addRow(newRow);
        $("#addRowDialog").modal('hide');
    });

    RealGridJS.setTrace(false);
    RealGridJS.setRootContext("/test/resources/js");
    
    dataProvider = new RealGridJS.LocalDataProvider();

    dataProvider.setFields([{
            fieldName: "name"
        }, {
            fieldName: "company"
        }, {
            fieldName: "email"
        }]);

    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);   

    gridView.setColumns([{
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

    gridView.setOptions({
        edit: { 
            insertable: false,
            appendable: false
        }
    });
});
</script>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>realGrid</title>
</head>
<body>

	<div id="realgrid" style="width: 50%; height: 200px; border: 1px solid black; margin: 0 auto; margin-top: 200px"></div>
	
	<button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#addRowDialog">Add a row</button>
	
	<div class="modal fade" id="addRowDialog" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				
				<div class="modal-body">
					<p>
						<label for="dialog_txtName" style="width: 80px">Name</label> 
						<input type="text" id="dialog_txtName" /><br /> 
						<label for="dialog_txtCompany" style="width: 80px">Company</label> 
						<input type="text" id="dialog_txtCompany" /><br /> 
						<label for="dialog_txtEmail" style="width: 80px">E-Mail</label> 
						<input type="text" id="dialog_txtEmail" />
					</p>
				</div>

				<div class="modal-footer">
					<button type="button" class="btn btn-primary" id="dialog_btnAddRow">Apply</button>
					<button type="button" class="btn btn-default" id="dialog_btnClose" data-dismiss="modal">Close</button>
				</div>

			</div>
		</div>
	</div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/practiceD">이전 페이지</a></div>
	<div style="width:10%; margin: 0 auto"><a href="/test/practice/practiceF">다음 페이지</a></div>
	
</body>
</html>



