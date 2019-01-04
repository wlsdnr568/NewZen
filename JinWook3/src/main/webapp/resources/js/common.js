/*************************************************************************
 *   공통 함수 정의
 *   명명 fn_
 *************************************************************************    
 */


function fn_getContextPath() { 
   return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
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

/**
 * 현재 날짜 가져오기
 */
function fn_getFormatDate(date){
	var year = "";
	var month = "";
	var day = "";
	
	// Date Type
	if(date instanceof Date == true) {
		year = date.getFullYear();                 //yyyy
		month = (1 + date.getMonth());             //M
		month = month >= 10 ? month : '0' + month; // month 두자리로 저장
		day = date.getDate();                      //d
		day = day >= 10 ? day : '0' + day;         //day 두자리로 저장
	// String Type
	} else if(new String(date) instanceof String){
		year = date.substr(0, 4);
		month = date.substr(4, 2);
		day = date.substr(6, 2);
	}

	return year+'-'+month+'-'+day;
}


/**
 * 다음 탭인텍스 값 가져오기
 */
function fn_getNextTabIndex(id) {
	
	var tabindex =$(id).attr("tabindex");
	
	tabindex++;
	
	return tabindex;
}




//
/**
 * 날짜 입력시 자동 대시 넣기
 * keyup과 함께 사용
 * 리턴[2000-00-00 형태의 날짜, 이동할 다음 tabindex]
 */
function fn_autoHypenDate(obj){
	
	var str;
	
	//타입체크
	str = obj.value.trim();
	str = str.replace(/[^0-9]/g, '');
	
	var tmp = '';
	
	var tabindex = "";
	if (str.length == 8) {
		tabindex = fn_getNextTabIndex(obj);
	}
	
	if( str.length <= 4){
		return [str, tabindex];
	} else if (str.length < 7){
		tmp += str.substring(0, 4);
		tmp += '-';
		
		var mm = str.substring(4);
		
		//1월~12월 사이 일 경우만 허용
		if (mm.length == 2) {
			if (parseInt(mm) > 0 && parseInt(mm) < 13) {
				tmp += str.substring(4);
			} 
		} else {
			tmp += str.substring(4);	
		}
		
		return [tmp,tabindex];
	} else if (str.length < 9){
		tmp += str.substring(0, 4);
		tmp += '-';
		tmp += str.substring(4, 6);
		tmp += '-';
		
		var dd = str.substring(6);
		
		//1일~31일사이일 경우만 허용
		if (dd.length == 2) {
			if (parseInt(dd) > 0 && parseInt(dd) < 32) {
				tmp += str.substring(6);
			} 
		} else {
			tmp += str.substring(6);	
		}
		
		return [tmp,tabindex];
	} else {
		tmp += str.substring(0, 4);
		tmp += '-';
		tmp += str.substring(4, 6);
		tmp += '-';
		tmp += str.substring(6, 8);
		
		return [tmp,tabindex];
	}
}

/**
 * 날짜 값 세팅시 자동 대시 넣기
 * 리턴: 2000-00-00 형태의 날짜
 */
function fn_setAutoHypenDate(val){
	
	var str;
	
	//타입체크
	str = val.toString().trim();
	str = str.replace(/[^0-9]/g, '');
	
	var tmp = '';
		
	if( str.length <= 4){
		return str;
	} else if (str.length < 7){
		tmp += str.substring(0, 4);
		tmp += '-';
		
		var mm = str.substring(4);
		
		//1월~12월 사이 일 경우만 허용
		if (mm.length == 2) {
			if (parseInt(mm) > 0 && parseInt(mm) < 13) {
				tmp += str.substring(4);
			} 
		} else {
			tmp += str.substring(4);	
		}
		
		return tmp;
	} else if (str.length < 9){
		tmp += str.substring(0, 4);
		tmp += '-';
		tmp += str.substring(4, 6);
		tmp += '-';
		
		var dd = str.substring(6);
		
		//1일~31일사이일 경우만 허용
		if (dd.length == 2) {
			if (parseInt(dd) > 0 && parseInt(dd) < 32) {
				tmp += str.substring(6);
			} 
		} else {
			tmp += str.substring(6);	
		}
		
		return tmp;
	} else {
		tmp += str.substring(0, 4);
		tmp += '-';
		tmp += str.substring(4, 6);
		tmp += '-';
		tmp += str.substring(6, 8);
		
		return tmp;
	}
}

/**
 * 사업자번호 입력시 자동 대시 넣기
 * keyup과 함께 사용
 * 리턴[000-00-00000 형태의 사업자번호, 이동할 다음 tabindex, 유효성결과체크(1:false, 2:true)]  
 */
function fn_autoHypenBusnNo(obj) {
	
	var str;
	str = obj.value.trim();
	
	
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
	
	var tabindex = "";
	var busn = "";
	
	if(str.length < 4){
		
		return [str, tabindex];
		
	} else if (str.length < 6) {
		
		tmp += str.substring(0, 3);
		tmp += "-";
		tmp += str.substring(3);
		
		return [tmp, tabindex, ""];
		
	} else {
		
		tmp += str.substring(0, 3);
		tmp += "-";
		tmp += str.substring(3, 5);
		tmp += "-";
		tmp += str.substring(5);
		
		
		if (str.length == 10) {
			tabindex = fn_getNextTabIndex(obj);
			var chkBusn = fn_checkBusnNo(str); 
			
			if (chkBusn) {
				busn = "2";
			} else {
				busn = "1";
			}
		}
		
		return [tmp,tabindex, busn];
		
	}
}


/**
 * 사업자번호 값 세팅시 자동 대시 넣기 * 
 * 리턴: [000-00-00000 형태의 사업자번호, 유효성 검사결과 1:false, 2:true]
 */
function fn_setAutoHypenBusnNo(val) {
	
	var str;
	str = val.toString().trim();
	
	
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
	
	var busn = "";
	
	if(str.length < 4){
		
		return [str, "1"];
		
	} else if (str.length < 6) {
		
		tmp += str.substring(0, 3);
		tmp += "-";
		tmp += str.substring(3);
		
		return [tmp, "1"];
		
	} else {
		
		tmp += str.substring(0, 3);
		tmp += "-";
		tmp += str.substring(3, 5);
		tmp += "-";
		tmp += str.substring(5);
		
		
		if (str.length == 10) {
			
			var chkBusn = fn_checkBusnNo(str); 
			
			if (chkBusn) {
				busn = "2";
			} else {
				busn = "1";
			}
		}
		
		return [tmp, busn];
		
	}
}



/**
 * 주민등록번호 입력시 자동대시 넣기
 * keyup과 함께 사용
 * 리턴[000000-0000000 형태, 이동할 다음 tabindex, 유효성결과체크(1:false, 2:true)]
 */
function fn_autoHypenRegsNo(obj) {
	
	
	var str;
	str = obj.value.trim();	
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
		
	var tabindex = "";
	var regs = "";
		
	if (str.length < 7) {
		return [str, tabindex, ""];
	} else {
		tmp += str.substring(0, 6);
		tmp += "-";
		tmp += str.substring(6);
		
		
		
		if (str.length == 13) {
			
			tabindex = fn_getNextTabIndex(obj);
			var chkRegs = fn_checkRegsNo(str);
			
			if (chkRegs) {
				regs = "2";
			} else {
				regs = "1";
			}
		}
		
		return [tmp, tabindex, regs];
	}
}


/**
 * 주민등록번호 갑세팅시 자동대시 넣기 
 * 리턴 [000000-0000000 형태, 유효성체크결과(1:false, 2:true)]
 */
function fn_setAutoHypenRegsNo(val) {
	
	
	var str;
	str = val.toString().trim();	
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
	
	
	var regs = "";
		
	if (str.length < 7) {
		return [str, "1"];
	} else {
		tmp += str.substring(0, 6);
		tmp += "-";
		tmp += str.substring(6);
		
		
		if (str.length == 13) {

			var chkRegs = fn_checkRegsNo(str);
			
			if (chkRegs) {
				regs = "2";
			} else {
				regs = "1";
			}
		}
		
		return [tmp, regs];
	}
}


/**
 * 0:부, 1:여 선택 함수
 * 키 입력에 따른 input field 내 value 설정
 * 리턴[부 or 여 or "" , 이동할 다음 tabindex]
 */
function fn_selectPosNeg(obj, field) {
	
	var str = obj.trim();
	str = str.replace(/[^0-9]/g, '');
	
	var tabindex = "";
	var rtnStr = "";
	if (str == "0") {
		rtnStr = "부";
		//tabindex = fn_getNextTabIndex(obj);
		return [rtnStr, tabindex];
	} else if (str == "1"){
		rtnStr = "여";
		//tabindex = fn_getNextTabIndex(obj);
		return [rtnStr, tabindex];
	} else {
		
		return [rtnStr, tabindex];
	}
	
}



/**
 * 입력된 텍스트의 자리수 체크
 * str: 입력된 텍스트, len: 설정할 자리수
 */
function fn_checkDigit(str,len) {
	if (str.length > parseInt(len)) {
		alert(len+"글자만 입력가능합니다.");
	}
}


/**
 * 포터스 자리수 체크 후 자동 이동
 * obj: 현재 obj(사용시 this로 설정)
 * maxCount: 현재 obj에 입력될 수 있는 최대 문자수
 * nextObj: 이동할 obj id
 */
function fn_autoFocus(obj, maxCount, nextObj) {
	
	var count = obj.value.length;
	
	if (count >= maxCount) {
		$("#"+nextObj).focus();
	}
	
}

/**
 * 숫자만 입력
 * obj: 현재 obj 혹은 value
 */
function fn_checkOnlyNum(obj) {
	
	if (typeof(obj) =="object") {
		return obj.value.trim().replace(/[^0-9]/g,"");
	} else {
		return obj.toString().trim().replace(/[^0-9]/g,"");		
	}
	
}

/**
 * 금액 형태 체크
 * obj : object, value
 * onlyNum, +기능 
 * + --> 000 추가로 처리
 * 
 */
function fn_checkOnlyAmt(obj) {
	
	var tmp;
	var amt;
	
	
	if (typeof(obj) =="object") {
		tmp = obj.value.trim()
	} else {
		tmp =obj.toString().trim()		
	}
	
	
	tmp = tmp.replace(/\+/gi, "000"); //+ --> 000으로 변환
	tmp = tmp.replace(/[^0-9]/g, ""); //숫자만 입력하도록
	
	
	amt = tmp; 
	
	
	return amt;
}


/**
 * 이메일 형태 체크
 * obj: 현재 obj
 */
function fn_checkEmail(obj) {
	
	var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	
	return (obj != '' && obj != 'undefined' && regex.test(obj));
}


/**
 * 세자리마다 콤마 추가
 * obj: this, 혹은 value로 설정
 * obj의 타입에 따라 리턴해줌
 */
function fn_setComma(obj) {
	
	var num;
	if (typeof(obj) =="object") {
		num = obj.value.trim().replace(/[^0-9]/g,"");
	} else {
		num = obj.toString().trim().replace(/[^0-9]/g,"");
	}
	
	var regexp = /\B(?=(\d{3})+(?!\d))/g;
	
	return num.toString().replace(regexp, ',');
}


/**
 * 전체 자리수에 맞춰 입력한 숫자의 남는 자리수를 str로 맞추기  
 * num: 입력한 숫자
 * width: 전체 자리수
 * str : 채울 문자
 * ex) fn_lpad(10, 4, "0") --> 0010
 *  
 */
function fn_lpad(num, width, str) {
	
	num = num + '';
	
	return num.length >= width ? num : new Array(width - num.length + 1).join(str) + num;
}


/**
 * 주민등록번호 유효성 검사
 * val: 주민등록번호 입력값
 * true, false로 리턴
 */
function fn_checkRegsNo(val) {
		
	val = val.replace("-", "");
	
	var regsNo1 = val.substring(0, 6);
	var regsNo2 = val.substring(6);
	
	
	var arr_regsNo = [],
    	compare = [2,3,4,5,6,7,8,9,2,3,4,5],
    	sum     = 0;

	
	for (var i = 0; i<13; i++) {
		arr_regsNo[i] = val.substring(i,i+1);
    }
     
    for (var i = 0; i<12; i++) {
        sum = sum + (arr_regsNo[i] * compare[i]);
    }
 
    sum = (11 - (sum % 11)) % 10;
     
    if (sum != arr_regsNo[12]) {
        return false;
    }
 
    return true;

}

/**
 * 사업자등록번호 유효성 검사
 * val: 사업자등록번호 입력값
 * true, false로 리턴
 */
function fn_checkBusnNo(val) {
	
	val = val.replace("-", "");
	
	if ((val = (val+'').match(/\d{1}/g)).length != 10) { return false; }
	
	// 합 / 체크키
	var sum = 0, key = [1, 3, 7, 1, 3, 7, 1, 3, 5];
	
	// 0 ~ 8 까지 9개의 숫자를 체크키와 곱하여 합에더합니다.
	for (var i = 0 ; i < 9 ; i++) { sum += (key[i] * Number(val[i])); }
	
	// 각 8번배열의 값을 곱한 후 10으로 나누고 내림하여 기존 합에 더합니다.
	// 다시 10의 나머지를 구한후 그 값을 10에서 빼면 이것이 검증번호 이며 기존 검증번호와 비교하면됩니다.
	return (10 - ((sum + Math.floor(key[8] * Number(val[8]) / 10)) % 10)) == Number(val[9]);
	
}



/**
 * 값을 0으로 세팅
 * form 중 int인 필드들의 값을 0으로 세팅함
 * 저장시 exception과 not found 방지
 */
function fn_setZeroValue(id) {
	
	var val = $("#"+id).val();
	if (val.toString().trim() == "") {
		$("#"+id).val(0);
	}
	
}



/**
 * 필드 입력 가능
 * form내 input:text, select 
 * 이미지 클래스/투명도/datepicker
 */
function fn_enableInput(id) {
	
	
	//form id에 해당하는 input, select, radio 등등 
	//case hidden만 넘어가고 나머지는 default로 해도 되나 차후를 위하여 case 분기 설정
	$.each($("#"+id).get()[0], function (index, item) {
		
		var itemType = item.type;
		var itemId = item.id;
		var itemClassName = item.className; 
		switch (itemType) {
			case 'hidden': //히든값 넘어감
				break;
			case 'text' : //input type text, class에서 datepicker 여부 판단
				if (itemClassName.indexOf("hasDatepicker") == -1) {
					$("#"+itemId).prop("disabled", false);
					$("#"+itemId).css("cursor", "pointer");
				} else {
					$("#"+itemId).datepicker('option', 'disabled', false);
				}
				
				break;
			case 'select-one': //select box
				$("#"+itemId).prop("disabled", false);
				break;
			default :
				$("#"+itemId).prop("disabled", false);
				break;
		}		
		
	});
	
	//datepicker내 이미지 스타일 재정의
	$("img.ui-datepicker-trigger").attr("style","margin-left:3px; vertical-align:middle; cursor:pointer;");
	
	//이미지
	var imgObj = $("#"+id).find('img');
	
	$.each(imgObj, function (index, item) {
		var itemId = item.id;
		if (itemId != "") {
			$("#"+itemId).attr("class", "onClass");
			$("#"+itemId).attr("style", "opacity:1");
			$("#"+itemId).css("cursor", "pointer");
		}
		
	});
		
	
	//a태그	
	var aObj = $("#"+id).find('a');
	$.each(aObj, function (index, item) {
		var itemId = item.id;
		if (itemId != "") {
			$("#"+itemId).attr({
				"href": "",
				"onclick": ""
			
			});
			$("#"+itemId).css("cursor", "pointer");
		}
	});
	
}


/**
 * 필드 입력 불가능
 * form내 input:text, select 
 * 이미지 클래스/투명도/datepicker
 */

function fn_disableInput(id) {
	
	
	//form id에 해당하는 input, select, radio 등등 
	//case hidden만 넘어가고 나머지는 default로 해도 되나 차후를 위하여 case 분기 설정
	$.each($("#"+id).get()[0], function (index, item) {
		
		var itemType = item.type;
		var itemId = item.id;
		var itemClassName = item.className; 
		
		switch (itemType) {
			case 'hidden': //히든값 넘어감
				break;
			case 'text' : //input type text, class에서 datepicker 여부 판단
				if (itemClassName.indexOf("hasDatepicker") == -1) {
					$("#"+itemId).prop("disabled", true);	
					$("#"+itemId).css("cursor", "default");
				} else {
					$("#"+itemId).datepicker('option', 'disabled', true);
				}				
				break;
			case 'select-one': //select box
				$("#"+itemId).prop("disabled", true);
				break;
			default :
				$("#"+itemId).prop("disabled", true);
				break;
		}		
		
	});
	
	//datepicker내 이미지 스타일 재정의
	$("img.ui-datepicker-trigger").attr("style","margin-left:3px; vertical-align:middle; cursor:pointer;");
	
	//이미지
	var imgObj = $("#"+id).find('img');
	
	$.each(imgObj, function (index, item) {
		var itemId = item.id;
		if (itemId != "") {
			$("#"+itemId).attr("class", "offClass");
			$("#"+itemId).attr("style", "opacity:0.4");
			$("#"+itemId).css("cursor", "default");
		}
		
	});
	
	//a태그	
	var aObj = $("#"+id).find('a');
	$.each(aObj, function (index, item) {
		var itemId = item.id;
		if (itemId != "") {
			$("#"+itemId).attr({
				"href": "#",
				"onclick": "return false;"
			
			});
			$("#"+itemId).css("cursor", "default");
		}
	});

	
}


/**
 * 상단 탭내의 이미지,a태그를 사용하도록 설정
 * 
 */

function fn_enableTab() {
	
	//이미지
	var imgObj = $("#tab_many").find('img');
	
	
	$.each(imgObj, function (index, item) {
		$(item).attr("class", "onClass");
		$(item).attr("style", "opacity:1");
		$(item).css("cursor", "pointer");
		
		
	});
	
	//a태그	
	var aObj = $("#tab_many").find('a');
	$.each(aObj, function (index, item) {
		
		$(item).attr({
			"href": "",
			"onclick": ""
		
		});
		$(item).css("cursor", "pointer");
		
	});
	
	
}

/**
 * 상단 탭내의 이미지,a태그를 사용하지 못도록 설정
 * 
 */
function fn_disableTab() {
	
	//이미지
	var imgObj = $("#tab_many").find('img');
	
	
	$.each(imgObj, function (index, item) {
		$(item).attr("class", "offClass");
		$(item).attr("style", "opacity:0.4");
		$(item).css("cursor", "default");
		
		
	});
	
	//a태그	
	var aObj = $("#tab_many").find('a');
	$.each(aObj, function (index, item) {
		
		$(item).attr({
			"href": "#",
			"onclick": "return false;"
		
		});
		$(item).css("cursor", "default");
		
	});
	
	
}



/**
 * 상단 툴바내의 이미지,a태그를 사용하도록 설정
 * 
 */
function fn_enableToolbar() {
	
	
	//이미지
	var imgObj = $("#tool_bar").find('img');
	
	
	$.each(imgObj, function (index, item) {
		$(item).attr("class", "onClass");
		$(item).attr("style", "opacity:1");
		$(item).css("cursor", "pointer");
		
		
	});
	
	
	var aObj = $("#tool_bar").find('a');
	$.each(aObj, function (index, item) {
		
		$(item).attr({
			"href": "",
			"onclick": ""
		
		});
		$(item).css("cursor", "pointer");
		
	});
}


/**
 * 상단 툴바내의 이미지,a태그를 사용하지 못하도록 설정
 * 
 */
function fn_disableToolbar() {
	
	
	//이미지
	var imgObj = $("#tool_bar").find('img');
	
	
	$.each(imgObj, function (index, item) {
		$(item).attr("class", "offClass");
		$(item).attr("style", "opacity:0.4");
		$(item).css("cursor", "default");
		
		
	});
	
	
	var aObj = $("#tool_bar").find('a');
	$.each(aObj, function (index, item) {
		
		$(item).attr({
			"href": "#",
			"onclick": "return false;"
		
		});
		$(item).css("cursor", "default");
		
	});
}



/**
 * 이미지 클래스 처리
 * 해당하는 id 하위 img태그내에 class를 param값에 따라서 추가
 * onClass일경우 실행 가능
 * offClass일경우 실행 불가능(opacity 0.2로 흐리게 처리)
 */
function fn_setImgClass(id, param) {
	if (param == "on") {
		$("#"+id).find('img').attr("class", "onClass");
		$("#"+id).find('img').attr("style", "opacity:1");
	} else {
		$("#"+id).find('img').attr("class", "offClass");
		$("#"+id).find('img').attr("style", "opacity:0.2");
	}
	
}




/**
 * 이미지 태그내 클래스 속성 리턴
 * obj: 클래스를 받을 객체
 * 
 */
function fn_getImgClass(id) {
	
	var imgClass = $("#"+id).find('img').attr("class");
	
	if (fn_checkNull(imgClass) == ""){
		imgClass = "onClass";
	}	
	return imgClass;
	
}

/**
 * 하이픈 제거
 * val: value
 */
function fn_repHypen(val) {

	return val.toString().trim().replace(/\-/g, '');
}

/**
 * 콤마 제거
 * val: value
 */
function fn_repComma(val) {

	return val.toString().trim().replace(/,/g, '');
}



/**
 * 특수문자 제거
 * val : value
 * 
 */
function fn_repSpeChar(val) {
	
	var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
	var rtnStr;
		
	if (val != "") {
		if (regExp.test(val)){
			rtnStr = val.replace(regExp, "").trim();
		}	
	}
	
	
	return rtnStr;
	
}


/**
 * 인풋박스 백그라운드 에러표시
 * id: 인풋박스 아이디
 * 
 */
function fn_setBgDspErr(id) {
	$("#"+id).css("background", "#2f7bc9");
	$("#"+id).css("color", "#ffffff");
	
}

/**
 * 인풋박스 백그라운드 초기화
 * id: 인풋박스 아이디
 * 
 */
function fn_setBgDspInit(id) {
	$("#"+id).css("background", "");
	$("#"+id).css("color", "#000000");
}

