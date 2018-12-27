var gvCodeHelper;
var dpCodeHelper;
var hideRows;

//ContextPath 반환
function getContextPath() { 
   return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}

function initCodeHelper(tableName, attribute, headfix, where) {
	// input validate
	if(typeof(tableName) === "undefined") {
		alert("테이블 명을 입력해주세요.");
		return;
	}
	if(typeof(attribute) === "undefined") {
		attribute = 0;
	}
	if(typeof(headfix) === "undefined") {
		headfix = 0;
	}
	if(typeof(where) === "undefined") {
		where = "";
	}

	// Modal Div 추가
	appendCodeHelperModalDivToBody();
	
	// Grid 초기화
	initCodeHelperGrid();
	
	// Data 가져옴
	loadCodeHelperData(tableName, attribute, headfix, where);
	
	// Dialog Event 등록
	initCodeHelperEvents();
	
	gvCodeHelper.setFocus();
}

function appendCodeHelperModalDivToBody() {
	// 이전내역 삭제
	$("#codeHelperModal").remove();
	$("#accCustChrgPersModal").remove();

	$.ajax(getContextPath() + "/codeHelper/loadCodeHelperModal", {
		type : "post",
		dataType : "html",
		async : false
	})
	.done(function(data) { // success 시
		$("body").append(data);
	})
	.fail(function(data) {
		alert("loadLogs failed");
	});
}

//코드헬퍼 내 그리드 초기화
function initCodeHelperGrid() {
	// 초기설정
	RealGridJS.setTrace(false);
	RealGridJS.setRootContext("/jinWook3/resources/js");
    
    dpCodeHelper = new RealGridJS.LocalDataProvider();
    gvCodeHelper = new RealGridJS.GridView("gvCodeHelper");
    gvCodeHelper.setDataSource(dpCodeHelper);
    
    // Style 설정
    gvCodeHelper.setSelectOptions({
    	style : "singleRow"
    });
    
    gvCodeHelper.setStateBar({
    	visible: false  
    });
    
    gvCodeHelper.setCheckBar({
	  	visible: false  
	});
    
    gvCodeHelper.setEditOptions({
    	readOnly : true,
    	editable : false
    });
    
    gvCodeHelper.setPanel({
    	visible : false
    });
    
    gvCodeHelper.setIndicator({
    	headText : "NO"
    });
    
    gvCodeHelper.setHeader({
    	height : 25,
    	styles : {	// 선택된 Column Header 색상 -> 다른 헤더색상과 동일하게 설정 
    		"selectedBackground" : "linear,#ffffffff,#ffcccccc,90",
    		"selectedForeground" : "#ff000000"
    	}
    });
    
    gvCodeHelper.setFooter({
    	visible : false
    });
};

//codeHelper.xml으로 부터 현재 코드헬퍼에 해당하는 데이터 가져옴
function loadCodeHelperData(tableName, attribute, headfix, where) {
	$.ajax(getContextPath() + "/codeHelper/loadCodeHelperData", {
		type : "post",
		dataType : "json",
		data: {
			"tableName" : tableName,
			"attribute" : attribute,
			"headfix" : headfix,
			"where" : where
		},
		async : false
	})
	.done(function(data) { // success 시
		// GridView 설정
		let jsonData = JSON.stringify(data);
		
		let columnList = JSON.parse(jsonData).columnList;
		let attribute = JSON.parse(jsonData).attribute;	// mask 속성 (mask)
		let flagList = attribute.flag;	// column 속성 (mask -> flag)
		
		if(columnList !== undefined) {
			// fields 설정
			dpCodeHelper.setFields(columnList);
			
			// column 설정
			let columns = [];
			
			for(let i=0; i<columnList.length; i++) {
				let column = new RealGridJS.DataColumn();
				column.name = columnList[i];
				column.fieldName = columnList[i];
				
				// Column Attribute 설정
				for(let j=0; j<flagList.length; j++) {
					if(columnList[i] == flagList[j].name) {
						
						column.header = {text : flagList[j].title};
						column.width = flagList[j].width;
						columns.push(column);
						break;
					}
				}
			}
			
			gvCodeHelper.setColumns(columns);
			
			// data 설정
			let data = JSON.parse(jsonData).data;
			dpCodeHelper.fillJsonData(data, {fillMode : "set"});
			
			
			if(dpCodeHelper.getRowCount() > 0){
				// 첫 row 포커스 설정
				gvCodeHelper.setCurrent({itemIndex: 0, column: 0});
			}
			
			// filter 설정
			for(let i=0; i<columnList.length; i++) {
				let filters = [];
				let distinctValues = dpCodeHelper.getDistinctValues(columnList[i]);
				
				for(let j=0; j<distinctValues.length; j++) {
					let tmpFilter = 
						{
							name: (distinctValues[j] === undefined ? "" : distinctValues[j]),
					        criteria: (distinctValues[j] === undefined ? "value = null" : "value = '" + distinctValues[j] +"'")
						};
					
					filters.push(tmpFilter);
				}
				
				gvCodeHelper.setColumnFilters(columnList[i], filters);
			}
		}
	
		
		// 데이터 비례 너비, 높이 설정
		let columnCnt = columnList.length;
		let rowCnt = dpCodeHelper.getRowCount(); 
		
		// 컬럼너비 구함
		let colWidth = 0;
		for(let i=0; i<flagList.length; i++) {
			colWidth += parseInt(flagList[i].width);
		}
		
		// Dialog 설정
		let width = colWidth + 100;
		let height = 500; //(rowCnt * 25) + 80;
		
		$("#codeHelperModal").dialog({
			"title" : JSON.parse(jsonData).title,
			"autoOpen" : false,
			"modal" : true,
			"height" : height,	
			"width" : width,	
		});

		// 조회영역 내용 설정
		let optValue = 0;
		let optText = "전체";
		
		$("#optCodeHelperSearch").append(
				"<option value=" + optValue + ">"
				+ optText
				+ "</option>"
		);
		
		let columns = gvCodeHelper.getColumns();
		
		for(let i=0; i<columns.length; i++) {
			optValue = i + 1;
			optText = columns[i].header.text;
			
			$("#optCodeHelperSearch").append(
					"<option value=" + optValue + ">"
					+ optText
					+ "</option>"
			);
		}
		
		$("#codeHelperModal").dialog("open");
		
		// 조회영역 너비 설정
		$("#txtCodeHelperSearch").width(
			$("#codeHelperModal").width() - $("#optCodeHelperSearch").width() - 12
		);
		
		gvCodeHelper.resetSize();
		
		// 포커스 설정
		$("#txtCodeHelperSearch").focus();
	})
	.fail(function(data) {
		alert("loadLogs failed");
	});
}

