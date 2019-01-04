/**
 * jquery ui calendar 함수 설정
 */

jQuery(function($){
    $.datepicker.regional['ko'] = {
    closeText: '닫기'
 ,  prevText: '이전달'
 ,  nextText: '다음달'
 ,  currentText: '오늘'
 ,  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] 
 ,  dayNamesShort: ['일','월','화','수','목','금','토'] 
 ,  dayNamesMin: ['일','월','화','수','목','금','토'] 
 ,  dateFormat: 'yy-mm-dd' //날짜 표현형식(2012-03-03)
 ,  weekHeader: 'Wk', 
        autoSize: true, //오토리사이즈(body등 상위태그의 설정에 따른다)
        changeMonth: true, //월변경가능
        changeYear: true, //년변경가능
        showMonthAfterYear: true, //년 뒤에 월 표시
        buttonImageOnly: false, //이미지로만 표시
        buttonText: '달력선택', //버튼 텍스트 표시
        buttonImage: "/kclepEn/resources/img/btn_msg.png", //이미지주소
        buttonImageOnly: true,
        showOn: "both" //엘리먼트와 이미지 동시 사용(both or button)
        //yearRange: '2010:2020' //년도 선택 제한 2000년부터 2020년까지

 };
 $.datepicker.setDefaults($.datepicker.regional['ko']);
 $("img.ui-datepicker-trigger").attr("style","margin-left:15px; vertical-align:middle; cursor:pointer;"); //이미지버튼 style적용
 $("#ui-datepicker-div").hide(); //자동으로 생성되는 div객체 숨김  
});