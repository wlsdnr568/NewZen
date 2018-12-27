/*
 * 하단 리얼 그리드 초기화 js
*/
var gridView;
var dataProvider;
var gridViewPopup;
var dataProviderPopup;


$(function(){
	initSubGrid();
})

//하단 그리드 초기화 함수
function initSubGrid() {
	
	RealGridJS.setTrace(false);  
	RealGridJS.setRootContext("/jinWook3/resources/js");

	subDataProvider = new RealGridJS.LocalDataProvider();
	subGridView = new RealGridJS.GridView("realgrid_Sub");
	subGridView.setDataSource(subDataProvider);
	
	//서브 그리드 필드 값
	var fields = [
		{
			fieldName : "accSbjCd",
			dataType : "number"
		},
		{
			fieldName : "accSbjNm",
			dataType : "number"
		},{
			fieldName : "noteNo",
			dataType : "text"
		},{
			fieldName : "noteNm",
			dataType : "text"
		},{
			fieldName : "chaAmt",
			dataType : "number"
		},{
			fieldName : "deAmt",
			dataType : "number"
		}
	];
	subDataProvider.setFields(fields);
	
	//서브 그리드 컬럼 값
	var columns = [
		{
			"type" : "group",
			"name" : "계정과목",
			"orientation" : "horizontal",
			"width" : 250,
			"columns" : [
				{
					name : "accSbjCd",
					fieldName : "accSbjCd",
					header : { 
						text : "코드"
					},
					width : 70,
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
					width : 180,
					textAlignment : "center"
				}
			],
			"hideChildHeaders" : "true",
			"textAlignment" : "center"

		},{
			"type" : "group",
			"name" : "적요",
			"orientation" : "horizontal",
			"width" : 250,
			"columns" : [
				{
					name : "noteNo",
					fieldName : "noteNo",
					header : { 
						text : "코드"
					},
					width : 70,
					textAlignment : "center",
					footer : {
						text : "합계",
						styles : {
							"textAlignment" : "center"
						}
					},
					editor: {
						type : "number"
					}
					
				}, { 
					name : "noteNm",
					fieldName : "noteNm",
					header : {
						text : "적요명"
					},  
					width : 180,
					textAlignment : "center"
				}
			],
			"hideChildHeaders" : "true",
			"textAlignment" : "center"

		},{ 
			name : "chaAmt",
			fieldName : "chaAmt",
			header : {
				text : "차변(출금)"
			},  
			width : 145,
			textAlignment : "center",
			footer : {
				styles : {
					"numberFormat" : "#,##0"
				},
				expression : "sum"
					//차변 합 구하기 위한 옵션
			},
			editor: {
				type : "number"
			}
		},{ 
			name : "deAmt",
			fieldName : "deAmt",
			header : {
				text : "대변(입금)" 
			},  
			width : 145,
			textAlignment : "center",
			footer : {
				styles : {
					"numberFormat" : "#,##0"
				},
				expression : "sum"
					//대변 합 구하기 위한 옵션
			},
			editor: {
				type : "number"
			}
		}
	];
	subGridView.setColumns(columns);
	
	//서브 그리드 컬럼푸터 병합
	subGridView.setFooter({
		mergeCells: ["noteNo","noteNm"]
	})
	
	//서브 그리드 옵션 설정
	var options = {
		hideDeletedRows : true,
		panel : {
			visible : false
		},
		footer : {
			visible : true
		},
		checkBar : {
			visible : false
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
	subGridView.setOptions(options);
	
	subGridView.setSortingOptions(
			{
				style : "inlusive"
			}
		);
	
	///빈 행 추가
	var data = [[],[],[],[],[],[]]; 
	subDataProvider.setRows(data);
	
	//셀 선택시 행 단위 블록
	var selectOptions = {"style" : "singleRow"};
    subGridView.setSelectOptions(selectOptions);
    
    
};



