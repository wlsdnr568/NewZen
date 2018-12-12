<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-lic.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs_eval.1.1.30.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/realgridjs-api.1.1.30.js" />"></script>       
<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/jszip.min.js"/>"></script>  

<script type="text/javascript">
	
	    var gridView; 
	    var dataProvider;
	    
	    function setupGridJs(id, width, height) {
	    	RealGridJS.setRootContext("/test/resources/js");
	        $("#"+id).css({ width : width, height : height });
	        gridView = new RealGridJS.GridView(id);
	        dataProvider = new RealGridJS.LocalDataProvider();
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
	        setupGridJs("gridView", "50%", "300");
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
	            saveData("/test/insertProducts");
	        }else if (currState == "updated") {   
	        	saveData("/test/updateProducts");      
	        }else if (currState == "deleted") {
	        	saveData("/test/deleteProducts");
	        }
	    }
	    
	    function btnSaveAllDataClickHandler(e) {
	    	gridView.commit();
	    	saveDataAll("/test/allSaveProducts");
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
	            url : "/test/getProducts",     
	            success : function(data){
	                provider.fillJsonData(data);
	            },          
	            error : function(xhr, status, error){
	                alert("error : " + error);
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
		            alert("code:" + request.status + "\n" + "error:" + error);
		        }
		    });
	    
		}
		
		$(function(){
			$("#excel").on("click",function(){
				
				var excelType = $(':radio[name="excelType"]:checked').val() == "2007";
				var showProgress = $("#chkShowProgress").is(":checked");
				var applyDynamicStyles = $("#chkApplyDynamicStyles").is(":checked");
			
				gridView.exportGrid({
				    type: "excel",
				    target: "local",
				    fileName: "gridExportSample.xlsx",
				    showProgress: showProgress,
				    applyDynamicStyles: applyDynamicStyles, 
				    progressMessage: "엑셀 Export중입니다.",
				    indicator: $(':radio[name="indicator"]:checked').val(),
				    header: $(':radio[name="header"]:checked').val(),
				    footer: $(':radio[name="footer"]:checked').val(),
				    compatibility: excelType,
				    done: function () {  //내보내기 완료 후 실행되는 함수
				        alert("done excel export")
				    }
				});
				
			}) 
		});
		
	</script>
<head>
	<script>
		function openNav() {
		    document.getElementById("mySidebar").style.width = "250px";
		    document.getElementById("main").style.marginLeft = "250px";
		}
		
		function closeNav() {
		    document.getElementById("mySidebar").style.width = "0";
		    document.getElementById("main").style.marginLeft= "0";
		}
	</script>
	<style type="text/css">
	.sidebar {
	   height: 100%;
	   width: 0;
	   position: fixed;
	   z-index: 88;
	   top: 0;
	   left: 0;
	   background-color: #111;
	   overflow-x: hidden;
	   transition: 0.5s;
	   padding-top: 60px;
	}
	
	.sidebar a {
	    padding: 8px 8px 8px 32px;
	    text-decoration: none;
	    font-size: 25px;
	    color: #818181;
	    display: block;
	    transition: 0.3s;
	}
	
	.sidebar a:hover {
	    color: #f1f1f1;
	}
	
	.sidebar .closebtn {
	    position: absolute;
	    top: 0;
	    right: 25px;
	    font-size: 36px;
	    margin-left: 50px;
	}
	
	.openbtn {
	    font-size: 15px;
	    cursor: pointer;  
	    background-color: #111;
	    color: white;
	    padding: 10px 15px;
	    border: none;
	}
	
	.openbtn:hover {
	    background-color: #444;
	}
	
	#main {
	    transition: margin-left .5s;
	    padding: 16px;
	}
	
	</style>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>	
	
	<div id="mySidebar" class="sidebar">
	  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
	  <a href="/test/test1">test1</a>
	  <a href="/test/test2">test2</a>
	  <a href="/test/test3">test3</a>
	  <a href="/test/test4">test4</a>
	  <a href="/test/test5">test5</a>
	  <a href="/test/test6">test6</a>
	</div>
	
	<div id="main">
	  <button class="openbtn" onclick="openNav()">☰ 페이지</button>  
	</div>
	
	<div class="title" style="width: 50%; margin: 0 auto">
		<span>RealGrid on Java Spring MVC and SQLServer</span>
	</div>

	<div id="gridView" style="margin: 0 auto"></div>

	<div style="width: 50%; margin: 0 auto">
		<input type="button" id="btnInsert" value="행 삽입"> 
		<input type="button" id="btnAppend" value="줄 추가"> 
		<input type="button" id="btnSaveData" value="데이터 저장">
		<input type="button" id="btnSaveAllData" value="모두 저장" />
		<input type="button" id="excel" value="엑셀출력">
	</div>
	

</body>
</html>


