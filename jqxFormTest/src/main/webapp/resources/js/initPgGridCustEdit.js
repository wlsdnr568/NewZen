/**
 * 190104_mjw
 * 일반전표입력(acc01010) 하단 거래처 등록 스크립트(주민등록번호와 주민등록기재분이 나옴)
 * TODO jqxForm내 키 이벤트 처리
 */

let isSearched; //사업자등록상태조회 변수

define(["initPgGridCustEdit", "jQuery", "jqxbuttons",
	"jqxcheckbox", "jqxinput", "jqxlistbox", 
	"jqxscrollbar", "jqxdropdownlist", "jqxradiobutton", 
	"jqxpasswordinput", "jqxnumberinput", "jqxform", 
	"jqwidgets/globalization/globalize", "util/codehelper/codehelper"]

,function(initPgGridCustEdit, jQuery, jqxButtons,
		jqxCheckBox, jqxInput, jqxListBox, 
		jqxScrollBar, jqxDropDownList, jqxRadioButton, 
		jqxPasswordInput, jqxNumberInput, jqxForm, 
		globalize, codehelper){      
	
	$(function(){    
		isSearched = false; // 화면 로딩시 사업자등록상태조회 변수 false로 선언
		initPgGridCustEdit(); 
		initPgGridCustEditCompEvents();
		getCustTData();
	})
	
	//input요소에 포커스 됐을 때 값 전체 선택 + 배경색(하늘색) 변화
	$("#pgGridCustForm").on("focus", "input", function(e){
		e.preventDefault();
		let target = e.target;
		
		if(target.type == "text"){
			target.style.backgroundColor = "#e0e9f5";
			target.select();
		}
		
	})
	
	//input요소에 포커스 아웃 됐을 때 배경색(흰색) 변화
	$("#pgGridCustForm").on("blur", "input", function(e){
		e.preventDefault();
		let target = e.target;
		
		if(target.type == "text"){
			target.style.backgroundColor = "white";
		}
	})
		
	
	/**
	 * 거래처등록 폼 초기화
	 * TODO 주소 검색 이미지 불러오기
	 */	
	function initPgGridCustEdit(){
		
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
				"placeHolder" : "_ _ _ㅡ_ _ㅡ_ _ _ _ _",
				"width" : "150px",
				"height" : "25px"
			},{
				"bind" : "btnBusiness",
				"name" : "btnBusiness", 
				"type" : "button",
				"width" : "140px",
				"height" : "25px",
				"value" : "사업자등록상태조회"
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
				"bind" : "regsNo",
				"name" : "regsNo",
				"type" : "text",
				"align" : "left",
				"width" : "150px",
				"height" : "25px"
			},{
				"type" : "label",
				"label" : "주민등록기재분 :",
				"labelPosition" : "right",
				"labelWidth" : "3%", 
				"width" : "135px"
			},{
				"bind" : "regsNoSec",
				"name" : "regsNoSec", 
				"type" : "option",
				"width" : "40px", 
				"height" : "25px",
				"autoDropDownHeight" : true,
				"component" : "jqxDropDownList",
				"options" : [{ 
					'label' : '부',
					'value' : '0'
				}, { 
					'label' : '여',
					'value' : '1'
				}]
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
				"width" : "480px"  
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
				"width" : "480px" 
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
				"imgSrc" : fn_getContextPath() + "/resources/img/btn_msg.png"
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
				"labelPosition" : "right",
				"labelWidth" : "3%",
				"width" : "640px"
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
		
		$("#pgGridCustForm").jqxForm({  
			"template" : template,
			"padding" : { left: 10, top: 40, right: 0, bottom: 10 }
		});
		
	}
	
	/**
	 * jqxform안에 id에 따라서 발생하는 이벤트 정리
	 */	
	function initPgGridCustEditCompEvents(){
		
		$("#pgGridCustForm").on("setCodeHelper",function(event){
			
			let elemId = $("#pgGridCustForm").jqxForm("getComponentNameById", event.args.id);
			
			if(elemId == "busnPersRegsNo" || elemId == "btnBusiness"){
				let busnPersRegsNoComp = $("#pgGridCustForm").jqxForm("getComponentByName", "busnPersRegsNo"); //사업자등록번호 component 불러오기
				let busnPersRegsNo = busnPersRegsNoComp.jqxInput("val"); // 사업자등록번호 값 가져오기
				getBusnPersStatus(busnPersRegsNo);
			}else if(elemId == "zipNo" || elemId == "btnZipNo"){
				searchAddr();
			}
			
		})
		
	}
	
	/**
	 * 사업자등록상태조회
	 * busnPersNo : 사업자등록번호
	 */
	function getBusnPersStatus(busnPersNo) {
		
		//조회버튼 계속적인 클릭을 막음
		if (isSearched == true) {
			alert("잠시 후 조회해주세요.");
			setTimeout(function() {
				isSearched = false;
			}, 5000)
		} else {
			//common.js의 fn_getContextPath() 메소드 사용
			$.ajax(fn_getContextPath() + "/hometax/getBusnPersStatus", { 
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
	
	/**
	 * 주소검색 이벤트
	 */
	function searchAddr(){ 
		 
		let zipNo = $("#pgGridCustForm").jqxForm("getComponentByName","zipNo");
		let addr = $("#pgGridCustForm").jqxForm("getComponentByName","addr");
		let addrDtl = $("#pgGridCustForm").jqxForm("getComponentByName","addrDtl");
		
		codehelper.initAddrHelper(zipNo.attr("id"), addr.attr("id"), addrDtl.attr("id"));
		
		addrDtl.focus();
		
	}
	
	//임시로 테이블에서 거래처코드 101인 행 가져오는 이벤트
	function getCustTData(){
		$.ajax({
			url : fn_getContextPath() + "/codeHelper/getCustTData?CustCd=101",
			type : "get",
			dataType : "json",
			success : function(data){ 
				$.each(data, function(key, value){
					
					let custCdComp = $("#pgGridCustForm").jqxForm("getComponentByName", "custCd");
					custCdComp.val(value.custCd);//거래처코드 값으로 삽입
					
					let custNmComp = $("#pgGridCustForm").jqxForm("getComponentByName", "custNm");
					custNmComp.val(value.custNm);//거래처명 값으로 삽입
					
					let busnPersRegsNoComp = $("#pgGridCustForm").jqxForm("getComponentByName", "busnPersRegsNo");
					if(value.busnPersRegsNo != ""){
						let busnPersRegsNoHypen = fn_setAutoHypenBusnNo(fn_checkNull(value.busnPersRegsNo))[0]; //자동 하이픈 입력
						busnPersRegsNoComp.val(busnPersRegsNoHypen);//사업자등록번호 삽입
					}
					
					let repstvNmComp = $("#pgGridCustForm").jqxForm("getComponentByName", "repstvNm");
					repstvNmComp.val(value.repstvNm);//대표자명 삽입
					
					let regsNoSecComp = $("#pgGridCustForm").jqxForm("getComponentByName", "regsNoSec");
					if(value.regsNoSec == 0){ 
						regsNoSecComp.jqxDropDownList("val","0");//등록번호구분 0이면 부 삽입
					}else {
						regsNoSecComp.jqxDropDownList("val","1");//등록번호구분 1이변 여 삽입
					}
					
					let regsNoComp = $("#pgGridCustForm").jqxForm("getComponentByName", "regsNo");
					let regsNoHypen = fn_setAutoHypenRegsNo(fn_checkNull(value.regsNo))[0];;
					regsNoComp.val(regsNoHypen);//주민등록번호 삽입
					
					let addrComp = $("#pgGridCustForm").jqxForm("getComponentByName", "addr");
					addrComp.val(value.addr);//주소삽입
					
					let zipNoComp = $("#pgGridCustForm").jqxForm("getComponentByName", "zipNo");
					zipNoComp.val(value.zipNo);//우편번호 삽입
					
					let addrDtlComp = $("#pgGridCustForm").jqxForm("getComponentByName", "addrDtl");
					addrDtlComp.val(value.addrDtl);//우편번호 상세 삽입
					
					let bsnCdtComp = $("#pgGridCustForm").jqxForm("getComponentByName", "bsnCdt");
					bsnCdtComp.val(value.bsnCdt);//업태 삽입
					
					let itmComp = $("#pgGridCustForm").jqxForm("getComponentByName", "itm");
					itmComp.val(value.itm);//종목 삽입
					
					let tel1Comp = $("#pgGridCustForm").jqxForm("getComponentByName", "tel1");
					tel1Comp.val(value.tel1);
					
					let tel2Comp = $("#pgGridCustForm").jqxForm("getComponentByName", "tel2");
					tel2Comp.val(value.tel2);
					
					let tel3Comp = $("#pgGridCustForm").jqxForm("getComponentByName", "tel3");
					tel3Comp.val(value.tel3);
					
				})
			},
			error : function(){
				alert("오류");
			}
			
		})
		.done(function(){
			formDataChange(); //페이지 로딩시 값 입력 후에 update이벤트 수행할 수 있도록 구성
		});
	}
	
	/**
	 * 폼 데이터 수정시 즉시 DB로 update하는 함수 
	 */
	function formDataChange(){
		$("#pgGridCustForm").on("formDataChange",function(event){
			let args = event.args;
			let formData = args.value;
			
			$.ajax({
				url : fn_getContextPath() + "/updateFormData",
				type : "post",
				dataType : "json",
				data : {
					"formData" : formData
				},
				success : function(result){
					if(result == "성공"){
						alert("성공");
					}else {
						alert("실패");
					}
				},
				error : function(request,status,error){
					console.log(("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error));
				}
			
			})
			
		})
	}
	
	return {
		initPgGridCustEdit : initPgGridCustEdit,
		initPgGridCustEditCompEvents : initPgGridCustEditCompEvents,
		getBusnPersStatus : getBusnPersStatus,
		searchAddr : searchAddr,
		getCustTData : getCustTData,
		formDataChange : formDataChange
	}
	
})

