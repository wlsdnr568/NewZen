<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script type="text/javascript">
        $(document).ready(function() {
            $(".tab_content").hide();
            $("ul.tabs li:first").addClass("active").show();
            $(".tab_content:first").show();


            $("ul.tabs li").click(function() {
                $("ul.tabs li").removeClass("active");
                $(this).addClass("active");
                $(".tab_content").hide();
                var activeTab = $(this).find("a").attr("href");
                $(activeTab).fadeIn();
                return false;
            });
            
        });
</script>
<style>
ul.tabs {
	margin: 0;
	padding-top: 5px;
	padding-left: 18px;
	float: left;
	list-style: none;
	height: 26px;
	width: 100%;
}

ul.tabs li {
	float: left;
	margin: 0;
	width: 125px;
	height: 23px;
	line-height: 25px;
	border-left: 1px solid #8099b1;
	border-right: 1px solid #8099b1;
	border-top: 1px solid #8099b1;
	margin-left: 1px;
	background: #ffffff;
	overflow: hidden;
	position: relative;
}

ul.tabs li a {
	text-decoration: underline;
	color: #626b71;
	display: block;
	font-size: 12px;
	padding-left: 19px;
	cursor: pointer;
}

ul.tabs li a:hover {
	color: #000000;
}

ul.tabs li.active, ul.tabs li.active a:hover {
	color: #000000;
}

.tab_container {
	clear: both;
	float: left;
	width: 100%;
	background: #ffffff;
}

a {
	color: #7d7d7d;
	cursor: pointer;
}

a:hover {
	color: #000000;
	text-decoration: underline;
}

#tabmenu {
	width: 982px;
	height: 29px;
	background-color: #d1e5fa;
}

#tab_chit {
	width: 900px;
	height: 296px;
	margin-left: 20px;
	margin-top: 4px;
	position: relative;
	display: inline;
	float: left;
}

#tab_line {
	width: 3px;
	height: 296px;
	float: left;
}

#tab_line_a {
	width: 3px;
	height: 296px;
	float: left;
	padding-left: 240px;
}

.tab_title {
	width: 90px;
	font-family: 굴림;
	font-size: 12px;
	color: #2f7bc9;
	font-weight: bold;
	padding: 5px 0px 0px 15px;
}

.tab_map {
	width: 300px;
	padding-left: 3px;
	padding: 10px 0px 0px 15px;
	cursor: pointer;
}

.tab_pay {
	width: 100px;
	padding: 6px 0px 0px 15px;
}

.tab_task {
	width: 150px;
	padding: 6px 0px 0px 15px;
}

#tab_line_b {
	width: 3px;
	height: 296px;
	float: left;
	padding-left: 260px;
}

#tab_line_c {
	width: 3px;
	height: 296px;
	float: left;
	padding-left: 250px;
}

#tab_etc {
	width: 900px;
	height: 296px;
	margin-left: 20px;
	margin-top: 30px;
	position: relative;
	display: inline;
	float: left;
}

#tab_laine_a {
	width: 3px;
	height: 296px;
	float: left;
}

.tab_revenue {
	width: 170px;
	padding: 6px 0px 0px 15px;
}

.tab_send {
	width: 200px;
	padding: 6px 0px 0px 15px;
}

#tab_line_d {
	width: 3px;
	height: 296px;
	float: left;
	padding-left: 240px;
}

.tab_fix {
	width: 130px;
	font-family: 굴림;
	font-size: 12px;
	color: #2f7bc9;
	padding: 10px 0px 0px 15px;
}

