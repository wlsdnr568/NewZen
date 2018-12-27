$(function(){
	
	$("#compChrgEmpHelper").on("click", function(e) {
		e.preventDefault();
		
		//이미지 클래스 onClass일 경우만 코드헬퍼 실행
		var imgClass = fn_getImgClass('compChrgEmpHelper');
		if (imgClass == "onClass") {
			
			initCodeHelper("ACCDEPTEMPT", 1, 1);
			
			$("#btnCodeHelperOk").on("click", function(e){
				// bind data
				$("#compChrgEmpCd").val(getCodeHelperResult("DeptEmpCd"));
				$("#compChrgEmpNm").val(getCodeHelperResult("DeptEmpNm"));
				$("#compChrgEmpEmail").val(getCodeHelperResult("Email"));
							
				// set focus
				$("#prtCustNm").focus();
				
				// close dialog
				$("#codeHelperModal").dialog("close");
				
				isEdited = true;
			});
		}
	});
	
});


