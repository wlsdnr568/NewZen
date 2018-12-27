function fn_getImgClass(id) {
	
	var imgClass = $("#"+id).find('img').attr("class");
	
	if (fn_checkNull(imgClass) == ""){
		imgClass = "onClass";
	}	
	return imgClass;
	
}


/**
 * null 체크
 * null, undefined, NaN일 경우 "" 리턴
 */
function fn_checkNull(obj) {
	if (obj ==  null || obj == "undefined" || obj == "NaN") {
		obj = "";
	}
	return obj;
}