.btn_finance {
	width: 130px;
	font-family: 굴림;
	font-size: 12px;
	color: #2f7bc9;
	font-weight: bold;
	padding: 5px 0px 0px 15px;
}
</style>
<div id="tabmenu">
	<ul class="tabs" style="padding-top: 0px; margin-left: 20px;">
		<li><a href="#tab1" onclick="return false;"><font style="padding-left: 20px;">재무회계</font></a></li>
		<li><a href="#tab2" onclick="return false;"><font style="margin-left: -3px;">자금/예산/현장등</font></a></li>
		<li><a href="#tab3" onclick="return false;">연동/데이터관리</a></li>
	</ul>
	<div class="tab_container">
		<div id="tab1" class="tab_content">

			<!--전표입력-->
			<div id="tab_chit">
				<div id="tab_line">
					<img src="<c:url value="/resources/img1/menu_line.png" />" width="3" height="296" alt="" />
				</div>
				<div style="width: 85px;">
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="tab_title">전표입력</li>
						<li class="tab_map"><a href="/practice/ACC00000" onclick="return false;">일반전표입력</a></li>
						<li class="tab_pay"><a href="#" onclick="return false;">매입매출전표입력</a></li>
						<li class="tab_pay"><a href="#" onclick="return false;">시산표입력</a></li>
						<li class="tab_pay"><a href="#" onclick="return false;">전표출력</a></li>
						<li class="tab_task"><a href="#" onclick="return false;">업무용승용차운행기록부</a></li>
					</ul>
				</div>
				<!--전표입력-->

				<!--장부관리1-->
				<div id="tab_"
					style="width: 3px; height: 296px; float: left; padding-left: 240px;">
					<img src="<c:url value="/resources/img1/menu_line.png" />" width="3" height="296" alt="" />
				</div>
				<div style="width: 85px;">
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li style="width: 90px; font-family: 굴림; font-size: 12px; color: #2f7bc9; font-weight: bold; padding: 5px 0px 0px 15px;">장부관리</li>
						<li style="width: 300px; padding-left: 3px; padding: 10px 0px 0px 15px;"><a href="#" onclick="return false;">거래처원장</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">거래처별계정과목별원장</a></li>
						<li style="width: 100px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">계정별원장</a></li>
						<li style="width: 100px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">현금출납장</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">일계표(월계표)</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">분개장</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">총계정원장</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">적요별원장</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">업무용승용차비용현황</a></li>
					</ul>
				</div>
				<!--장부관리1-->

				<!--장부관리2-->
				<div style="width: 3px; height: 296px; float: left; padding-left: 260px;">
					<img src="<c:url value="/resources/img1/menu_line.png" />" width="3" height="296" alt="" />
				</div>
				<div style="width: 85px;">
					<ul
						style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li
							style="width: 90px; font-family: 굴림; font-size: 12px; color: #2f7bc9; font-weight: bold; padding: 5px 0px 0px 15px;">장부관리 II</li>
						<li style="width: 300px; padding-left: 3px; padding: 10px 0px 0px 15px;"><a href="#" onclick="return false;">매입매출장</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">거래처별매입매출장</a></li>
						<li style="width: 100px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">채권연령분석</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">세금계산서(계산서)현황</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">세금계산서합계표(관리용)</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">영수증수취명세서</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">경비등의송금명세서</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">계정별증빙현황</a></li>
					</ul>
				</div>
				<!--장부관리2-->

				<!--결산관리-->
				<div style="width: 3px; height: 296px; float: left; padding-left: 250px;">
					<img src="<c:url value="/resources/img1/menu_line.png" />" width="3" height="296" alt="" />
				</div>
				<div style="width: 85px;">
					<ul
						style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li style="width: 90px; font-family: 굴림; font-size: 12px; color: #2f7bc9; font-weight: bold; padding: 5px 0px 0px 15px;">결산관리II</li>
						<li style="width: 300px; padding-left: 3px; padding: 10px 0px 0px 15px;"><a href="#" onclick="return false;">결산자료입력</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">현금예금조정</a></li>
						<li style="width: 100px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">합계잔액시산표</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">재무상태표</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">손익계산서</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">제조원가명세서</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">이익잉여금처분계산서</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">현금흐름표</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">자본변동표</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">결산부속명세</a></li>
					</ul>
				</div>
				<!--결산관리-->

			</div>
			<!--전표입력-->

			<!--기타전표입력-->
			<div style="width: 900px; height: 296px; margin-left: 20px; margin-top: 30px; position: relative; display: inline; float: left;">
				<div style="width: 3px; height: 296px; float: left;">
					<img src="<c:url value="/resources/img1/menu_line.png" />" width="3" height="296" alt="" />
				</div>
				<div style="width: 85px;">
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li style="width: 90px; font-family: 굴림; font-size: 12px; color: #2f7bc9; font-weight: bold; padding: 5px 0px 0px 15px;">기타전표입력</li>
						<li style="width: 300px; padding-left: 3px; padding: 10px 0px 0px 15px;"><a href="#" onclick="return false;">빠른전표입력</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">국세청전자(세금)계산서</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">엑셀자료일반전표전송</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">신용카드매입매출전표전송</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">기타매입매출전표전송</a></li>
						<li style="width: 200px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">물류(영업,구매)매입매출전표전송</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">물류(수금,지급)일반전표전송</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">통장거래자동입력</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">국세청사업용(복지)신용카드</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">현금영수증자동분개</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">매입신용카드</a></li>
					</ul>
				</div>
				<!--기타전표입력-->

				<!--고정자산및감가상각-->
				<div style="width: 3px; height: 296px; float: left; padding-left: 240px;">
					<img src="<c:url value="/resources/img1/menu_line.png" />" width="3" height="296" alt="" />
				</div>
				<div style="width: 85px;">
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li style="width: 130px; font-family: 굴림; font-size: 12px; color: #2f7bc9; font-weight: bold; padding: 5px 0px 0px 15px;">고정자산및감가상각</li>
						<li style="width: 300px; padding-left: 3px; padding: 10px 0px 0px 15px;"><a href="#" onclick="return false;">고정자산등록</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">월별감가상각비계상</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">미상각분감가상각비</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">양도자산감가상각비</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">고정자산관리대장</a></li>
					</ul>
				</div>
				<!--고정자산및감가상각-->

				<!--전기분재무제표-->
				<div style="width: 3px; height: 296px; float: left; padding-left: 260px;">
					<img src="<c:url value="/resources/img/menu_line.png" />" width="3" height="296" alt="" />
				</div>
				<div style="width: 85px;">
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li style="width: 130px; font-family: 굴림; font-size: 12px; color: #2f7bc9; font-weight: bold; padding: 5px 0px 0px 15px;">전기분재무제표</li>
						<li style="width: 300px; padding-left: 3px; padding: 10px 0px 0px 15px;"><a href="#" onclick="return false;">전기분재무상태표</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">전기분손익계산서</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">전기분원가명세서</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">전기분잉여금처분계산서</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">거래처별초기이월</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">전기분현금흐름표</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">전기분자본변동표</a></li>
					</ul>
				</div>
				<!--전기분재무제표-->

				<!--기초정보관리-->
				<div style="width: 3px; height: 296px; float: left; padding-left: 250px;">
					<img src="<c:url value="/resources/img1/menu_line.png" />" width="3" height="296" alt="" />
				</div>
				<div style="width: 85px;">
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li style="width: 90px; font-family: 굴림; font-size: 12px; color: #2f7bc9; font-weight: bold; padding: 5px 0px 0px 15px;">기초정보관리</li>
						<li style="width: 300px; padding-left: 3px; padding: 10px 0px 0px 15px;"><a href="#" onclick="return false;">회사등록</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="/common/ACC02030">거래처등록</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">영수증거래처등록</a></li>
						<li style="width: 170px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">계정과목및적요등록</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">부서사원등록</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">현장등록</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">프로젝트등록</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">환경등록</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">권한설정</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">개인정보보호설정</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">업무용승용차등록</a></li>
						<li style="width: 150px; padding: 6px 0px 0px 15px;"><a href="#" onclick="return false;">주주명부</a></li>
					</ul>
				</div>
				<!--기초정보관리-->
			</div>
		</div>
		<!--자금/예산/현장등-->
		<div id="tab2" class="tab_content">자금/예산/현장등 입니다.</div>
		<!--자금/예산/현장등-->

		<!--연동/데이터관리-->
		<div id="tab3" class="tab_content">연동데이터관리 입니다.</div>
		<!--연동/데이터관리-->
	</div>
</div>