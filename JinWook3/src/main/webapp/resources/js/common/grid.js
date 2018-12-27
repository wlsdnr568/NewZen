var gridView;
var dataProvider;
var gridViewPopup;
var dataProviderPopup;

$(function() {
	
	RealGridJS.setTrace(false);  
	RealGridJS.setRootContext("/jinWook3/resources/js");

	dataProvider = new RealGridJS.LocalDataProvider();
	gridView = new RealGridJS.GridView("realgrid");
	gridView.setDataSource(dataProvider);
	
	//메인 그리드 필드 값
	var fields = [ {
		fieldName : "field0"  
	}, {
		fieldName : "field1"
	}, {
		fieldName : "field2"
	}, {
		fieldName : "field3"
	}, {
		fieldName : "field4"
	}, {
		fieldName : "field5"
	}, {
		fieldName : "field6"
	}, {
		fieldName : "field7"
	}, {
		fieldName : "field8"
	}, {
		fieldName : "field9"
	}, {
		fieldName : "field10",
		dataType : "number"
	}, {
		fieldName : "field11",
		dataType : "number"
	}, {
		fieldName : "field12"
	} ];

	dataProvider.setFields(fields);
	
	//메인 그리드 컬럼 값
	var columns = [
	{
		name : "coll",
		fieldName : "field1",
		header : {
			text : "일"
		},
		width : 30,
		styles : {
			textAlignment : "center"
		},
		editor: {
			type : "number"
		}
	}, {
		name : "col2",
		fieldName : "field2",
		header : {
			text : "번호"
		},
		width : 60,
		readOnly : "true",
		editable : false,
		styles : {
			textAlignment : "center"
		},
		editor: {
			type : "number"
		}
		
	}, {
		name : "col3",
		fieldName : "field3",
		header : {
			text : "구분"
		},
		width : 60,
		styles : {
			textAlignment : "center"
		}
	}, {
		"type" : "group",
		"name" : "계정과목",
		"orientation" : "horizontal",
		"width" : 200,
		"columns" : [
			{
				name : "col4",
				fieldName : "field4",
				header : { 
					text : "코드"
				},
				width : 55,
				textAlignment : "center",
				editor: {
					type : "number"
				}
			}, { 
				name : "col4",
				fieldName : "field5",
				header : {
					text : "계정과목명"
				},  
				readOnly : "true",
				editable : false,
				width : 145,
				textAlignment : "center"
			}
		],
		"hideChildHeaders" : "true",
		"textAlignment" : "center"

	}, {
		"type" : "group",
		"name" : "거래처",
		"orientation" : "horizontal",
		"width" : 200,
		"columns" : [ 
			{
				name : "col5",
				fieldName : "field6",
				header : {
					text : "코드"
				},
				width : 55,
				textAlignment : "center",
				editor: {
					type : "number"
				}
			}, {
				name : "col5",
				fieldName : "field7",
				header : {
					text : "거래처명"
				},
				width : 145,
				readOnly : "true",
				editable : false,
				textAlignment : "center"
			} 
		],
		"hideChildHeaders" : "true",
		"textAlignment" : "center"
	
	}, {
		"type" : "group",
		"name" : "적요",
		"orientation" : "horizontal",
		"width" : 200,
		"columns" : [
			{
				name : "col6",
				fieldName : "field8",
				header : {
					text : "코드"
				},
				width: 55,
				editor: {
					type : "number"
				}
			},{
				name : "col6",
				fieldName : "field9",
				header : {
					text : "적요명"
				},
				width : 145,
				readOnly : "true",
				editable : false
			}
		],
		"hideChildHeaders" : "true",
		"textAlignment" : "center" 
	
	}, {
		name : "col7",
		fieldName : "field10",
		header : {
			text : "차변"
		},
		width : 100,
		styles : {
			numberFormat: "#,##0"
		},
		editor: {
			type : "number"
		}
	}, {
		name : "col8", 
		fieldName : "field11",
		header : {
			text : "대변"
		},
		width : 100,
		styles : {
			numberFormat : "#,##0" 
		},
		editor: {
			type : "number"
		}
	
	}, {
		name : "col9",
		fieldName : "field12",
		header : {
			text : "휴일"
		},
		width : 50,
		readOnly : "true",
		textAlignment : "center"
	} ]
	gridView.setColumns(columns);

	var options = {
		hideDeletedRows : true,
		panel : {
			visible : false
		},
		footer : {
			visible : true
		},
		checkBar : {
			visible : true
		},
		stateBar : {
			visible : false
		},
		indicator : {
			visible : false
		},
		edit : {
			enterToTab : true,
			insertable : true,
			appendable : true,
			updatable : true,
			deletable : true,
			deleteRowsConfirm : true,
			deleteRowsMessage : "삭제하시겠습니까 ?",
			skipReadOnly : true
		},
		displayOptions : {
			columnWidth : 200
		},
	};
	gridView.setOptions(options);
	
	///빈 행 한 줄 추가
	var data = [[]];
	dataProvider.setRows(data);
	
	//셀 선택시 행 색 변환
	var selectOptions = {"style" : "singleRow"};
    gridView.setSelectOptions(selectOptions);
    
    //첫 포커스 설정
    gridView.setFocus();
	
    gridView.onKeyDown = function (grid, key, ctrl, shift, alt) {
    	
    	if(key == "40" || key == "13" || key == "39" && gridView.getCurrent().fieldIndex == 1 && gridView.getValue(gridView.getCurrent().itemIndex,1) == undefined){
    		return false;  
		}
    	
		if(key == "40" || key == "13" || key == "39" && gridView.getCurrent().fieldIndex == 3 && gridView.getValue(gridView.getCurrent().itemIndex,3) == undefined){
			return false;
		} 
		
	}; 
    
    //데이터셀 하나 클릭시 이벤트
	gridView.onDataCellClicked =  function (grid, index) {
		
		//구분 필드 도움말 설정 이벤트 조건식
		if(index.fieldIndex == "3"){ 
			
			$("#helpBox").text("구분을 입력하세요 1.출금, 2.입금, 3.차변, 4.대변, 5.결산차변, 6.결산대변");
			
			gridView.onGetEditValue = function (grid, index, editResult){
				
				gridView.commit(false);
				
				if(index.columns == "col1"){
					
					var current = gridView.getCrruent();
					var CuItI = current.itemIndex;
					var CuCo = current.column;
					var CuDataRow = current.dataRow;
					
					var index = {  
						itemIndex : CuItI,
						column : "col3",
						dataRow : CuDataRow,
						fieldName : "field3"
					};
					
					gridView.setCurrent(index);
				}
				 
				if (index.column == "col3"){
					
					var editvalue = editResult.value;
					var fieldIndex = gridView.getCurrent().fieldIndex;
					var dataRow = gridView.getCurrent().dataRow;
					
					if(editvalue == "1"){
						dataProvider.setValue(dataRow, fieldIndex, "출금")
					}else if(editvalue == "2"){
						dataProvider.setValue(dataRow, fieldIndex, "입금")
					}else if(editvalue == "3"){   
						dataProvider.setValue(dataRow, fieldIndex, "차변")
					}else if(editvalue == "4"){
						dataProvider.setValue(dataRow, fieldIndex, "대변")
					}else if(editvalue == "5"){
						dataProvider.setValue(dataRow, fieldIndex, "결산차변")
					}else if(editvalue == "6"){
						dataProvider.setValue(dataRow, fieldIndex, "결산대변")
					}
					
				}
				
			};
		}else if(index.fieldIndex == "4"){
			$("#helpBox").text("계정코드를 입력하세요. 기능키F2-도움창, 명입력후 엔터-도움창");
			gridView.onKeyDown = function (grid, key, ctrl, shift, alt) {
				if(key == 113){
					modal();
				}
			}
		}else if(index.fieldIndex == "6"){
			$("#helpBox").text("거래처코드를 입력하세요. 기능키F2-도움창, '+' 또는 '00000'치고  명입력시 자동검색 또는 신규입력");
			gridView.onKeyDown = function (grid, key, ctrl, shift, alt) {
				if(key == 113){
					modal2();
				}
			}
		}else if(index.fieldIndex == "8"){
			$("#subBox").css("display","block");
			gridView.onDataCellClicked = function (grid, index) {
				if(index.fieldIndex != "8"){
					$("#subBox").css("display","none");
				}
			}
		}else{  
			$("#helpBox").text("");
		}
		
	};
	
	//데이터 이동 키보드로 할 때 이벤트
	gridView.onCurrentChanged =  function (grid, newIndex) {
		
		//구분 필드에서 도움말 생성 위한 조건식
		if(newIndex.fieldIndex == "3"){ 
			
			$("#helpBox").text("구분을 입력하세요 1.출금, 2.입금, 3.차변, 4.대변, 5.결산차변, 6.결산대변");
			
			gridView.onGetEditValue = function (grid, index, editResult){
				
				gridView.commit(false);
				
				if(index.columns == "col1"){
					
					var current = gridView.getCrruent();
					var CuItI = current.itemIndex;
					var CuCo = current.column;
					var CuDataRow = current.dataRow;
					
					var index = {
						itemIndex : CuItI,
						column : "col3",
						dataRow : CuDataRow,
						fieldName : "field3"
					};
					
					gridView.setCurrent(index);
				}
				
				if (index.column == "col3"){
					
					var editvalue = editResult.value;
					var fieldIndex = gridView.getCurrent().fieldIndex;
					var dataRow = gridView.getCurrent().dataRow;
					
					if(editvalue == "1"){
						dataProvider.setValue(dataRow, fieldIndex, "출금")
					}else if(editvalue == "2"){
						dataProvider.setValue(dataRow, fieldIndex, "입금")
					}else if(editvalue == "3"){   
						dataProvider.setValue(dataRow, fieldIndex, "차변")
					}else if(editvalue == "4"){
						dataProvider.setValue(dataRow, fieldIndex, "대변")
					}else if(editvalue == "5"){
						dataProvider.setValue(dataRow, fieldIndex, "결산차변")
					}else if(editvalue == "6"){ 
						dataProvider.setValue(dataRow, fieldIndex, "결산대변")
					}
					  
				};

			};
		}else if(newIndex.fieldIndex == "4"){
			$("#helpBox").text("계정코드를 입력하세요. 기능키F2-도움창, 명입력후 엔터-도움창");
			gridView.onKeyDown = function (grid, key, ctrl, shift, alt) {
				if(key == 113){
					modal();
				};
			};
			
		}else if(newIndex.fieldIndex == "6"){
			$("#helpBox").text("거래처코드를 입력하세요. 기능키F2-도움창, '+' 또는 '00000'치고  명입력시 자동검색 또는 신규입력");
			gridView.onKeyDown = function (grid, key, ctrl, shift, alt) {
				if(key == 113){
					modal2();
				};
			};
			
		}else if(newIndex.fieldIndex == "8"){
			$("#helpBox").text("적요코드를 입력하세요. 기능키F2-도움창, 등록적요 수정은 기능키-F8입니다.");
			$("#subBox").css("display","block");
			
			gridView.onKeyDown = function (grid, key, ctrl, shift, alt) {
				
				if(key == 37 || key == 39){
					$("#subBox").css("display","none"); 
				}
				
				if(key == 13 || key == 9){
					
					gridView.onGetEditValue = function (grid, index, editResult){
						
						gridView.commit(true);
						
						if (index.column == "col6"){
							
							var editvalue = editResult.value;
							var fieldIndex = gridView.getCurrent().fieldIndex;
							var dataRow = gridView.getCurrent().dataRow;
							$("#subBox").css("display","none");
							
							if(editvalue == "1"){
								dataProvider.setValue(dataRow, fieldIndex, "1")
								dataProvider.setValue(dataRow, fieldIndex+1, "당좌예금 현금입금")
							}else if(editvalue == "2"){
								dataProvider.setValue(dataRow, fieldIndex, "2")
								dataProvider.setValue(dataRow, fieldIndex+1, "당좌예금 현금인출")
							}
							  
						};
					}
				}
			};
			
		}else{
			$("#helpBox").text("");
		}
		
	};
	
});
///////////////////////////////////////// 메인 그리드 이벤트 정리