//코드헬퍼 내 버튼 이벤트 (사용하는 view에서 구현해서 사용) 
function initCodeHelperEvents() {
	$("#btnCodeHelperOk").on("click", function(e){
		$("#codeHelperModal").dialog("close");
	});
	
	
	$("#btnCodeHelperCancel").on("click", function(){
		$("#codeHelperModal").dialog("close");
	});
	
	// 조회영역
	$("#txtCodeHelperSearch").keyup(function(e){
		let optValue = $("#optCodeHelperSearch").val();
        let txtVal = $("#txtCodeHelperSearch").val();
        
        // 검색결과 제외 행 hide 처리 
		let rows = dpCodeHelper.getRows(0, -1);
		
		dpCodeHelper.showHiddenRows(hideRows);	// 1.1.27 이상 지원
		
		hideRows = [];
		
		txtVal += "";
		
		// 전체
		if(optValue == 0) {
			for(let i=0; i<rows.length; i++) {
    			let row = rows[i] + "";
    			
    			if(row.indexOf(txtVal) == -1) {
    				hideRows.push(i);
    			}
    		} 
		} else {
			for(let i=0; i<rows.length; i++) {
    			let row = rows[i] + "";
    			let val = row.split(",");
    			
    			// 0-based
    			if(val[optValue - 1].indexOf(txtVal) == -1) {
    				hideRows.push(i);
    			}
    		}
		}
		
		dpCodeHelper.hideRows(hideRows);	// 1.1.27 이상 지원
        
		if(e.keyCode == 13)	// enter
	    {
			// 확인버튼 클릭 발생
			$("#btnCodeHelperOk").trigger("click");
	    }
        
		/*
        //# CASE : custom_filter 사용한 조회
        if(optValue != 0) {
        	
        	let columns = gvCodeHelper.getColumnNames(true);
        	
        	// custom filter 초기화
        	for (let i=0; i<columns.length; i++) {
        		gvCodeHelper.removeColumnFilters(columns[i], "custom_filter");
        	}
        	
        	// 검색조건 포함하는 custom filter 설정
        	let filters = {
        			name: "custom_filter",
        			criteria: "value like '%" + txtVal + "%'",
        			active: true
        	};
        	
        	gvCodeHelper.addColumnFilters(columns[optValue - 1], filters);
        	gvCodeHelper.activateColumnFilters(columns[optValue - 1], "custom_filter", true);
        } 
        */
	});

	gvCodeHelper.onKeyUp = function (grid, key, ctrl, shift, alt) {
		// enter
		if(key === 13) {
			$("#btnCodeHelperOk").trigger("click");
			return false;	// e.preventDefault() 와 동일
		}
	}
	
	gvCodeHelper.onDataCellDblClicked = function (grid, index) {
		$("#btnCodeHelperOk").trigger("click");
	}
}

//현재 행의 field 값 가져옴
//fieldName은 codeHelper.xml내 table field값을 적어준다. 
function getCodeHelperResult(fieldName) {
	let itemIndex = gvCodeHelper.getCurrent().dataRow;
	return dpCodeHelper.getValue(itemIndex, fieldName);
}



