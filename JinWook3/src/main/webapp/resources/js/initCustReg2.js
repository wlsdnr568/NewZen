/**
 * 190104_mjw
 * 일반전표입력(acc01010) 하단 거래처 등록 스크립트
 * TODO jqxForm내 키 이벤트 처리
 */

let custRegForm;
var isSearched; //사업자등록상태조회 변수   

define(["initCustReg2", "jQuery", "jqxbuttons",
	"jqxcheckbox", "jqxinput", "jqxlistbox", 
	"jqxscrollbar", "jqxdropdownlist", "jqxradiobutton", 
	"jqxpasswordinput", "jqxnumberinput", "jqxform_origin", 
	"jqwidgets/globalization/globalize", "util/codehelper/codehelper", "util/common"]

,function(initCustReg2, jQuery, jqxButtons,
		jqxCheckBox, jqxInput, jqxListBox, 
		jqxScrollBar, jqxDropDownList, jqxRadioButton, 
		jqxPasswordInput, jqxNumberInput, jqxForm, 
		globalize, codehelper, common){   
	
	$(function(){    
		isSearched = false; //사업자등록상태조회 변수 false로 선언
		initCustRegForm();
		initPageCustRegCompEvents();
		getCustTData();
	})
	
	/**
	 * 거래처등록 폼 초기화
	 * TODO 주소 검색 이미지 불러오기
	 */	
	function initCustRegForm(){
		
		let template = [{
			"columns" : [{ 
				"type" : "label",
				"label" : "거래처코드 :",
				"labelPosition" : "right",
				"labelWidth" : "3%",
				"width" : "150px"
			},{
				"bind" : "custCd",
				"name" : "custCd", 
				"type" : "text",   
				"align" : "left",
				"width" : "70px",
				"height" : "25px"
			},{
				"type" : "label",
				"label" : "사업자등록번호 :",
				"labelPosition" : "right",
				"labelWidth" : "3%",
				"width" : "250px"
			},{
				"bind" : "busnPersRegsNo",
				"name" : "busnPersRegsNo",
				"type" : "text",
				"align" : "left",
				"width" : "150px",
				"height" : "25px"
			},{
				"bind" : "btnBusiness",
				"name" : "btnBusiness", 
				"type" : "button",
				"width" : "140px",
				"height" : "25px",
				"text" : "사업자등록상태조회"
			}]
		}, {
			"columns" : [{
				"type" : "label",
				"label" : "거래처명 :", 
				"labelPosition" : "right",
				"labelWidth" : "3%",
				"width" : "150px"
			},{
				"bind" : "custNm",
				"name" : "custNm", 
				"type" : "text", 
				"align" : "left",
				"width" : "150px",
				"height" : "25px"
			},{
				"type" : "label",
				"label" : "주민등록번호 :",
				"labelPosition" : "right", 
				"labelWidth" : "3%",
				"width" : "170px"
			},{
				"bind" : "cegsNo",
				"name" : "cegsNo",
				"type" : "text",
				"align" : "left",
				"width" : "150px",
				"height" : "25px"
			},{
				"type" : "label",
				"label" : "주민등록기재분 :",
				"labelPosition" : "right",
				"labelWidth" : "3%", 
				"width" : "151px"
			},{
				"bind" : "regsNoSec",
				"name" : "regsNoSec",
				"type" : "option",
				"width" : "40px", 
				"height" : "25px",
				"component" : "jqxDropDownList",
				"options" : [
					{ 'value' : ' '},
					{ 'value' : '부'},
					{ 'value' : '여'}
				]
			},{
				"type" : "label",
				"label" : "0:부  1:여",
				"width" : "150px"
			}]
		}, {
			"columns" : [{
				"type" : "label",
				"label" : "대표자명 :",
				"labelPosition" : "right",
				"labelWidth" : '3%', 
				"width" : "485px"  
			},{
				"bind" : "repstvNm",
				"name" : "repstvNm",
				"type" : "text",
				"align" : "left",
				"width" : "150px",
				"height" : "25px"
			},{
				"type" : "label",
				"label" : "업태 :", 
				"labelPosition" : "right",
				"labelWidth" : "3%", 
				"width" : "70px"   
			},{
				"bind" : "bsnCdt",
				"name" : "bsnCdt",
				"type" : "text",
				"align" : "left",
				"width" : "250px", 
				"height" : "25px"
			},{
				"type" : "label",
				"label" : "종목 :",
				"labelPosition" : "right",
				"labelWidth" : "3%",
				"width" : "60px"
			},{
				"bind": "itm",
				"name" : "itm",
				"type" : "text",
				"align" : "left",
				"width" : "250px",
				"height" : "25px"
			}]
		}, {
			"columns" : [{
				"type" : "label",
				"label" : "우편번호, 주소 :",
				"labelPosition" : "right",
				"labelWidth" : "3%",
				"width" : "485px" 
			},{
				"bind" : "zipNo",
				"name" : "zipNo",
				"type" : "text",
				"align" : "left",
				"width": "110px",
				"height" : "25px"
			},{ 
				"bind" : "btnZipNo",
				"name" : "btnZipNo",
				"type" : "button",
				"width" : "30px", 
				"height" : "25px",
				"text" : "=" 
			},{
				"bind" : "addr",
	            "name" : "addr",
	            "type" : "text",
	            "width" : "650px",
	            "height" : "25px"
			}]
		}, {
			"columns": [ {
				"type" : "label",
				"label" : "",
				"labelPosition" : "rihgt",
				"labelWidth" : "3%",
				"width" : "650px"
			},{
		        "bind" : "addrDtl",
		        "name" : "addrDtl",
		        "type" : "text",
		        "width" : "650px",  
		        "height" : "25px",
		        "align" : "left"
			}]
		}, {
		    "columns" : [ {
		        "type" : "label",
		        "label" : "전화번호 :",
		        "labelPosition" : "right",
		        "labelWidth" : "3%",
		        "width" : "485px"
		    }, {
		        "bind" : "tel1",
		        "name" : "tel1",
		        "type" : "text",
		        "width" : "40px",
		        "height" : "25px"
		    }, {
		        "label" : ")",
		        "labelPosition" : "left",
		        "labelWidth" : "5px",
		        "labelPadding" : {
		            left : 0,
		            top : 0,
		            right : 0,
		            bottom : 0
		        },
		        "bind" : "tel2",
		        "name" : "tel2",
		        "type" : "text",
		        "width" : "40px",
		        "height" : "25px"
		    }, {
		        "label" : "-",
		        "labelPosition" : "left",
		        "labelWidth" : "5px",
		        "labelPadding" : {
		            left : 0,
		            top : 0,
		            right : 0,
		            bottom : 0
		        },
		        "bind" : "tel3",
		        "name" : "tel3",
		        "type" : "text",
		        "width" : "40px",
		        "height" : "25px"
		   }]
		
		}];
		
		custRegForm = $("#custRegForm");
		
		custRegForm.jqxForm({  
			"template" : template,
			"padding" : { left: 10, top: 40, right: 0, bottom: 10 }
		});
		
	}
	
	function initPageCustRegCompEvents(){
		
		custRegForm = $("#custRegForm"); //거래처 등록 폼
		
		$("#custRegForm").on("buttonClick", function(e) {
			let btnNm = e.args.name;
			
			//사업자등록상태조회 버튼 클릭 이벤트
			if(btnNm == "btnBusiness"){
				
				let busnPersRegsNoComp = custRegForm.jqxForm("getComponentByName", "busnPersRegsNo"); //사업자등록번호 component 불러오기
				let busnPersRegsNo = busnPersRegsNoComp.jqxInput("val"); // 사업자등록번호 값 가져오기
				
				//사업자등록상태조회 클릭시 발생 이벤트
				getBusnPersStatus(busnPersRegsNo); 
				
			}else if(btnNm == "btnZipNo"){
					//주소검색 버튼 클릭시 발생 이벤트
					searchAddr();
			}
			
		});
	}
	
	/***
	 * 사업자등록상태조회
	 */
	function getBusnPersStatus(busnPersNo) {
		
		//조회버튼 계속적인 클릭을 막음
		if (isSearched == true) {
			alert("잠시 후 조회해주세요.");
			setTimeout(function() {
				isSearched = false;
			}, 5000)
		} else {
			$.ajax("../hometax/getBusnPersStatus", { 
				type : "post",
				dataType : "xml",
				data : {
					busnPersNo: busnPersNo
				}
			})
			.done(function(data) {	// success 시
									
				var msg = "";
				$(data).find("trtCntn").each(function (){
					msg = $(this).text();
				});				
				
				isSearched = true;
				alert("사업자등록상태결과는\r\n"+msg);
				
			})
			.fail(function(data) {
				alert("loadLogs failed");
			}); 
		}
		
	}
	
	function searchAddr(){ 
		 
		custRegForm = $("#custRegForm"); //거래처 등록 폼
		let zipNo = custRegForm.jqxForm("getComponentByName","zipNo");
		let addr = custRegForm.jqxForm("getComponentByName","addr");
		let addrDtl = custRegForm.jqxForm("getComponentByName","addrDtl");
		
		codehelper.initAddrHelper(zipNo.attr("id"), addr.attr("id"), addrDtl.attr("id"));
		
		addrDtl.focus();
		
	}
	
	//임시로 테이블에서 거래처코드 101인 행 가져오는 이벤트
	function getCustTData(){
		$.ajax({
			url : "../codeHelper/getCustTData?CustCd=101",
			type : "get",
			dataType : "json",
			success : function(data){ 
				$.each(data, function(key, value){
					
					custRegForm = $("#custRegForm"); //거래처 등록 폼
					var custCdComp = custRegForm.jqxForm("getComponentByName", "custCd");
					custCdComp.val(value.custCd);//거래처코드 값으로 삽입
					
					var custNmComp = custRegForm.jqxForm("getComponentByName", "custNm");
					custNmComp.val(value.custNm);//거래처명 값으로 삽입
					
					var busnPersRegsNoComp = custRegForm.jqxForm("getComponentByName", "busnPersRegsNo");
					var busnPersRegsNoHypen = fn_setAutoHypenBusnNo(fn_checkNull(value.busnPersRegsNo))[0]; //자동 하이픈 입력
					busnPersRegsNoComp.val(busnPersRegsNoHypen);//사업자등록번호 삽입
					
					var repstvNmComp = custRegForm.jqxForm("getComponentByName", "repstvNm");
					repstvNmComp.val(value.repstvNm);//대표자명 삽입
					
					var regsNoSecComp = custRegForm.jqxForm("getComponentByName", "regsNoSec");
					if(value.regsNoSec == 0){ 
						regsNoSecComp.jqxDropDownList("val","부");//등록번호구분 0이면 부 삽입
					}else {
						regsNoSecComp.jqxDropDownList("val","여");//등록번호구분 1이변 여 삽입
					}
					
					var addrComp = custRegForm.jqxForm("getComponentByName", "addr");
					addrComp.val(value.addr);//주소삽입
					
					var zipNoComp = custRegForm.jqxForm("getComponentByName", "zipNo");
					zipNoComp.val(value.zipNo);//우편번호 삽입
					
					var addrDtlComp = custRegForm.jqxForm("getComponentByName", "addrDtl");
					addrDtlComp.val(value.addrDtl);//우편번호 상세 삽입
					
					var bsnCdtComp = custRegForm.jqxForm("getComponentByName", "bsnCdt");
					bsnCdtComp.val(value.bsnCdt);//업태 삽입
					
					var itmComp = custRegForm.jqxForm("getComponentByName", "itm");
					itmComp.val(value.itm);//종목 삽입
					
					var tel1Comp = custRegForm.jqxForm("getComponentByName", "tel1");
					tel1Comp.val(value.tel1);
					
					var tel2Comp = custRegForm.jqxForm("getComponentByName", "tel2");
					tel2Comp.val(value.tel2);
					
					var tel3Comp = custRegForm.jqxForm("getComponentByName", "tel3");
					tel3Comp.val(value.tel3);
					
				})
			},
			error : function(){
				alert("오류");
			}
			
		});
	}
	
	return {
		initCustRegForm : initCustRegForm,
		initPageCustRegCompEvents : initPageCustRegCompEvents,
		getBusnPersStatus : getBusnPersStatus,
		searchAddr : searchAddr,
		getCustTData : getCustTData
	}
	
})

