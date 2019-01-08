<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta charset="utf-8">
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
   
<title>우편번호 검색</title>
<%
	String zipNo = request.getParameter("zipNo");
	String addr = request.getParameter("addr");
	String addrDetail = request.getParameter("addrDetail");
	String searchTxt = "";
%>

<style type="text/css">
 * { margin:0; padding:0; }
 li { list-style:none; }
 a { text-decoration:none; } 
 img { border:none; }

 #main_header{
	 height:40px; line-height:40px; font-weight:bold; font-size:14pt;
	 text-align:left; background-color:#2f7bc9;  color:white; 
	 padding-left:20px; letter-spacing:-1px;  overflow:hidden;
	 }


.content { width:620px; height:480px; }
.content ul  {width:100%; margin-top:20px ; margin-left:20px;  overflow:hidden; }
.content ul li { width:104px; height:12px; font-size:9pt; letter-spacing:-1px; color:#444444; background-color:#F6F9FE; padding:10px 0px; float:left; border:1px solid #CFD8E7; text-align:center; cursor:pointer; }
.content ul li.on {  width:104px; height:12px; font-size:9pt; letter-spacing:-1px; color:white;  background-color:#157BDC; font-weight:bold; padding:10px 0px; border:1px solid #0D65CC; text-align:center;  }

.content .viewDiv{  border:1px solid #666666; width:590px; height:480px; margin-left:20px; margin-top:15px; }
.content .viewDiv .p1 { font-size:10pt; letter-spacing:-1px; color:#444444; margin-left:30px; margin-top:30px; }
.content .viewDiv .p2 { font-size:12px; letter-spacing:-1px; color:#888888; margin-left:30px; margin-top:4px; }
.content .viewDiv .search_gray { width:547px; height:70px;  background-color:whitesmoke;margin-left:20px; margin-top:30px; text-align:center;  padding-top:40px; }
.content .viewDiv .search_gray2{ width:522px; height:70px;  background-color:whitesmoke;margin-left:20px; margin-top:30px; text-align:left; padding-left:30px; padding-top:25px; padding-bottom:15px;}


.content .viewDiv2 {  width:590px; height:480px; margin-left:20px; margin-top:55px; }
.content .viewDiv2 .search_gray4{ width:573px; height:465px;  background-color:whitesmoke;margin:7px; text-align:left; overflow-y:scroll; overflow-x:hidden; }
.content .viewDiv2 .search_gray4 table.post{ width:545px; border-collapse:collapse;   }
.content .viewDiv2 .search_gray4 table.post tr td { height:24px; padding:10px 0px; color:#777777; letter-spacing:0px; font-size:12px; border-bottom:1px solid #E0E0E0;}


.content .viewDiv ul#searchType {overflow:hidden;}
.content .viewDiv ul#searchType li { float:left; width:160px;}
.content .viewDiv ul#searchType li .rdo {vertical-align:middle; margin:-4px 0 1px -4px;}

</style>

<script type="text/javascript">

//선택했던 옵션과 시도를 쿠키로 저장하기
function init(){
	var sidocookie = getCookie("sido");
	var optcookie = getCookie("searchOpt");
	
	if (optcookie=="" || optcookie=="undefined")
	{
		$("input:radio[name='searchOpt'][value='roadName']").prop("checked",true);
	}
	else {
		if(optcookie=="roadName") { $("input[name='searchOpt'][value='roadName']").prop("checked",true); }
		if(optcookie=="dongName") { $("input[name='searchOpt'][value='dongName']").prop("checked",true); }
		if(optcookie=="bldName")  { $("input[name='searchOpt'][value='bldName']").prop("checked",true);  }
	}

	if (sidocookie==""  || sidocookie=="undefined")
		{
			$("#sido").val("강원도");
		}
	else {
			if(sidocookie=="강원도") { $("#sido").val("강원도"); };
			if(sidocookie=="경기도") { $("#sido").val("경기도"); };
			if(sidocookie=="경상남도") { $("#sido").val("경상남도"); };
			if(sidocookie=="경상북도") { $("#sido").val("경상북도"); };
			if(sidocookie=="광주광역시") { $("#sido").val("광주광역시"); };
			if(sidocookie=="대구광역시") { $("#sido").val("대구광역시"); };
			if(sidocookie=="대전광역시") { $("#sido").val("대전광역시"); };
			if(sidocookie=="부산광역시") { $("#sido").val("부산광역시"); };
			if(sidocookie=="서울특별시") { $("#sido").val("서울특별시"); };
			if(sidocookie=="세종특별자치시") { $("#sido").val("세종특별자치시"); };
			if(sidocookie=="울산광역시") { $("#sido").val("울산광역시"); };
			if(sidocookie=="인천광역시") { $("#sido").val("인천광역시"); };
			if(sidocookie=="전라남도") { $("#sido").val("전라남도"); };
			if(sidocookie=="전라북도") { $("#sido").val("전라북도"); };
			if(sidocookie=="제주특별자치도") { $("#sido").val("제주특별자치도"); };
			if(sidocookie=="충청남도") { $("#sido").val("충청남도"); };
			if(sidocookie=="충청북도") { $("#sido").val("충청북도"); };
		}
		
	checkOpt(optcookie);
		
}


//주소 검색
function goSearch() {
	viewLoading();

	var sido = $("#sido").val();
	var sw = $("#searchTxt").val();
	var rdo = $('input[name="searchOpt"]:radio:checked').val();
	var pgnum = parseInt($("#pageNum").val());
			
	
	setCookie("sido", sido, 100);
	setCookie("searchOpt", rdo, 100);


	var alldata = {"SIDO":sido, "searchOpt":rdo, "searchTxt":sw};

		$.ajax({
            url:"http://post.newzensolution.kr/searchResultFull.jsp",
            type:"post",
            dataType:"text",
			data:alldata,
            timeout:0,
            cache:false,
            /** 파일 읽기에 성공한 경우 */
            success:function(data){
                //dataType값이 text일 경우에는 단순히 내용에 대한 문자열이므로, 직접 출력할 수 있다.
        	  $(".viewDiv").remove();
        	  $(".viewDiv2").html(data);
              hideLoading();
            },
            /** 파일 읽기에 실패한 경우 (주소 오타, 웹서버 중지 등) */
            error : function(xhr, textStatus, errorThrown){
                $(".viewDiv2").html("<div>"+textStatus+" (HTTP-" +xhr.status+" / "+errorThrown+")</div>");
            }
        });

}


/** 검색어 인풋 박스의 포커스, 엔터 처리 **/
$(function(){
	$("#searchTxt").
    focus( function () {
        if ( this.value === this.defaultValue ) {
            this.value = '';
            $( this ).removeClass( 'blur' ).addClass( 'focus' );
        }
    }).
    blur( function () {
        if ( this.value === '' ) { 
            this.value = this.defaultValue;
            $( this ).removeClass( 'focus' ).addClass( 'blur' );
        }
    }).
	keypress(function( event ) {
		if ( event.which == 13 ) {
		 //event.preventDefault();
		 goSearch();
		 return false;  
		 }
	});
});



/** 검색 옵션 선택시 검색 요령 설명부분 처리와 검색어 defautvalue 처리 **/	
function checkOpt(txt){
	var st = document.getElementById("searchTxt")
	
	if (txt=="roadName") { 
	$("#chkRoad").css("display","block");
	$("#chkDong").css("display","none");
	$("#chkBld").css("display","none");
	$("#searchTxt").val("도로명 또는 도로명 + 건물번호");
	st.defaultValue="도로명 또는 도로명 + 건물번호";
	}

	if (txt=="dongName") {
	$("#chkRoad").css("display","none");
	$("#chkDong").css("display","block");
	$("#chkBld").css("display","none");
	$("#searchTxt").val("동(읍/면) 또는 동(읍/면) + 지번");	
	st.defaultValue="동(읍/면) 또는 동(읍/면) + 지번";
	}

	if (txt=="bldName") { 
	$("#chkRoad").css("display","none");
	$("#chkDong").css("display","none");
	$("#chkBld").css("display","block");
	$("#searchTxt").val("건물명");
	st.defaultValue="건물명";
	}
	
	st.focus();
}


/** 검색 시 로딩 이미지 처리 **/
function viewLoading() {
		
		var maskHeight = $(document).height(); 
		var	maskWidth = $(document).width(); 
		//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
        $('#mask').css({
                'width' : maskWidth
                , 'height': maskHeight
                , 'opacity' : '0.1'
        });  

		$("#mask").show();
		$("#viewLoading").show();

} 

function hideLoading(){
        $("#mask, #viewLoading").hide();
}

function popClose() {
	window.close();
}


// 쿠키 생성
function setCookie(cName, cValue, cDay){
    var expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
}

// 쿠키 가져오기
function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}


/**  검색된 주소 최종 선택 **/
function endSearch(str){
	var arr = str.split("_");
	var zipNo = arr[0];
	var addr = arr[1];
	var addrDetail = arr[2];
	
	$("#<%=zipNo%>", opener.document).val(zipNo);
	$("#<%=addr%>", opener.document).val(addr);
	$("#<%=addrDetail%>", opener.document).val(addrDetail);
	$("#<%=addrDetail%>", opener.document).focus();
	
	window.close();
}



function move_cursor() 
{ 
    var pos = 1; 
    <%-- var obj = $("#<%=str_addr2%>", opener.document); //document.getElementById("text"); --%>
    var obj = $("#<%=addrDetail%>", opener.document); //document.getElementById("text");
    if (obj.setSelectionRange ) { 
        obj.focus(); 
        obj.setSelectionRange(pos,pos); 
    } else if ( obj.createTextRange ) { 
        var c = obj.createTextRange(); 
        c.move("character",pos); 
        c.select(); 
    } 
} 



</script>

</head>

<body style="overflow:hidden;"  onload = "init();return false;">

<div id="main_header">
	<span style="float:left; font-family:굴림; font-size:12px; font-weight:bold;">우편번호 검색</span>
</div>


<!-- 도로명주소 -->
<div class="content">

	<div class="viewDiv" >
	<form name="searchform" method="post">
		<input type="hidden" name="pageNum" id="pageNum" value="0" >
		<ul id="searchType">
				<li><label><input type="radio" class="rdo" name="searchOpt" onclick="checkOpt(this.value);" value="roadName"   />&nbsp;&nbsp;도로명주소&nbsp;+&nbsp;건물번호</label></li>
				<li><label><input type="radio" class="rdo" name="searchOpt" onclick="checkOpt(this.value);" value="dongName"  />&nbsp;&nbsp;동(읍/면)+지번</label></li>
				<li><label><input type="radio" class="rdo" name="searchOpt" onclick="checkOpt(this.value);" value="bldName"    />&nbsp;&nbsp;건물명 (아파트명)</label></li>
		</ul>
		
		<div id="chkRoad" style="display:done;">
		<p class="p1">검색방법 : 도로명 또는 도로명 + 건물번호를 입력 후 검색하세요.</p>
		<p class="p2">예) 도로명: 버드나루로&nbsp;&nbsp;/&nbsp;&nbsp;도로명+건물번호 : 버드나루로 135</p>
		</div>
		<div id="chkDong"  style="display:none;">
		<p class="p1">검색방법 : 동(읍/면)&nbsp;&nbsp;또는&nbsp;&nbsp;동(읍/면)&nbsp;&nbsp;+&nbsp;&nbsp;지번 입력</p>
		<p class="p2">예)  당산동 / 당산동 121-59</p>
		</div>
		<div id="chkBld"  style="display:none;">
		<p class="p1">검색방법 : 건물명 입력</p>
		<p class="p2">예) 서울시 당산빌딩 : 서울 선택 후 당산빌딩(건물명) 입력 후 검색</p>
		</div>

		<p class="p2"><br/>* 도로명주소가 검색되지 않는 경우는 행정안전부 새주소안내시스템
		<a href="http://www.juso.go.kr" target="_new">(http://www.juso.go.kr)</a> 에서 확인 바랍니다.<br/>
		* <a href="http://www.juso.go.kr/street/about03.htm" target="_new"> 주소 표기 방법 보기</a><br/>
		* 개략적인 단어는 많은 검색결과로 인하여 시간이 오래 걸릴수 있습니다. 가능한 정확한 검색어를 입력하세요.
		</p>
		

		<div class="search_gray2">
			<span style="color:#B7B7B7;">·</span>&nbsp;<span style="font-weight:bold; color:#444444; font-size:11px; margin-right:18px;">시도</span>
			<select name="SIDO" style="width:170px; border:1px solid dimgray;  display:inline-block; padding:2px 5px; " id="sido">
				<option value="강원도" >강원도</option>
				<option value="경기도" >경기도</option>
				<option value="경상남도" >경상남도</option>
				<option value="경상북도" >경상북도</option>
				<option value="광주광역시" >광주광역시</option>
				<option value="대구광역시" >대구광역시</option>
				<option value="대전광역시" >대전광역시</option>
				<option value="부산광역시" >부산광역시</option>
				<option value="서울특별시" >서울특별시</option>
				<option value="세종특별자치시" >세종특별자치시</option>
				<option value="울산광역시" >울산광역시</option>
				<option value="인천광역시" >인천광역시</option>
				<option value="전라남도" >전라남도</option>
				<option value="전라북도" >전라북도</option>
				<option value="제주특별자치도" >제주특별자치도</option>
				<option value="충청남도" >충청남도</option>
				<option value="충청북도" >충청북도</option>
			</select>
			
			<BR>

			<span style="color:#B7B7B7; display:inline-block;margin-top:12px;">·</span>&nbsp;<span style="font-weight:bold; color:#444444; font-size:11px; margin-right:6px;">검색어</span>
			<input type="text" id="searchTxt" name="searchTxt" style="width:220px; height:21px; display:inline-block;border:1px solid dimgray;  padding:2px 5px; margin-right:5px; color:#666666;vertical-align:middle;margin-top:-1px;ime-mode:active;" value="<%=searchTxt%>"  /><span style="margin:0 0px 0 0px;">
			<img src="//post.newzensolution.kr/images/btn_search.gif" alt="검색" id="search_R" style="vertical-align:middle; cursor:pointer;" onclick="goSearch();"/>
		</div>
		</form>
	</div>
	<div class="viewDiv2"></div>

</div>

<!-- mask -->
<div id="mask" style="position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;"></div> 

<!-- 로딩 이미지 -->
<div id="viewLoading" style="position:absolute; left:50%; top:40%; display:none; z-index:10000;">
	<img src="//post.newzensolution.kr/images/loadinfo3.gif" />
</div>

<p style="width:640px;text-align:center; margin-top:13px;">
<img src="//post.newzensolution.kr/images/처음으로.png" style=" margin-right:0px;cursor:pointer;" onclick="location.href='searchAddress?zipNo=zipNo&addr=addr&addrDetail=addrDtl';"/>
<img src='//post.newzensolution.kr/images/창닫기.png' style='margin-right:20px;cursor:pointer;' onclick='popClose();'/>
</p>


</body>
</html>