////////////////////////////////////도움창 그리드 이벤트 정리
function setFields(provider) {
    provider.setFields([{
        fieldName: "code1"
    }, {
        fieldName: "id"
    }, {
        fieldName: "referrence"
    }]);
}

function setColumns(grid) {
    grid.setColumns([{
        fieldName: "code1",
        name: "code1",  
        width: 48,
        styles: {
            textAlignment: "center"
        },
        header: {text: "코드"}
    }, {
        fieldName: "id",  
        name: "id",
        width: 120,  
        styles: {
            textAlignment: "center"
        },
        header: {text: "계정과목명"}
    }, {
        fieldName: "referrence",
        name: "referrence",
        width: 180,
        header: {text: "참고"}
    }]);
}

function setOptions(grid) {
    grid.setEditOptions({
        insertable: false,
        appendable: false,
        editable: false,
        deletable: false,
		updatable : false
    });
    grid.setPanel({
    	visible: false
    })
    grid.setFooter({
    	visible: false
    })
    grid.setCheckBar({
    	visible: false
    })
    grid.setStateBar({
    	visible: false
    })
    grid.setIndicator({
    	visible: false
    })
    var selectOptions = {"style" : "singleRow"};
    grid.setSelectOptions(selectOptions);
}

function setRows(provider) {
    var data = [
	    {
	        code1: "0101",
	        id: "현금",
	        referrence: ""
	    },{
	        code1: "0102",
	        id: "당좌예금",
	        referrence: ""
	    },{
	        code1: "0103",
	        id: "보통예금",
	        referrence: ""
	    },{
	        code1: "0104",
	        id: "제예금",
	        referrence: ""
	    },{
	        code1: "0105",
	        id: "정기예금",
	        referrence: ""
	    },{
	        code1: "0106",
	        id: "정기적금",
	        referrence: ""
	    },{
	        code1: "0107",
	        id: "단기매매증권",
	        referrence: ""
	    },{
	        code1: "0108",
	        id: "외상매출금",
	        referrence: ""
	    },{
	        code1: "0109",
	        id: "외상매출금",
	        referrence: ""
	    },{
	        code1: "0110",
	        id: "외상매출금",
	        referrence: ""
	    },{
	        code1: "0111",
	        id: "외상매출금",
	        referrence: ""
	    },{
	        code1: "0112",
	        id: "외상매출금",
	        referrence: ""
	    },{
	        code1: "0113",
	        id: "외상매출금",
	        referrence: ""
	    },{
	        code1: "0114",
	        id: "외상매출금",
	        referrence: ""
	    },{
	        code1: "0115",
	        id: "외상매출금",
	        referrence: ""
	    },{
	        code1: "0116",
	        id: "외상매출금",
	        referrence: ""
	    }
    ];
    provider.setRows(data);
}

