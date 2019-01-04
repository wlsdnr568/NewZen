<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="<c:url value="/resources/css1/menu_list_acc_01.css"/>">	
<!-- 
	180718_kmh
	회계 메뉴 리스트 페이지
-->

<script>
	$(document).ready(function() {
	    $(".tab_text").hide();
	    $("ul.tab_time li:first").addClass("active").show();
	    $(".tab_text:first").show();
	
	
	    $("ul.tab_time li").click(function() {
	        $("ul.tab_time li").removeClass("active");
	        $(this).addClass("active");
	        $(".tab_text").hide();
	        var activeTab = $(this).find("a").attr("href");
	        $(activeTab).fadeIn();
	        return false;
	    });
	    
	 	// 회사등록
		$("#acc02010").on("click", function(e){
			e.preventDefault();
			//alert("hi");
			addTab("회사등록", $(this));
		});
	 	
	 	// 거래처등록
	 	$("#acc02030").on("click", function(e){
	 		e.preventDefault();
	 		//alert("test");
	 		addTab("거래처등록", $(this));
			//addTab("거래처등록", getContextPath() + "/acc02030");
	 	});
	 	
	 	// 일반전표입력
	 	$("#acc00000").on("click", function(e){
	 		e.preventDefault();
	 		//alert("test");
	 		addTab("일반전표입력", $(this));
			//addTab("거래처등록", getContextPath() + "/acc02030");
	 	});
	});
</script>

