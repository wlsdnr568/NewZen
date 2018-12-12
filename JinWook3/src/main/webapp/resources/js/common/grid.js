var gridView;
var dataProvider;
var gridViewPopup;
var dataProviderPopup;

$(function() {
	
	RealGridJS.setTrace(false);
	RealGridJS.setRootContext("/test/resources/js");

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
		fieldName : "field4-1"
	}, {
		fieldName : "field5"
	}, {
		fieldName : "field5-1"
	}, {
		fieldName : "field6"
	}, {
		fieldName : "field7"
	}, {
		fieldName : "field8"
	}, {
		fieldName : "field9"
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
		width : 30
	}, {
		name : "col2",
		fieldName : "field2",
		header : {
			text : "번호"
		},
		width : 60,
		readOnly : "true",
		editable : false
		
	}, {
		name : "col3",
		fieldName : "field3",
		header : {
			text : "구분"
		},
		width : 60
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
				width : 55
			}, {
				name : "col4",
				fieldName : "field4-1",
				header : {
					text : "계정과목명"
				},
				readOnly : "true",
				editable : false,
				width : 145
			}
		]

	}, {
		"type" : "group",
		"name" : "거래처",
		"orientation" : "horizontal",
		"width" : 200,
		"columns" : [ {
			name : "col5",
			fieldName : "field5",
			header : {
				text : "코드"
			},
			width : 55
		}, {
			name : "col5",
			fieldName : "field5-1",
			header : {
				text : "거래처명"
			},
			width : 145,
			readOnly : "true",
			editable : false
		} ]
	}, {
		name : "col6",
		fieldName : "field6",
		header : {
			text : "적요"
		},
		width : 150,
		footer : {
			text : "합계"
		}
	}, {
		name : "col7",
		fieldName : "field7",
		header : {
			text : "차변"
		},
		width : 100
	}, {
		name : "col8",
		fieldName : "field8",
		header : {
			text : "대변"
		},
		width : 100
	}, {
		name : "col9",
		fieldName : "field9",
		header : {
			text : "휴일"
		},
		width : 50,
		readOnly : "true"
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
    	
    	if(key == "39" && gridView.getCurrent().fieldIndex == 1 && gridView.getValue(gridView.getCurrent().itemIndex,1) == undefined){
			return false;  
		} 
    	 
		if(key == "39" && gridView.getCurrent().fieldIndex == 3 && gridView.getValue(gridView.getCurrent().itemIndex,3) == undefined){
			return false;
		} 
		
		if(key == "39" && gridView.getCurrent().fieldIndex == 4 && gridView.getValue(gridView.getCurrent().itemIndex,4) == undefined ){
						
			return false;
		}
		
		if(key == "39" && gridView.getCurrent().fieldIndex == 5 && gridView.getValue(gridView.getCurrent().itemIndex,5) == undefined){
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
					
					RealGridJS.setTrace(false);
				    RealGridJS.setRootContext("/test/resources/js");
					
			        dataProviderPopup = new RealGridJS.LocalDataProvider();
				    setFields(dataProviderPopup);
				    gridViewPopup = new RealGridJS.GridView("realgridPopup");
				    gridViewPopup.setDataSource(dataProviderPopup);   
				    setColumns(gridViewPopup);
				    setOptions(gridViewPopup);
				    setRows(dataProviderPopup);
				    
				    $("#realgridPopup,#realgridPopup-background").fadeIn("fast");
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
					
					$("#realgridPopup,#realgridPopup-background").fadeIn("fast");
					
					gridViewPopup.resetSize();
					
					RealGridJS.setTrace(false);
				    RealGridJS.setRootContext("/test/resources/js");
					
			        dataProviderPopup = new RealGridJS.LocalDataProvider();
				    setFields(dataProviderPopup);
				    gridViewPopup = new RealGridJS.GridView("realgridPopup");
				    gridViewPopup.setDataSource(dataProviderPopup);   
				    setColumns(gridViewPopup);
				    setOptions(gridViewPopup);
				    setRows(dataProviderPopup);
				    
				    
				}
			}
		}else{
			$("#helpBox").text("");
		}
		
	};
	
	
});
///////////////////////////////////////// 메인 그리드 이벤트 정리


////////////////////////////////////도움창 그리드 이벤트 정리
function setFields(provider) {
    provider.setFields([{
        fieldName: "code"
    }, {
        fieldName: "id"
    }, {
        fieldName: "referrence"
    }]);
}

function setColumns(grid) {
    grid.setColumns([{
        fieldName: "code",
        name: "code",
        width: 70,
        styles: {
            textAlignment: "center"
        },
        header: {text: "코드"}
    }, {
         fieldName: "id",
        name: "id",
        width: 150,
        styles: {
            textAlignment: "center"
        },
        header: {text: "계정명"}
    }, {
       fieldName: "referrence",
        name: "referrence",
        width: 200,
        header: {text: "참고"}
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
        code: "홍길동",
        id: "(주)율도",
        referrence: "gdhong@yuldo.com"
    }];
    provider.setRows(data);
}
	
	
	