//코드창 f2클릭시 이벤트
function modal(){
	
	$(".modal-dialog").css("width","400px");
	$("#modalTitle").text("계정코드도움");
	
	$("#addBtn").trigger("click");
	
	$('#addRowDialog').on('shown.bs.modal', function() { 
        gridViewPopup.resetSize();
        gridView.onKeyDown = function (grid, key, ctrl, shift, alt) {
    		return false; 
    	}
    });
	  
    RealGridJS.setTrace(false);
    RealGridJS.setRootContext("/jinWook3/resources/js");
    
    dataProviderPopup = new RealGridJS.LocalDataProvider();
    setFields(dataProviderPopup);
    gridViewPopup = new RealGridJS.GridView("realgridPopup");
    gridViewPopup.setDataSource(dataProviderPopup);   
    setColumns(gridViewPopup);
    setOptions(gridViewPopup);
    setRows(dataProviderPopup);
    
    gridViewPopup.onDataCellDblClicked = function(grid, index){
    	
    	var current = gridViewPopup.getValues(gridViewPopup.getCurrent().itemIndex);
    	var code = current.code1;
    	var id = current.id;
    	
    	var dataRow = gridView.getCurrent().dataRow;
    	var fieldIndex = gridView.getCurrent().fieldIndex;
    	
    	dataProvider.setValue(dataRow, fieldIndex, code)
    	dataProvider.setValue(dataRow, fieldIndex+1, id)
    	
    	$("#addRowDialog").modal('hide');  
    	$("#realgridPopup").empty();

    	var index = {
    		itemIndex : gridView.getCurrent().itemIndex,
    		column : "col5",
    		dataRow : gridView.getCurrent().dataRow,
    		fieldName : "field5"
    	}
		gridView.setCurrent(index);
    }
    
    
    $("#dialog_btnClose").click(function(){
    	$("#realgridPopup").empty(); 
    })
    
    $(".close").click(function(){ 
    	$("#realgridPopup").empty();
    })
    
    $(document).keydown(function(e){
    	if(e.keyCode == 27){
    		 $("#addRowDialog").modal('hide');  
    		 $("#realgridPopup").empty();
    	}
    })
    
}