<div id="mapTab">
	<ul class="tab_time" style="padding-top: 4px; margin-left:-2px;">
		<li><a href="#tab4"><font style="padding-left: 20px;">재무회계</font></a></li>
		<li><a href="#tab5"><font style="margin-left: -3px;">자금/예산/현장등</font></a></li>
		<li><a href="#tab6">연동/데이터관리</a></li>
	</ul>

	<div class="tab_container">
		<div id="tab4" class="tab_text">
			<!--전표입력-->
			<div id="inchit">
				<div class="list_menu">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
				</div>
				<div>
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="com_title">전표입력</li>
						<li class="menu_normal">
							<a href="#" id="acc00000">일반전표입력</a>
						</li>
						<li class="menu_purchase">
							<a href="#">매입매출전표입력</a>
						</li>
						<li class="menu_purchase">
							<a href="#">시산표입력</a>
						</li>
						<li class="menu_purchase">
							<a href="#">전표출력</a>
						</li>
						<li class="menu_task">
							<a href="#">업무용승용차운행기록부</a>
						</li>
					</ul>
				</div>
				<!--전표입력-->

				<!--장부관리1-->
				<div id="cogchit">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
				</div>
				<div>
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="com_title">
							장부관리 |
						</li>
						<li class="menu_normal">
							<a href="#">거래처원장</a>
						</li>
						<li class="menu_task">
							<a href="#">거래처별계정과목별원장</a>
						</li>
						<li class="menu_purchase">
							<a href="#">계정별원장</a>
						</li>
						<li class="menu_purchase">
							<a href="#">현금출납장</a>
						</li>
						<li class="menu_task">
							<a href="#">일계표(월계표)</a>
						</li>
						<li class="menu_task">
							<a href="#">분개장</a>
						</li>
						<li class="menu_task">
							<a href="#">총계정원장</a>
						</li>
						<li class="menu_task">
							<a href="#">적요별원장</a>
						</li>
						<li class="menu_task">
							<a href="#">업무용승용차비용현황</a>
						</li>
					</ul>
				</div>
				<!--장부관리1-->

				<!--장부관리2-->
				<div id="cogchit">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
				</div>
				<div>
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="com_title">
							장부관리 ||
						</li>
						<li class="menu_normal">
							<a href="#">매입매출장</a>
						</li>
						<li class="menu_task">
							<a href="#">거래처별매입매출장</a>
						</li>
						<li class="menu_purchase">
							<a href="#">채권연령분석</a>
						</li>
						<li class="menu_task">
							<a href="#">세금계산서(계산서)현황</a>
						</li>
						<li class="menu_task">
							<a href="#">세금계산서합계표(관리용)</a>
						</li>
						<li class="menu_task">
							<a href="#">영수증수취명세서</a>
						</li>
						<li class="menu_task">
							<a href="#">경비등의송금명세서</a>
						</li>
						<li class="menu_task">
							<a href="#">계정별증빙현황</a>
						</li>
					</ul>
				</div>
				<!--장부관리2-->

				<!--결산관리-->
				<div id="comsettlement">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
				</div>
				<div>
					<ul style="margin: 0; padding: 0; position: absolute; display:inline;">
						<li class="com_title">
							결산관리 ||
						</li>
						<li class="menu_normal">
							<a href="#">결산자료입력</a>
						</li>
						<li class="menu_task">
							<a href="#">현금예금조정</a>
						</li>
						<li class="menu_purchase">
							<a href="#">합계잔액시산표</a>
						</li>
						<li class="menu_task">
							<a href="#">재무상태표</a>
						</li>
						<li class="menu_task">
							<a href="#">손익계산서</a>
						</li>
						<li class="menu_task">
							<a href="#">제조원가명세서</a>
						</li>
						<li class="menu_task">
							<a href="#">이익잉여금처분계산서</a>
						</li>
						<li class="menu_task">
							<a href="#">현금흐름표</a>
						</li>
						<li class="menu_task">
							<a href="#">자본변동표</a>
						</li>
						<li class="menu_task">
							<a	href="#">결산부속명세</a>
						</li>
					</ul>
				</div>
				<!--결산관리-->

			</div>
			<!--전표입력-->

			<!--기타전표입력-->
			<div id="tbletc">
				<div class="list_menu">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
				</div>
				<div>
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="bot_tlt">
							기타전표입력
						</li>
						<li class="menu_normal">
							<a href="#">빠른전표입력</a>
						</li>
						<li class="menu_tax">
							<a href="#">국세청전자(세금)계산서</a>
						</li>
						<li class="menu_tax">
							<a href="#">엑셀자료일반전표전송</a>
						</li>
						<li class="menu_tax">
							<a href="#">신용카드매입매출전표전송</a>
						</li>
						<li class="menu_task">
							<a href="#">기타매입매출전표전송</a>
						</li>
						<li class="menu_product">
							<a href="#">물류(영업,구매)매입매출전표전송</a>
						</li>
						<li class="menu_tax">
							<a href="#">물류(수금,지급)일반전표전송</a>
						</li>
						<li class="menu_task">
							<a href="#">통장거래자동입력</a>
						</li>
						<li class="menu_tax">
							<a href="#">국세청사업용(복지)신용카드</a>
						</li>
						<li class="menu_task">
							<a href="#">현금영수증자동분개</a>
						</li>
						<li class="menu_task">
							<a href="#">매입신용카드</a>
						</li>
					</ul>
				</div>
				<!--기타전표입력-->

				<!--고정자산및감가상각-->
				<div id="cogchit">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
				</div>
				<div>
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="bot_amortization">
							고정자산및감가상각
						</li>
						<li class="menu_assets">
							<a href="#">고정자산등록</a>
						</li>
						<li class="menu_tax">
							<a href="#">월별감가상각비계상</a>
						</li>
						<li class="menu_tax">
							<a href="#">미상각분감가상각비</a>
						</li>
						<li class="menu_tax">
							<a href="#">양도자산감가상각비</a>
						</li>
						<li class="menu_task">
							<a href="#">고정자산관리대장</a>
						</li>
					</ul>
				</div>
				<!--고정자산및감가상각-->

				<!--전기분재무제표-->
				<div id="cogchit">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
				</div>
				<div>
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="bot_amortization">
							전기분재무제표
						</li>
						<li class="menu_assets">
							<a href="#">전기분재무상태표</a>
						</li>
						<li class="menu_tax">
							<a href="#">전기분손익계산서</a>
						</li>
						<li class="menu_tax">
							<a href="#">전기분원가명세서</a>
						</li>
						<li class="menu_tax">
							<a href="#">전기분잉여금처분계산서</a>
						</li>
						<li class="menu_task">
							<a href="#">거래처별초기이월</a>
						</li>
						<li class="menu_task">
							<a href="#">전기분현금흐름표</a>
						</li>
						<li class="menu_task">
							<a href="#">전기분자본변동표</a>
						</li>
					</ul>
				</div>
				<!--전기분재무제표-->

				<!--기초정보관리-->
				<div id="comsettlement">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
				</div>
				<div>
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="bot_tlt">
							기초정보관리
						</li>
						<li class="menu_assets">
							<a href="#" id="acc02010" rel="acc02010">회사등록</a>
						</li>
						<li class="menu_tax">
							<a href="#" id="acc02030" rel="acc02030">거래처등록</a>
						</li>
						<li class="menu_tax">
							<a href="#">영수증거래처등록</a>
						</li>
						<li class="menu_tax">
							<a href="#">계정과목및적요등록</a>
						</li>
						<li class="menu_task">
							<a href="#">부서사원등록</a>
						</li>
						<li class="menu_task">
							<a href="#">현장등록</a>
						</li>
						<li class="menu_task">
							<a href="#">프로젝트등록</a>
						</li>
						<li class="menu_task">
							<a href="#">환경등록</a>
						</li>
						<li class="menu_task">
							<a href="#">권한설정</a>
						</li>
						<li class="menu_task">
							<a href="#">개인정보보호설정</a>
						</li>
						<li class="menu_task">
							<a href="#">업무용승용차등록</a>
						</li>
						<li class="menu_task">
							<a href="#">주주명부</a>
						</li>
					</ul>
				</div>
				<!--기초정보관리-->
			</div>
		</div>

		<!--자금/예산/현장등-->
		<div id="tab5" class="tab_text">
		   	<div id="list_funds">
			  	<div class="list_menu">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
			  	</div>
			  	<!--현장관리-->
			  	<div>
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="bot_tlt">현장관리</li>
						<li class="menu_leader">
							<a href="#">공사대장</a>
						</li>
						<li class="menu_purchase">
							<a href="#">전도금원장</a>
						</li>
						<li class="menu_purchase">
							<a href="#">현장별원가보고서</a>
						</li>
						<li class="menu_purchase">
							<a href="#">부문별원가명세서</a>
						</li>
						<li class="menu_project">
							<a href="#">부문별(현장프로젝트)원가안분및</a>
						</li>
						<li class="menu_purchase">
							<a href="#">현장별원가집계표</a>
						</li>
						<li class="menu_purchase">
							<a href="#">현장별원장</a>
						</li>
						<li class="menu_purchase">
							<a href="#">현장별거래처원장</a>
						</li>
						<li class="menu_purchase">
							<a href="#">현장매입매출장</a>
						</li>
						<li class="menu_purchase">
							<a href="#">부문별손익현황</a>
						</li>
						<li class="menu_purchase">
							<a href="#">부문별원가현황</a>
						</li>
						<li class="menu_purchase">
							<a href="#">총괄원가손익관리</a>
						</li>
					</ul>
			 	</div>
				<!--현장관리-->
				
				<!--프로젝트관리-->
				<div id="projectTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="bot_tlt">
								프로젝트관리
							</li>
							<li class="menu_won">
								<a href="#">프로젝트별계정별원장</a>
							</li>
							<li class="menu_project">
								<a href="#">프로젝트별계정과목별원장</a>
							</li>
							<li class="menu_product">
								<a href="#">프로젝트별거래처원장</a>
							</li>
							<li class="menu_project">
								<a href="#">프로젝트별매입매출장</a>
							</li>
							<li class="menu_task">
								<a href="#">프로젝트별누적손익현황</a>
							</li>
							<li class="menu_task">
								<a href="#">프로젝트별누적원가현황</a>
							</li>
							<li class="menu_project">
								<a href="#">부문별(현장프로젝트)원가안분및</a>
							</li>
							<li class="menu_task">
								<a href="#">부문별손익현황</a>
							</li>
							<li class="menu_task">
								<a href="#">부문별원가현황</a>
							</li>
						</ul>
					</div>
				</div>
				<!--프로젝트관리-->
				
				<!--자금관리-->
				<div id="statusTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="bot_tlt">
								자금관리
							</li>
							<li class="menu_assets">
								<a href="#">받을어음현황</a>
							</li>
							<li class="menu_task">
								<a href="#">지급어음현황</a>
							</li>
							<li class="menu_purchase">
								<a href="#">차입금현황</a>
							</li>
							<li class="menu_task">
								<a href="#">일일자금명세(경리일보)</a>
							</li>
							<li class="menu_task">
								<a href="#">자금계획입력</a>
							</li>
							<li class="menu_task">
								<a href="#">자금계획서</a>
							</li>
							<li class="menu_task">
								<a href="#">자금현황</a>
							</li>
							<li class="menu_task">
								<a href="#">예적금현황</a>
							</li>
							<li class="menu_task">
								<a href="#">당좌수표현황</a>
							</li>
						</ul>
					</div>
				</div>
				<!--자금관리-->
				
				<!--예산관리-->
				<div id="budgetTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="com_title">
								예산관리
							</li>
							<li class="menu_assets">
								<a href="#">예산입력</a>
							</li>
							<li class="menu_task">
								<a href="#">전기실행예산입력</a>
							</li>
							<li class="menu_project">
								<a href="#">당기예산월별실적대비현황</a>
							</li>
							<li class="menu_project">
								<a href="#">전기예산월별실적대비현황</a>
							</li>						
						 </ul>
					  </div>
				</div>
				<!--예산관리-->
				
				<!--기간별손익/원가-->			 
				<div id="wonTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="menu_term">
								기간별손익/원가
							</li>
							<li class="menu_won">
								<a href="#">기간별손익계산서</a>
							</li>
							<li class="menu_tax">
								<a href="#">기간별원가명세서</a>
							</li>
							<li class="menu_tax">
								<a href="#">전기기간별손익계산서</a>
							</li>
							<li class="menu_tax">
								<a href="#">전기기간별원가명세서</a>
							</li>						
						 </ul>
					  </div>
				</div>
				<!--기간별손익/원가-->
				
				<!--외화관리-->			 
				<div id="foreignTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="bot_amortization">
								외화관리
							</li>
							<li class="menu_won">
								<a href="#">외화환율등록</a>
							</li>
							<li class="menu_tax">
								<a href="#">외화초기이월</a>
							</li>
							<li class="menu_tax">
								<a href="#">외화거래처별초기이월</a>
							</li>
							<li class="menu_tax">
								<a href="#">외화거래처원장</a>
							</li>
							<li class="menu_task">
								<a href="#">외화계정별원장</a>
							</li>
							<li class="menu_task">
								<a href="#">외화예적금현황</a>
							</li>
						</ul>
					  </div>
				</div>
				<!--외화관리-->
				
								
				<!--경영분석/기타-->			 
				<div id="operationTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
					   <ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="bot_amortization">
								경영분석/기타
							</li>
							<li class="menu_won">
								<a href="#">안정성분석</a>
							</li>
							<li class="menu_revenue">
								<a href="#">수익성분석</a>
							</li>
							<li class="menu_tax">
								<a href="#">활동성분석</a>
							</li>
							<li class="menu_tax">
								<a href="#">세무리포트</a>
							</li>					
						</ul>
					 </div>
				</div>
				<!--경영분석/기타-->
				
				<!--관리항목별초기이월-->
				<div id="earlyTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
					   <ul style="margin: 0; padding: 0; position: absolute; display: inline;">
					   		<li class="menu_term">
								관리항목별초기이월
							</li>
							<li class="menu_won">
								<a href="#">현장별초기이월</a>
							</li>
							<li class="menu_tax">
								<a href="#">미완성공사초기이월</a>
							</li>
							<li class="menu_tax">
								<a href="#">부서사원별초기이월</a>
							</li>
							<li class="menu_tax">
								<a href="#">프로젝트별초기이월</a>
							</li>
							<li class="menu_project">
								<a href="#">전기분프로젝트별손익현황</a>
							</li>
							<li class="menu_project">
								<a href="#">전기분프로젝트별원가현황</a>
							</li>					
						</ul>
					 </div>
				</div>
				<!--관리항목별초기이월-->
		  	</div>
		</div>
		<!--자금/예산/현장등-->
		
		<!--연동/데이터관리 -->
		<div id="tab6" class="tab_text">
			<div id="list_funds">
				<div class="list_menu">
					<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
			  	</div>
			  	<!--세무포털-->
			  	<div>
					<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
						<li class="bot_tlt" style="width: 90px; font-family: 굴림; font-size: 12px; color: #2f7bc9; font-weight: bold; padding: 5px 0px 0px 8px;">세무포털</li>
						<li class="menu_best">
							<a href="#">전자세금계산서수취(베스트빌)</a>
						</li>
						<li class="menu_project">
							<a href="#">전자세금계산서발행</a>
						</li>
						<li class="menu_project">
							<a href="#">베스트CMS수취</a>
						</li>
						<li class="menu_project">
							<a href="#">[구]신용카드데이터수취</a>
						</li>						
					</ul>
			 	</div>
				<!--세무포털-->
				
				<!--금융지원자료전송-->
				<div id="financeTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="menu_term">
								금융지원자료전송
							</li>
							<li class="menu_won">
								<a href="#">재무제표전송자료생성</a>
							</li>
							<li class="menu_value">
								<a href="#">부가가치세전송자료생성</a>
							</li>
							<li class="menu_product">
								<a href="#">메타게이트자료건별전송</a>
							</li>
							<li class="menu_value">
								<a href="#">메타게이트자료일괄전송</a>
							</li>							
						</ul>
					</div>
				</div>
				<!--금융지원자료전송-->
				
				<!--계좌및신용카드관리-->
				<div id="cardTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="bot_amortization" style="width: 130px; font-family: 굴림; font-size: 12px; color: #2f7bc9; font-weight: bold; padding: 5px 0px 0px 8px;">
								계좌및신용카드관리
							</li>
							<li class="menu_won">
								<a href="#">사업용계좌신고서</a>
							</li>
							<li class="menu_task">
								<a href="#">전계좌잔액조회</a>
							</li>
							<li class="menu_purchase">
								<a href="#">거래내역</a>
							</li>
							<li class="menu_task">
								<a href="#">이체</a>
							</li>
							<li class="menu_task">
								<a href="#">이체결과조회</a>
							</li>
							<li class="menu_task">
								<a href="#">청구서조회</a>
							</li>
							<li class="menu_task">
								<a href="#">승인내역조회</a>
							</li>
							<li class="menu_task">
								<a href="#">사용한도조회</a>
							</li>
							<li class="menu_task">
								<a href="#">계좌등록</a>
							</li>
							<li class="menu_task">
								<a href="#">카드등록</a>
							</li>
						</ul>
					</div>
				</div>
				<!--계좌및신용카드관리-->
				
				<!--원클릭텍스(OCT)-->
				<div id="octTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="menu_term">
								원클릭텍스(OCT)
							</li>
							<li class="menu_won">
								<a href="#">스크랩핑회사설정</a>
							</li>
							<li class="menu_task">
								<a href="#">스크랩핑내역조회</a>
							</li>
							<li class="menu_value">
								<a href="#">전표미처리현황</a>
							</li>
							<li class="menu_value">
								<a href="#">전표대사현황</a>
							</li>
							<li class="menu_value">
								<a href="#">국세청전자(세금)계산서</a>
							</li>
							<li class="menu_value">
								<a href="#">사업용(화물복지)신용카드</a>
							</li>
							<li class="menu_value">
								<a href="#">현금영수증</a>
							</li>
							<li class="menu_value">
								<a href="#">카드매출(기간별매입내역)</a>
							</li>
							<li class="menu_value">
								<a href="#">카드매출(실적조회)</a>
							</li>
							<li class="menu_value">
								<a href="#">통장거래</a>
							</li>
							<li class="menu_value">
								<a href="#">매입신용카드</a>
							</li>						
						 </ul>
					  </div>
				</div>
				<!--원클릭텍스(OCT)-->
				
				<!--금융연동관리(IBK)-->			 
				<div id="ibkTab">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="menu_perist">
								금융연동관리(IBK)
							</li>
							<li class="menu_assets">
								<a href="#">계좌등록</a>
							</li>
							<li class="menu_tax">
								<a href="#">계좌거래내역조회</a>
							</li>
							<li class="menu_tax">
								<a href="#">입출금거래전표발행</a>
							</li>
							<li class="menu_tax">
								<a href="#">카드등록</a>
							</li>
							<li class="menu_tax">
								<a href="#">카드승인내역전표발행</a>
							</li>
							<li class="menu_tax">
								<a href="#">카드청구조회및전표발행</a>
							</li>						
						 </ul>
					  </div>
				</div>
				<!--금융연동관리(IBK)-->
				
				<!--데이타관리-->			 
				<div id="dataTab" style="position:absolute; padding-top:311px; margin-left:238px;">
					<div class="list_menu">
						<img src="<c:url value="/resources/img1/menu_line.png"/>" width="3" height="296" alt="" />
					</div>
					<div>
						<ul style="margin: 0; padding: 0; position: absolute; display: inline;">
							<li class="bot_amortization">
								데이타관리
							</li>
							<li class="menu_won">
								<a href="#">데이타백업1</a>
							</li>
							<li class="menu_tax">
								<a href="#">데이타백업2</a>
							</li>
							<li class="menu_tax">
								<a href="#">회사코드변환</a>
							</li>
							<li class="menu_tax">
								<a href="#">회사기수변환</a>
							</li>
							<li class="menu_tax">
								<a href="#">기타코드변환</a>
							</li>
							<li class="menu_tax">
								<a href="#">일마감</a>
							</li>
							<li class="menu_tax">
								<a href="#">데이타체크</a>
							</li>
							<li class="menu_tax">
								<a href="#">거래처등록정리</a>
							</li>
							<li class="menu_tax">
								<a href="#">데이타통합</a>
							</li>
							<li class="menu_tax">
								<a href="#">데이타베이스암호화관리</a>
							</li>
							<li class="menu_tax">
								<a href="#">거래처코드정리</a>
							</li>
							<li class="menu_tax">
								<a href="#">마감후이월</a>
							</li>
						</ul>
					  </div>
				</div>
				<!--데이타관리-->				
		    </div>
		</div>
	</div>
	<!--연동/데이터관리-->

</div>
	