/*
 * 상단 리얼 그리드 초기화 js
*/
var gridView;
var dataProvider;
var gridViewPopup;
var dataProviderPopup;


$(function(){
	initMainGrid();
})

//상단 그리드 초기화 함수
function initMainGrid() {
	
	RealGridJS.setTrace(false);  
	RealGridJS.setRootContext("/jinWook3/resources/js");

	mainDataProvider = new RealGridJS.LocalDataProvider();
	mainGridView = new RealGridJS.GridView("realgrid_Main");
	mainGridView.setDataSource(mainDataProvider);
	
	//상단 그리드 필드 값
	var fields = [ {
		fieldName : "month",
		dataType : "number"
	}, {
		fieldName : "slipDt",
		dataType : "number"
	}, {
		fieldName : "slipNo",
		dataType : "number"
	}, {
		fieldName : "debCrd",
		dataType : "text"
	}, {
		fieldName : "accSbjCd",
		dataType: "number"
	}, {
		fieldName : "accSbjNm",
		dataType : "text"
	}, {
		fieldName : "custCd",
		dataType : "number"
	}, {
		fieldName : "custNm",
		dataType : "text"
	}, {
		fieldName : "noteNo",
		dataType : "number"
	}, {
		fieldName : "noteNm",
		dataType : "text"
	}, {
		fieldName : "chaAmt",
		dataType : "number"
	}, {
		fieldName : "deAmt",
		dataType : "number"
	}, {
		fieldName : "week",
		dataType : "text"
	} ];

	mainDataProvider.setFields(fields);
	
	//상단 그리드 컬럼 값
	var columns = [
		{
			name : "month",
			fieldName : "month",
			header : {
				text : "월"
			},
			width : 30,
			styles : {
				textAlignment : "center"
			},
			editor : { 
				type : "number"
			}
		},{
			name : "slipDt",
			fieldName : "slipDt",
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
			name : "slipNo",
			fieldName : "slipNo",
			header : {
				text : "번호"
			},
			width : 60,
			styles : {
				textAlignment : "center"
			},
			editor: {
				type : "number"
			}
			
		}, {
			name : "debCrd",
			fieldName : "debCrd",
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
					name : "accSbjCd",
					fieldName : "accSbjCd",
					header : { 
						text : "코드"
					},
					width : 55,
					textAlignment : "center",
					editor: {
						type : "number"
					}
				}, { 
					name : "accSbjNm",
					fieldName : "accSbjNm",
					header : {
						text : "계정과목명"
					},  
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
					name : "custCd",
					fieldName : "custCd",
					header : {
						text : "코드"
					},
					width : 55,
					textAlignment : "center",
					editor: {
						type : "number"
					}
				}, {
					name : "custNm",
					fieldName : "custNm",
					header : {
						text : "거래처명"
					},
					width : 145,
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
					name : "noteNo",
					fieldName : "noteNo",
					header : {
						text : "코드"
					},
					width: 55,
					editor: {
						type : "number"
					},
					footer : {
						text : "합계",
						styles : {
							"textAlignment" : "center"
						}
					}
				},{
					name : "noteNm",
					fieldName : "noteNm",
					header : {
						text : "적요명"
					},
					width : 145
				}
			],
			"hideChildHeaders" : "true",
			"textAlignment" : "center" 
		
		}, {
			name : "chaAmt",
			fieldName : "chaAmt",
			header : {
				text : "차변"
			},
			width : 100,
			styles : {
				numberFormat: "#,##0"
			},
			editor: {
				type : "number"
			},
			footer : {
				styles : {
					"numberFormat" : "#,##0"
				},
				expression : "sum"
					//차변 합 구하기 위한 옵션
			}
			
		}, {
			name : "deAmt", 
			fieldName : "deAmt", 
			header : {
				text : "대변"
			},
			width : 100,
			styles : {
				numberFormat : "#,##0" 
			},
			editor: {
				type : "number"
			},
			footer : {
				styles : {
					"numberFormat" : "#,##0"
				},
				expression : "sum"
					//대변 합 구하기 위한 옵션
			}
		
		}, {
			name : "week",
			fieldName : "week",
			header : {
				text : "휴일"
			},
			width : 50,
			textAlignment : "center"
		} 
	]
	mainGridView.setColumns(columns);
	
	//합계 표시되는 컬럼푸터 병합
	mainGridView.setFooter({
		mergeCells: ["noteNo","noteNm"]
	})
	
	//상단 그리드 옵션 설정
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
			deletable : true
		}
	};
	mainGridView.setOptions(options);
	
	mainGridView.setSortingOptions(
		{
			style : "inlusive"
		}
	);
	
	///빈 행 추가
	var data = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	mainDataProvider.setRows(data);
	
	//셀 선택시 행 단위 블록
	var selectOptions = {"style" : "singleRow"};
	mainGridView.setSelectOptions(selectOptions);
    
    //처음 로딩시 포커스 설정
	mainGridView.setFocus();
    
};