function setFields2(provider) {
    provider.setFields([{
        fieldName: "code2"
    }, {
        fieldName: "custId"
    }, {
        fieldName: "regNo"
    }, {
        fieldName: "repName"
    }]);
}

function setColumns2(grid) {
    grid.setColumns([{
        fieldName: "code2",
        name: "code2",
        width: 50,
        styles: {
            textAlignment: "center"
        },
        header: {text: "코드"}
    }, {
        fieldName: "custId",  
        name: "custId",
        width: 180,  
        styles: {
            textAlignment: "center"
        },
        header: {text: "거래처명"}
    }, {
        fieldName: "regNo",
        name: "regNo",
        width: 120,
        header: {text: "등록번호"}
    }, {
        fieldName: "repName",
        name: "repName",
        width: 120,
        header: {text: "대표자명"}
    }]);
}

function setOptions2(grid) {
    grid.setEditOptions({
        insertable: false,
        appendable: false,
        editable: false,
        deletable: false,
		updatable : false
    });
    grid.setPanel({
    	visible: false
    })
    grid.setFooter({
    	visible: false
    })
    grid.setCheckBar({
    	visible: false
    })
    grid.setStateBar({
    	visible: false
    })
    grid.setIndicator({
    	visible: false
    })
    var selectOptions = {"style" : "singleRow"};
    grid.setSelectOptions(selectOptions);
}

