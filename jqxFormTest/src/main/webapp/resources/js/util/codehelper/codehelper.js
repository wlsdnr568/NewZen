/**
 * CodeHelper 처리 관련 함수
 */

define(["util/codehelper/codehelper"], function (codehelper){

	var gvCodeHelper;
	var dpCodeHelper;
	var hideRows;
	
	// ContextPath 반환
	function getContextPath() { 
	   return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
	}
	
	// 코드헬퍼 초기화. dialog 
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
	
	// 코드헬퍼 내 그리드 초기화
	function initCodeHelperGrid() {
		// 초기설정
		RealGridJS.setTrace(false);
		RealGridJS.setRootContext("/kclepEn/resources/js/realgrid");
	    
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
	
	// codeHelper.xml으로 부터 현재 코드헬퍼에 해당하는 데이터 가져옴
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
				
				
				if(dpCodeHelper.getRowCount() > 0)
				{
					// 첫 row 포커스 설정
					gvCodeHelper.setCurrent({itemIndex: 0, column: 0});
				}
				
				// filter 설정
				for(let i=0; i<columnList.length; i++) {
					let filters = [];
					let distinctValues = dpCodeHelper.getDistinctValues(columnList[i]);
					
					for(let j=0; j<distinctValues.length; j++) {
						let tmpFilter = {
								name: ( distinctValues[j] === undefined ? "" : distinctValues[j]
						        ),
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
	
	// 코드헬퍼 내 버튼 이벤트 (사용하는 view에서 구현해서 사용) 
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
	
	// 현재 행의 field 값 가져옴
	// fieldName은 codeHelper.xml내 table field값을 적어준다. 
	function getCodeHelperResult(fieldName) {
		let itemIndex = gvCodeHelper.getCurrent().dataRow;
		return dpCodeHelper.getValue(itemIndex, fieldName);
	}
	
	// 주소도움 dialog
	// parameter에 field명을 넣어준다. 생략시 기본값으로 zipNo, addr, addrDetail 필드가 설정된다.
	function initAddrHelper(zipNo, addr, addrDetail) {
		// check parameters 
		if(typeof(zipNo) == "undefined") {
			zipNo = "zipNo";
		}
		if(typeof(addr) == "undefined") {
			addr = "addr";
		}
		if(typeof(addrDetail) == "undefined") {
			addrDetail = "addrDetail";
		}
		
		let url = getContextPath() + "/codeHelper/searchAddress?";
		url += "zipNo=" + zipNo + "&";
		url += "addr=" + addr + "&";
		url += "addrDetail=" + addrDetail;
			
		// set size & alignment 
		let width = 630;
		let height = 650;
		let left = (screen.width - width) / 2;
		let top = (screen.height - height) / 2;
		
		window.open(url, "searchAddress", 
				"scrollbars=yes," +
				"width=" + width + "," +
				"height=" + height + "," +
				"left=" + left + "," +
				"top=" + top
		);
	}
	
	
	//거래처담당자
	var gvAccCustChrgPers;
	var dpAccCustChrgPers;
	
	function initAccCustChrgPers(orderCompCd, compCd, custCd) {
		// Modal Div 추가
		appendCodeHelperModalDivToBody();
		
		// Grid 초기화
		initAccCustChrgPersGrid();
		
		// Data 가져옴
		loadAccCustChrgPersData(orderCompCd, compCd, custCd);
		
		// Dialog Event 등록
		initAccCustChrgPersEvents();
	}
	
	//코드헬퍼 내 그리드 초기화
	function initAccCustChrgPersGrid() {
		// 초기설정
		RealGridJS.setTrace(false);
	    RealGridJS.setRootContext(getContextPath() + "/resources/js");
	    
	    dpAccCustChrgPers = new RealGridJS.LocalDataProvider();
	    gvAccCustChrgPers = new RealGridJS.GridView("gvAccCustChrgPers");
	    gvAccCustChrgPers.setDataSource(dpAccCustChrgPers);
	    
	    // field 설정
	    let fields = [
	    	{
	    		fieldName : "orderCompCd"
	    	},
	    	{
	    		fieldName : "compCd",
	    		dataType: "number"
	    	},
	    	{
	    		fieldName : "custCd",
	    		dataType: "number"
	    	},
	    	{
	    		fieldName : "keyNo",
	    		dataType: "number" 
	    	},
	    	{
	    		fieldName : "chrgPersNm"
	    	},		    	
	    	{
	    		fieldName : "chrgPersTel1"
	    	},
	    	{
	    		fieldName : "chrgPersTel2"
	    	},
	    	{
	    		fieldName : "chrgPersTel3"
	    	},
	    	{
	    		fieldName : "chrgPersExtsNo"
	    	},
	    	{
	    		fieldName : "chrgPersHp1"
	    	},
	    	{
	    		fieldName : "chrgPersHp2"
	    	},
	    	{
	    		fieldName : "chrgPersHp3"
	    	},
	    	{
	    		fieldName : "chrgPersEmailAddr"
	    	},
	    	{
	    		fieldName : "rmk"
	    	},
	    	{
	    		fieldName : "useYn"
	    	},
	    	{
	    		fieldName : "insertDt"
	    	},
	    	{
	    		fieldName : "updateDt"
	    	}
	    ];
	    dpAccCustChrgPers.setFields(fields);
	    
	    //Columns 설정
		let columns = [
	        {
	            name: "useYn",
	            fieldName: "useYn",
	            header : {
	                text: "사용여부"
	            },
	            width : 80,
	            editor : {
	            	type : "dropDown"
	            }, 
	            styles: {
	            	textAlignment: "center"
	            },
	            labels : ["0:미사용", "1:사용"],
				values : [0, 1],
				lookupDisplay: true,
	        },
	        {
	            name: "chrgPersNm",
	            fieldName: "chrgPersNm",
	            header : {
	                text: "담당자명"
	            },
	            width : 120,
	            editor : {
	            	type : "text"
	            	
	            }, 
	            styles: {
	            	textAlignment: "center"
	            }
	        },
	        {
	        	type: "group",
	        	name: "tel",
	        	width: 120,
	        	header : {
	                text: "담당자전화번호"
	            },
	        	columns: [
	        		{
	                    name: "chrgPersTel1",
	                    fieldName: "chrgPersTel1",
	                    width: 40,
	                    editor : {
	                    	type : "text",
	                    	maxLength : 4
	                    }, 
	                    styles: {
	                    	textAlignment: "center"
	                    }
	                },
	                {
	                    name: "chrgPersTel2",
	                    fieldName: "chrgPersTel2",
	                    width: 40,
	                    editor : {
	                    	type : "text",
	                    	maxLength : 4
	                    }, 
	                    styles: {
	                    	textAlignment: "center"
	                    }
	                },
	                {
	                    name: "chrgPersTel3",
	                    fieldName: "chrgPersTel3",
	                    width: 40,
	                    editor : {
	                    	type : "text",
	                    	maxLength : 4
	                    }, 
	                    styles: {
	                    	textAlignment: "center"
	                    }
	                }
	        	]
	        },
	        ,
	        {
	            name: "chrgPersExtsNo",
	            fieldName: "chrgPersExtsNo",
	            header : {
	                text: "내선"
	            },
	            width: 40,
	            editor : {
	            	type : "text"
	            	
	            }, 
	            styles: {
	            	textAlignment: "center"
	            }
	        },
	        {
	        	type : "group",
	        	name : "hp",
	        	width : 120,
	        	header : {
	                text: "핸드폰번호"
	            },
	        	columns : [
	        		{
	                    name: "chrgPersHp1",
	                    fieldName: "chrgPersHp1",
	                    width: 40,
	                    editor : {
	                    	type : "text",
	                    	maxLength : 4
	                    }, 
	                    styles: {
	                    	textAlignment: "center"
	                    }
	                },
	                {
	                    name: "chrgPersHp2",
	                    fieldName: "chrgPersHp2",
	                    width: 40,
	                    editor : {
	                    	type : "text",
	                    	maxLength : 4
	                    }, 
	                    styles: {
	                    	textAlignment: "center"
	                    }
	                },
	                {
	                    name: "chrgPersHp3",
	                    fieldName: "chrgPersHp3",
	                    width: 40,
	                    editor : {
	                    	type : "text",
	                    	maxLength : 4
	                    }, 
	                    styles: {
	                    	textAlignment: "center"
	                    }
	                }
	        	]
	        },
	        {
	            name: "chrgPersEmailAddr",
	            fieldName: "chrgPersEmailAddr",
	            header : {
	                text: "담당자메일주소"
	            },
	            width: 150,
	            editor : {
	            	type : "text"
	            	
	            }, 
	            styles: {
	            	textAlignment: "center"
	            }
	        },
	        {
	            name: "rmk",
	            fieldName: "rmk",
	            header : {
	                text: "메신저아이디"
	            },
	            width: 95,
	            editor : {
	            	type : "text"
	            	
	            }, 
	            styles: {
	            	textAlignment: "center"
	            }
	        },
	    ];
		gvAccCustChrgPers.setColumns(columns);
		
		gvAccCustChrgPers.setColumnProperty("tel", "hideChildHeaders", true);	// 연락처 헤더 병합
		gvAccCustChrgPers.setColumnProperty("hp", "hideChildHeaders", true);	// 핸드폰 번호 헤더 병합
		gvAccCustChrgPers.setColumnProperty('useYn', 'lookupDisplay', true);
		
	    // Style 설정
	    gvAccCustChrgPers.setSelectOptions({
	    	style : "singleRow"
	    });
	    
	    gvAccCustChrgPers.setStateBar({
	    	visible: false  
	    });
	    
	    gvAccCustChrgPers.setCheckBar({
		  	visible: false  
		});
	
	    gvAccCustChrgPers.setPanel({
	    	visible : false
	    });
	    
	    gvAccCustChrgPers.setIndicator({
	    	headText : "NO"
	    });
	    
	    gvAccCustChrgPers.setHeader({
	    	height : 25,
	    	styles : {	// 선택된 Column Header 색상 -> 다른 헤더색상과 동일하게 설정 
	    		"selectedBackground" : "linear,#ffffffff,#ffcccccc,90",
	    		"selectedForeground" : "#ff000000"
	    	}
	    });
	    
	    gvAccCustChrgPers.setFooter({
	    	visible : false
	    });
	
	    gvAccCustChrgPers.setEditOptions({
	    	appendable : true,
	    	enterToTab : true,
	    	appendWhenExitLast : true,
	    	commitWhenExitLast : true,
	    	crossWhenExitLast : true
	    });
	};
	
	function loadAccCustChrgPersData(orderCompCd, compCd, custCd) {
		$.ajax(getContextPath() + "/codeHelper/loadAccCustChrgPersData", {
			type : "post",
			dataType : "json",
			data: {
				"orderCompCd" : orderCompCd,
				"compCd" : compCd,
				"custCd" : custCd
			},
			async : false
		})
		.done(function(data) { // success 시
			// data 설정
			dpAccCustChrgPers.fillJsonData(data, {fillMode : "set"});
			
			let rowCnt = dpAccCustChrgPers.getRowCount();
			//alert("rowCnt : " + rowCnt);
			
			dpAccCustChrgPers.setRowCount(rowCnt + 1, false, null, "none");
			/*
			if(dpAccCustChrgPers.getRowCount() === 0) {
				//dpAccCustChrgPers.setRowCount(1, false, null, "none");	// default 1 rows
				dpAccCustChrgPers.insertRow(0);
			}
			*/
			
			let chrgPersDialog = $("#accCustChrgPersModal").dialog({
				autoOpen : false,
				modal : true,
				height : 478,
				width : 800,
				title : "담당자 등록/조회"
			});
			
			//다이얼로그 오픈 및 그리드 사이즈 재조정
			chrgPersDialog.dialog("open");
			
			gvAccCustChrgPers.refresh();
			gvAccCustChrgPers.resetSize();
		})
		.fail(function(data) {
			alert("loadLogs failed");
		});
	}
	
	// Dialog Event 등록
	function initAccCustChrgPersEvents() {
		$("#btnAccCustChrgPersDelete").on("click", function(e){
			e.preventDefault();
			
			let current = gvAccCustChrgPers.getCurrent();
			let chrgPersNm = gvAccCustChrgPers.getValue(current.dataRow, "chrgPersNm");
			let msg = "[" + chrgPersNm + "]을(를) 삭제하시겠습니까?";
			
			if(confirm(msg)) {
				// delete
				$.ajax(getContextPath() + "/codeHelper/deleteAccCustChrgPers", {
					type : "post",
					dataType : "json",
					data: {
						jsonRowData : JSON.stringify(dpAccCustChrgPers.getJsonRows(current.dataRow, current.dataRow))
					},
					async : false
				})
				.done(function(data) { // success 시
					dpAccCustChrgPers.removeRows([current.dataRow], false);
				})
				.fail(function(data) {
					alert("loadLogs failed");
				});
			}
		});
		
		$("#btnAccCustChrgPersOk").on("click", function(e){
			// 확인버튼 클릭시 '사용'인 담당자 중 첫번째 담당자를 가져옴 
			e.preventDefault();
			
			let current = gvAccCustChrgPers.getCurrent();
			let chrgPersNm = "";
			let chrgPersEmailAddr = "";
			let keyNo = "";
			
			let rows = dpAccCustChrgPers.getRowCount();
			
			for(let i=0; i<rows; i++) {
				if(gvAccCustChrgPers.getValue(i, "useYn") === "1") {
					keyNo = gvAccCustChrgPers.getValue(i, "keyNo") + "";	// number -> string
					chrgPersNm = gvAccCustChrgPers.getValue(i, "chrgPersNm");
					chrgPersEmailAddr = gvAccCustChrgPers.getValue(i, "chrgPersEmailAddr");
					break;
				}
			}
			
			$("#chrgPers").val(keyNo);
			$("#chrgPersNm").val(chrgPersNm);
			$("#chrgPersEmailAddr").val(chrgPersEmailAddr);
			
			$("#accCustChrgPersModal").dialog("close");
		});
		
		gvAccCustChrgPers.onCellEdited = function(grid, index, dataRow, field) {
			let current = grid.getCurrent();
			let fieldName = current.fieldName;
			let value = grid.getValue(index, field);
			
			let rowCnt = dpAccCustChrgPers.getRowCount(); 
			
			// insert 처리
			if(fieldName === "useYn" &&
					// (처음 insert 시 || 재조회 후 마지막 row || 새로 추가된 row) 
					(rowCnt === 1 || current.dataRow === rowCnt- 1 || current.dataRow === -1)) {
				
				// 일반거래처 그리드로부터 거래처코드 가져옴
				let custCurrent = cust_list.getCurrent();
				let custRow = custCurrent.dataRow;
				
				let orderCompCd = "A00003";
				let compCd = 1000;
				let custCd = cust_list.getValue(custRow, "custCd");
				
				$.ajax(getContextPath() + "/codeHelper/insertAccCustChrgPers", {
					type : "post",
					dataType : "json",
					data: {
						"orderCompCd" : orderCompCd,
						"compCd" : compCd,
						"custCd" : custCd
					},
					async : false
				})
				.done(function(data) { // success 시
					// 현재 row data 설정
					grid.setValue(index, "orderCompCd", orderCompCd);
					grid.setValue(index, "compCd", compCd);
					grid.setValue(index, "custCd", custCd);
					grid.setValue(index, "keyNo", data);
	
					grid.commit();
				})
				.fail(function(data) {
					alert("loadLogs failed");
				});
			} else {
				// update
				grid.commit();
	
				$.ajax(getContextPath() + "/codeHelper/updateAccCustChrgPers", {
					type : "post",
					dataType : "json",
					data: {
						jsonRowData : JSON.stringify(dpAccCustChrgPers.getJsonRows(dataRow, dataRow))
					},
					async : false
				})
				.done(function(data) { // success 시
				})
				.fail(function(data) {
					alert("loadLogs failed");
				});
			} 
		};
		
		gvAccCustChrgPers.onKeyUp = function (grid, key, ctrl, shift, alt) {
			// esc
			if(key === 27) {
				$("#btnAccCustChrgPersOk").trigger("click");
				return false;	// e.preventDefault() 와 동일
			}
		}
	}
	
	return {
		getContextPath: getContextPath,
		initCodeHelper: initCodeHelper,
		appendCodeHelperModalDivToBody: appendCodeHelperModalDivToBody,
		initCodeHelperGrid: initCodeHelperGrid,
		loadCodeHelperData: loadCodeHelperData,
		initCodeHelperEvents: initCodeHelperEvents,
		getCodeHelperResult: getCodeHelperResult,
		initAddrHelper: initAddrHelper,
		initAccCustChrgPers: initAccCustChrgPers,
		initAccCustChrgPersGrid: initAccCustChrgPersGrid,
		loadAccCustChrgPersData: loadAccCustChrgPersData,
		initAccCustChrgPersEvents: initAccCustChrgPersEvents
	}

});