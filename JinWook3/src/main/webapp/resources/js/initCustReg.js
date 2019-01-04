$(function(){
	initCustRegForm();
})

function initCustRegForm(){
	let template = [
	{
		columns : [{
			type : "label",
			label : "거래처코드 :",
			labelPosition : "right",
			labelWidth : "3%",
			width : "150px"
		},{
			bind : "CustCd",
			name : "CustCd", 
			type : "text",   
			align : "left",
			width : "70px",
			height : "25px"
		},{
			type : "label",
			label : "사업자등록번호 :",
			labelPosition : "right",
			labelWidth : "3%",
			width : "250px"
		},{
			bind : "BusnPersRegsNo",
			name : "BusnPersRegsNo",
			type : "text",
			align : "left",
			width : "150px",
			height : "25px"
		},{
			bind : "btnBusiness",
			name : "btnBusiness", 
			type : "button",
			width : "140px",
			height : "25px",
			text : "사업자등록상태조회"
		}]
	}, {
		columns : [{
			type : "label",
			label : "거래처명 :", 
			labelPosition : "right",
			labelWidth : "3%",
			width : "150px"
		},{
			bind : "CustNm",
			name : "CustNm", 
			type : "text", 
			align : "left",
			width : "150px",
			height : "25px"
		},{
			type : "label",
			label : "주민등록번호 :",
			labelPosition : "right", 
			labelWidth : "3%",
			width : "170px"
		},{
			bind : "RegsNo",
			name : "RegsNo",
			type : "text",
			align : "left",
			width : "150px",
			height : "25px"
		},{
			type : "label",
			label : "주민등록기재분 :",
			labelPosition : "right",
			labelWidth : "3%", 
			width : "151px"
		},{
			bind : "RegsNoSec",
			name : "RegsNoSec",
			type : "text",
			align : "left",
			width : "30px", 
			height : "25px"
		},{
			type : "label",
			label : "0:부  1:여",
			width : "150px"
		}]
	}, {
		columns : [{
			type : "label",
			label : "대표자명 :",
			labelPosition : "right",
			labelWidth : '3%', 
			width : "485px"  
		},{
			bind : "RepstvNm",
			name : "RepstvNm",
			type : "text",
			align : "left",
			width : "150px",
			height : "25px"
		},{
			type : "label",
			label : "업태 :", 
			labelPosition : "right",
			labelWidth : "3%", 
			width : "70px"   
		},{
			bind : "BsnCdt",
			name : "BsnCdt",
			type : "text",
			align : "left",
			width : "250px", 
			height : "25px"
		},{
			type : "label",
			label : "종목 :",
			labelPosition : "right",
			labelWidth : "3%",
			width : "60px"
		},{
			bind : "Itm",
			name : "Itm",
			type : "text",
			align : "left",
			width : "250px",
			height : "25px"
		}]
	}, {
		columns : [{
			type : "label",
			label : "우편번호, 주소 :",
			labelPosition : "right",
			labelWidth : "3%",
			width : "485px" 
		},{
			bind : "ZipNo",
			name : "ZipNo",
			type : "text",
			align : "left",
			width : "110px",
			height : "25px"
		},{ 
			bind : "btnZipNo",
			name : "btnZipNo",
			type : "button",
			width : "30px", 
			height : "25px",
			text : "=" 
		},{
			bind : "addr",
            name : "addr",
            type : "text",
            width : "300px",
            height : "25px"
		}]
	}, {
		columns: [ {
			type : "label",
			label : "",
			labelPosition : "rihgt",
			labelWidth : "3%",
			width : "650px"
		},{
	        bind : "addrDtl",
	        name : "addrDtl",
	        type : "text",
	        width : "300px", 
	        height : "25px",
	        align : "left"
		}]
	}, {
	    columns : [ {
	        type : "label",
	        label : "전화번호 :",
	        labelPosition : "right",
	        labelWidth : "3%",
	        width : "485px"
	    }, {
	        bind : "tel1",
	        name : "tel1",
	        type : "text",
	        width : "40px",
	        height : "25px"
	    }, {
	        label : ")",
	        labelPosition : "left",
	        labelWidth : "5px",
	        labelPadding : {
	            left : 0,
	            top : 0,
	            right : 0,
	            bottom : 0
	        },
	        bind : "tel2",
	        name : "tel2",
	        type : "text",
	        width : "40px",
	        height : "25px"
	    }, {
	        label : "-",
	        labelPosition : "left",
	        labelWidth : "5px",
	        labelPadding : {
	            left : 0,
	            top : 0,
	            right : 0,
	            bottom : 0
	        },
	        bind : "tel3",
	        name : "tel3",
	        type : "text",
	        width : "40px",
	        height : "25px"
	   }]
	
	}];
	
	let custRegform = $("#custRegForm");
	
	custRegform.jqxForm({
		template : template,
		padding: { left: 10, top: 40, right: 0, bottom: 10 }
	});
	
}