function setRows2(provider) {
    var data = [
	    {
	    	code2: "01000",
	    	custId: "거래처1",
	    	regNo: "346-105-50154",
	    	repName: "없음"
	    }
    ];
    provider.setRows(data);
}

function modal2(){
	
	$(".modal-dialog").css("width","510px");
	
	$("#modalTitle").text("거래처도움");
	
	$("#addBtn").trigger("click");
	
	$('#addRowDialog').on('shown.bs.modal', function() {
        gridViewPopup.resetSize();
        gridView.onKeyDown = function (grid, key, ctrl, shift, alt) {
    		return false
    	}
    });
	  
    RealGridJS.setTrace(false);
    RealGridJS.setRootContext("/jinWook3/resources/js");
    
    dataProviderPopup = new RealGridJS.LocalDataProvider();
    setFields2(dataProviderPopup);
    gridViewPopup = new RealGridJS.GridView("realgridPopup");
    gridViewPopup.setDataSource(dataProviderPopup);   
    setColumns2(gridViewPopup);
    setOptions2(gridViewPopup);
    setRows2(dataProviderPopup);
    
    gridViewPopup.onDataCellDblClicked = function(grid, index){
    	
    	var current = gridViewPopup.getValues(gridViewPopup.getCurrent().itemIndex);
    	var code = current.code2;
    	var custId = current.custId;
    	
    	var dataRow = gridView.getCurrent().dataRow;
    	var fieldIndex = gridView.getCurrent().fieldIndex;
    	
    	dataProvider.setValue(dataRow, fieldIndex, code)
    	dataProvider.setValue(dataRow, fieldIndex+1, custId)
    	
    	$("#addRowDialog").modal('hide');  
    	$("#realgridPopup").empty();

    	var index = {
    		itemIndex : gridView.getCurrent().itemIndex,
    		column : "col6",
    		dataRow : gridView.getCurrent().dataRow,
    		fieldName : "field6"
    	}
		gridView.setCurrent(index);
    }
    
    
    $("#dialog_btnClose").click(function(){
    	$("#realgridPopup").empty(); 
    })
    
    $(".close").click(function(){ 
    	$("#realgridPopup").empty();
    })
    
    $(document).keydown(function(e){
    	if(e.keyCode == 27){
    		 $("#addRowDialog").modal('hide');  
    		 $("#realgridPopup").empty();
    	}
    })
    
}