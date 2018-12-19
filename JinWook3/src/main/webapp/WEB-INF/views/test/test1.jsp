<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs_eval.1.1.30.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-api.1.1.30.js" />"></script>       
<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.12.4.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/jquery-ui.js"/>"></script>  

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.base.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.office.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.material.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.arctic.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.light.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.web.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.energyblue.css"/>">
<link rel="stylesheet" href="<c:url value="/resources/jqwidgets/styles/jqx.ui-overcast.css"/>"> 

<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcore.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxbuttons.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxcheckbox.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxinput.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxlistbox.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxscrollbar.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxdropdownlist.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxradiobutton.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxpasswordinput.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxnumberinput.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxpanel.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/jqwidgets/jqxform.js" />"></script>     

<script type="text/javascript">
	
	    var gridView; 
	    var dataProvider;
	    
	    function setupGridJs(id, width, height) {
	    	RealGridJS.setRootContext("/jinWook3/resources/js");     
	        $("#"+id).css({ width : width, height : height });      
	        dataProvider = new RealGridJS.LocalDataProvider();
	        gridView = new RealGridJS.GridView(id);
	        gridView.setDataSource(dataProvider);
	        
	        setFields(dataProvider);
	        setColumns(gridView);
	        setOption(gridView);
	        
	        loadData(dataProvider);
	    };
	    
	    function setOption(grid) {
	    	
	    	grid.setOptions({
	    		edit : {
	    			insertable : true,
	    			appendable : true,
	    			deletable : true,
	    			deleteRowsConfirm : true,
	    			deleteRowsMessage : "삭제하시겠습니까?"
	    		}
	    	});
	    	
			dataProvider.setOptions({
			    softDeleting : true
			});
	    	
	    }
	    
	    function setFields(provider) {
	        var fields = [ {
	            fieldName : "code"
	        }, {
	            fieldName : "productName"
	        }, {
	            fieldName : "volume"
	        }, {
	            fieldName : "unit"
	        }, {
	            fieldName : "price",
	            dataType : "number"
	        } ];

	        if (provider == dataProvider)
	            provider.setFields(fields);
	    }
	    
	    function setColumns(grid) {
	        var columns = [ {
	            fieldName : "code",
	            width : 80,
	            filters: [{
	            	name: "123",
	            	criteria: "value = '123'"
	            }, {
	            	name: "234",
	            	criteria: "value = 234"
	            }],
	            header : {
	                text : "코드"
	            },
	            styles : {
	                textAlignment : "near"
	            }
	        }, {
	            fieldName : "productName",
	            width : 80,
	            header : {
	                text : "제품명"
	            },
	            styles : {
	                textAlignment : "near"
	            }
	        }, {
	            fieldName : "volume",
	            width : 80,
	            header : {        
	                text : "용량"
	            },
	            styles : {
	                textAlignment : "near"
	            }
	        }, {
	            fieldName : "unit",
	            width : 80,
	            header : {
	                text : "단위"
	            },
	            styles : {
	                textAlignment : "near"
	            }
	        }, {
	            fieldName : "price",
	            width : 80,
	            header : {
	                text : "단가"
	            },
	            styles : {
	                textAlignment : "far"
	            }
	        } ];

	        if (grid == gridView)
	            grid.setColumns(columns);
	    }
	    
	    $(function() {
	        $("#btnInsert").click(btnInsertClickHandler);
	        $("#btnAppend").click(btnAppendClickHandler);
	        $("#btnSaveData").click(btnSaveDataClickHandler);
	        $("#btnSaveAllData").click(btnSaveAllDataClickHandler);
	        setupGridJs("gridView", "30%", "300");
	    });

	    function btnInsertClickHandler(e) {
	        var curr = gridView.getCurrent();
	        gridView.beginInsertRow(Math.max(0, curr.itemIndex));
	        gridView.showEditor();
	        gridView.setFocus();
	    }

	    function btnAppendClickHandler(e) {
	        gridView.beginAppendRow();
	        gridView.showEditor();
	        gridView.setFocus();
	    }

	    function btnSaveDataClickHandler(e) {
	        gridView.commit();

	        var currRow = gridView.getCurrent().dataRow;
	        if (currRow < 0)
	            return;

	        var currState = dataProvider.getRowState(currRow);
	        if (currState == "created") {
	            saveData("/testPage/insertProducts");
	        }else if (currState == "updated") {   
	        	saveData("/testPage/updateProducts");      
	        }else if (currState == "deleted") {
	        	saveData("/testPage/deleteProducts");
	        }
	    }
	    
	    function btnSaveAllDataClickHandler(e) {
	    	gridView.commit();
	    	saveDataAll("/testPage/allSaveProducts");
	    }
	    
	    //////////////////////////////////////////////////////////////////////////////////////
	    function saveData(urlStr) {
	        var jRowData = dataProvider.getJsonRow(gridView.getCurrent().dataRow);

	        $.post(urlStr, jRowData, function(data) {
	            if (data > 0) {
	                alert("저장 성공");
	                dataProvider.clearRowStates(true);
	            } else {
	                alert("저장 실패!");
	            }
	        });
	    }
	    ////////////////////////////////////////////////////////////////////////////////////////
		function loadData(provider) { 
	    	
	        $.ajax({
	            type : "post",    
	            dataType : "json",
	            url : "/testPage/getProducts",     
	            success : function(data){
	                provider.fillJsonData(data);
	            },          
	            error : function(xhr, status, error){
// 	                alert("error : " + error);
	            }    
	        });
	    }
		////////////////////////////////////////////////////////////////////////////////////////
		function saveDataAll(urlStr) {
			
		    var state;
		    var jData;
		    var jRowsData = [];
		
		    var rows = dataProvider.getAllStateRows();
		
		    if (rows.updated.length > 0) {
		        $.each(rows.updated, function(k, v) {
		            jData = dataProvider.getJsonRow(v);
		            jData.state = "updated";
		            jRowsData.push(jData);
		        });
		    }
		
		    if (rows.deleted.length > 0) {
		        $.each(rows.deleted, function(k, v) {
		            jData = dataProvider.getJsonRow(v);
		            jData.state = "deleted";
		            jRowsData.push(jData);
		        });
		    }
		
		    if (rows.created.length > 0) {
		        $.each(rows.created, function(k, v) {
		            jData = dataProvider.getJsonRow(v);
		            jData.state = "created";
		            jRowsData.push(jData);
		        });
		    }
		
		    if (jRowsData.length == 0) {
		        dataProvider.clearRowStates(true);
		        return;
		    }
		    
		    $.ajax({
		        headers : {
		            "Accept" : "application/json",
		            "Content-Type" : "application/json"
		        },
		        url : urlStr,
		        type : "post",
		        data : JSON.stringify(jRowsData),
		        dataType : "json",
		        success : function(data) {
		            if (data > 0) {
		                alert("저장 성공!");
		                dataProvider.clearRowStates(true);
		            } else {
		                alert("저장 실패!");
		            }
		        },
		        error : function(request, status, error) {
// 		            alert("code:" + request.status + "\n" + "error:" + error);
		        }
		    });
	    
		}
		
	</script>
	
	<script type="text/javascript">
        $(document).ready(function () {
       
            var template = [
                {
                    bind: 'code',
                    type: 'text',
                    label: '코드',
                    required: true,
                    labelWidth: '80px',
                    width: '250px',
                    info: '코드 입력',
                    infoPosiction: 'right'
                },
                {
                    bind: 'productName',
                    type: 'text',
                    label: '제품명',
                    required: true,
                    labelWidth: '80px',
                    width: '250px',
                    info: '제품명 입력'
                },  
                {
                    bind: 'volume',
                    type: 'text',
                    label: '용량',
                    required: false,
                    labelWidth: '80px',
                    width: '250px'
                },
                {
                    bind: 'unit',
                    type: 'text',
                    label: '단위',
                    required: false,
                    labelWidth: '80px',
                    width: '250px'
                },
                {
                    bind: 'price',
                    type: 'text',
                    label: '단가',
                    required: false,
                    labelWidth: '80px',
                    width: '250px'
                },
                {
                    type: 'blank',
                    rowHeight: '10px'
                },
                {
                	name: 'submitButton',
                    type: 'button',
                    text: '저장',
                    align: 'right',
                    padding: {left: 0, top: 5, bottom: 5, right: 40}
                }
            ];
            
            var sampleForm = $('#sampleForm');
            
            sampleForm.jqxForm({
            	theme: 'material',
            	backgroundColor: 'white',
                template: template,          
                padding: { left: 10, top: 40, right: 0, bottom: 10 }
            });
              
            var btn = sampleForm.jqxForm('getComponentByName', 'submitButton');
             
            btn.on('click',function(){  
            	sampleForm.jqxForm('submit', "add", "_self", 'POST');
            });
            
//             opener.close();
        });
    </script>

<head>
<style type="text/css">
	#sampleForm{
		border: 1px solid lightgray;  
	}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	<div id="main">
	  <button class="openbtn" onclick="openNav()">☰ 페이지</button>  
	</div>
	
	<div class="title" style="width: 50%;">
		<span>RealGrid on Java Spring MVC and SQLServer</span>
	</div>
	
	<div style="width: 50%;">
		<input type="button" id="btnInsert" value="행 삽입"> 
		<input type="button" id="btnAppend" value="줄 추가"> 
		<input type="button" id="btnSaveData" value="데이터 저장">
		<input type="button" id="btnSaveAllData" value="모두 저장" />
	</div>

	<div id="gridView" style="float: left"></div>   
 
	 <div id='sampleForm' style="width: 400px; height: auto; float: left;"></div>   
	
</body>
</html>


