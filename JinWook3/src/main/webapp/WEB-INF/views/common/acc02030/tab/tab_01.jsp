<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<link rel="stylesheet" href="<c:url value="/resources/css/tab_01.css"/>">	
<div id="codeTbl">
	<!-- 그리드  -->
	<div id="cust_list" style="width: 100%; height:100%; "></div>
	<!-- 그리드  -->
            </div>

	<!-- form 설정(일반거래처 상세 등록) -->
	<form:form id="cust_info_form" modelAttribute="acc02030Form">
		<form:hidden id="cust_info_form_ACC02030Json" path="ACC02030Json" />
		<form:hidden id="cust_info_form_custCd"  path="acc02030.custCd"/>
		<form:hidden id="srchNo"  path="acc02030.srchNo" />
	
							
        <div class="general_account">
                   <table width="570" border="0" cellspacing="0" cellpadding="0">
                       <tbody>
                           <tr>
                               <td width="117" height="30" align="left">1.사업자등록번호</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="160" align="left"><form:input type="text" id="busnPersRegsNo" name="busnPersRegsNo" path="acc02030.busnPersRegsNo" tabindex="1" maxlength="12" class="box_business" /></td>
                                               <td style="padding-top: 3px;"><a href="" id="btn_business" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('image31','','<c:url value="/resources/img/btn_business_up.png"/>',1)"><img id="btn_business" src="<c:url value="/resources/img/btn_business.png"/>" name="image31" border="0"></a></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">2.주민등록번호</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="164" align="left"><form:input type="text" id="regsNo" name="regsNo" path="acc02030.regsNo" maxlength="14" tabindex="2" class="box_business"/></td>
                                               <td width="115" align="right" style="padding-right: 5px;">주 민 기 재 분</td>
                                               <td width="23">
                                                <form:select id="regsNoSec" name="regsNoSec" path="acc02030.regsNoSec" tabindex="3" cssStyle="width: 35px; height:23px;">
                                                	<form:option value=""></form:option>
                                                	<form:option value="0">부</form:option>
                                                	<form:option value="1">여</form:option>
                                                </form:select>
                                               </td>
                                               <td width="141" style="padding-left: 3px;">0:부 1:여</td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">3.대표자성명</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="164" align="left"><form:input type="text" id="repstvNm" name="repstvNm" path="acc02030.repstvNm" tabindex="4" class="box_business" /></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">4.업종</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="26">업태</td>
                                               <td width="122"><form:input type="text" id="bsnCdt" name="bsnCdt" path="acc02030.bsnCdt" tabindex="5" class="box_industry" /></td>
                                               <td align="right" style="padding-right: 5px;">종목</td>
                                               <td width="162" align="right"><form:input type="text" id="itm" name="itm" path="acc02030.itm" tabindex="6" class="box_event" /></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">5.주소</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="57"><form:input type="text" id="zipNo" name="zipNo" tabindex="7" path="acc02030.zipNo" class="box_adress" /></td>
                                               <td width="25" align="left">
                                               	<a href="" id="addrHelper">
                                               		<img id="btn_addr" src="<c:url value="/resources/img/btn_msg.png"/>" width="16" height="15" border="0" />
                                               	</a>
                                               </td>
                                               <td width="320" align="right"><form:input type="text" id="addr" name="addr" path="acc02030.addr" tabindex="8" class="box_long" cssStyle="width: 368px;" /></td>
                                           </tr>
                                           <tr>
                                           	<td colspan="3"><form:input type="text" id="addrDtl" name="addrDtl" path="acc02030.addrDtl" tabindex="9" class="box_long"  cssStyle="margin-top: 5px; width: 462px;" /></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">6.연락처</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="55">전화번호</td>
                                               <td width="35"><form:input type="text" id="tel1" name="tel1" path="acc02030.tel1" tabindex="10" class="box_tel" /></td>
                                               <td width="10" align="center">)</td>
                                               <td width="35"><form:input type="text" id="tel2" name="tel2" path="acc02030.tel2" tabindex="11" class="box_tel" /></td>
                                               <td width="15" align="center">-</td>
                                               <td width="35"><form:input type="text" id="tel3" name="tel3" path="acc02030.tel3" tabindex="12" class="box_tel" /></td>
                                               <td width="31"></td>
                                               <td width="55">팩스번호</td>
                                               <td width="35"><form:input type="text" id="fax1" name="fax1" path="acc02030.fax1" tabindex="13" class="box_tel" /></td>
                                               <td width="13" align="center">)</td>
                                               <td width="35"><form:input type="text" id="fax2" name="fax2" path="acc02030.fax2" tabindex="14" class="box_tel" /></td>
                                               <td width="10" align="center">-</td>
                                               <td width="35" align="right"><form:input type="text" id="fax3" name="fax3" path="acc02030.fax3" tabindex="15" class="box_tel" /></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">7.담당(부서)사원</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="30"><form:input type="text" id="compChrgEmpCd" name="compChrgEmpCd" path="acc02030.compChrgEmpCd" tabindex="16" class="box_tel" /></td>
                                               <td width="20" align="center" style="padding-left: 3px;">
                                               	<!-- <a href="#" id="layerAnchor"> -->
                                               	<a href="" id="compChrgEmpHelper">
                                               		<img id="btn_compChrgEmp" src="<c:url value="/resources/img/btn_msg.png"/>" width="16" height="15" border="0" />
                                               	</a>
                                               </td>
                                               <td width="130" style="padding-left: 10px;"><form:input type="text" id="compChrgEmpNm" name="compChrgEmpNm" path="acc02030.compChrgEmpNm" readonly="readonly"  class="box_key" cssStyle="background-color:#f1f8fe;" /></td>
                                               <td width="250"><!-- + 키 입력 시 신규 등록 가능 --></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">8.인쇄할거래처명</td>
                               <td colspan="9"><form:input type="text" id="prtCustNm" name="prtCustNm" path="acc02030.prtCustNm" tabindex="17" class="box_print" /></td>
                           </tr>
                           <tr>
                               <td width="170" height="30" align="left">9.담보설정</td>
                               <td colspan="8">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="130"><form:input type="text" id="scrtSetAmt" name="scrtSetAmt" path="acc02030.scrtSetAmt" tabindex="18" class="box_set" cssStyle="text-align: right;"/></td>
                                               <td width="5"></td>
                                               <td width="230" height="30" align="right" style="padding-right: 5px;">10.여신한도액</td>
                                               <td width="100" align="right"><form:input type="text" id="lmtAmt" name="lmtAmt" path="acc02030.lmtAmt" tabindex="19" class="box_limit"  cssStyle="text-align: right;"/></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">11.주류코드</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="18">
                                               	<form:select id="liqCd" name="liqCd" path="acc02030.liqCd" tabindex="20" style="width: 210px; height: 23px; margin-right: 10px;">
                                               		<form:option value=""></form:option>
                                               		<form:option value="1">1.유흥음식점</form:option>
                                               		<form:option value="2">2.일반소매업</form:option>
                                               		<form:option value="3">3.슈퍼,연쇄점,직영점</form:option>
                                               		<form:option value="4">4.슈퍼,연쇄점,직영점</form:option>
                                               		<form:option value="5">5.기타(실수요자)</form:option>
                                               		<form:option value="6">6.총괄납부승인 받은 슈퍼,직영점</form:option>
                                               		<form:option value="7">7.국가기관등의 연금매점</form:option>
                                               	</form:select>
                                               </td>
                                               <td width="20"></td>
                                               <td width="400"><%-- <form:input type="text" id="liqCdNm" name="liqCdNm" path="acc02030.liqCdNm" class="box_cod_long" readonly="readonly" cssStyle="width: 242px; #F6F7E8;"/> --%></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">12.입금계좌번호</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="45">은&nbsp;&nbsp;행</td>
                                               <td width="40" align="center">
                                               <form:input type="hidden" id="dpsBnkCd" name="dpsBnkCd" path="acc02030.dpsBnkCd"  />
                                               <form:input type="text" id="dpsBnkCdDsp" name="dpsBnkCdDsp" path="acc02030.dpsBnkCdDsp" tabindex="21" class="box_line" /></td>
                                               <td width="35" align="center">
                                               	<a href="" id="dpsBnkHelper">
                                               		<img id="btn_dpsBnk" src="<c:url value="/resources/img/btn_msg.png"/>" width="16" height="15" border="0" />
                                               	</a>
                                               </td>
                                               <td width="370" align="right"><form:input type="text" id="dpsBnkNm" name="dpsBnkNm" path="acc02030.dpsBnkNm" class="box_bank" readonly="readonly" cssStyle="background-color: #f1f8fe;"/></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
			<tr>
                               <td>&nbsp;</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="37">예금주</td>
                                               <td width="55"><form:input type="text" id="dsptor" name="dsptor" path="acc02030.dsptor" tabindex="22" class="box_deposit" /></td>
                                               <td width="130" align="right">계좌번호</td>
                                               <td width="120" align="right"><form:input type="text" id="accNo" name="accNo" path="acc02030.accNo" tabindex="23" class="box_number" /></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="35" align="left">13.담당자연락처</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td style="padding-top: 5px;">
                                               	<a href="" id="btnChrgPersSearch" 
                                               		onMouseOut="MM_swapImgRestore()" 
                                               		onMouseOver="MM_swapImage('image32','','<c:url value="/resources/img/btn_new_up.png"/>',1)">
                                               		<img src="<c:url value="/resources/img/btn_new.png"/>" name="image32" border="0">
                                               	</a>
                                               </td>
                                               <td width="5">&nbsp;<form:hidden id="chrgPers"  path="acc02030.chrgPers"/></td>
                                               <td width="100"><form:input type="text" id="chrgPersNm" name="chrgPersNm" path="acc02030.chrgPersNm" class="box_manager" readonly="readonly" cssStyle="background-color: ##f1f8fe;"/></td>
                                               <td width="5">&nbsp;</td>
                                               <td width="120" align="right"><form:input type="text" id="chrgPersEmailAddr" name="chrgPersEmailAddr" path="acc02030.emailAddr" class="box_send" readonly="readonly" cssStyle="background-color: #f1f8fe;"/></td>
                                               <td width="5">&nbsp;</td>
                                               <td width="45" style="padding-top: 5px;">
                                               	<a href="#" id="btnMailSend" 
                                               		onMouseOut="MM_swapImgRestore()" 
                                               		onMouseOver="MM_swapImage('image33','','<c:url value="/resources/img/btn_send_up.png"/>',1)"><img src="<c:url value="/resources/img/btn_send.png"/>" name="image33" border="0" />
                                               	</a>
                                               	<a href="" id="sendMail"></a>
                                               </td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">14.거래처분류명</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="30"><form:input type="text" id="custClsfCd" name="custClsfCd" path="acc02030.custClsfCd" tabindex="24" class="box_code" /></td>
                                               <td width="30" align="center">
                                               	<a href="" id="custClsfHelper">
                                               		<img id="btn_custClsf" src="<c:url value="/resources/img/btn_msg.png"/>" width="16" height="15" border="0" />
                                               	</a>
                                               </td>
                                               <td width="300"><form:input type="text" id="custClsfNm" name="custClsfNm" path="acc02030.custClsfNm" class="box_persons" readonly="readonly" cssStyle="background-color: ##f1f8fe;"/></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">15.주신고거래처</td>
                               <td colspan="9">
                                   <table width="464" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="30"><form:input type="text" id="prRepBusPlcCd" name="prRepBusPlcCd" path="acc02030.prRepBusPlcCd" tabindex="25"  class="box_declaration" /></td>
                                               <td width="30" align="center">
                                               	<a href="" id="prRepBusPlcHelper">
                                               		<img id="btn_prRepBusPlc" src="<c:url value="/resources/img/btn_msg.png"/>" width="16" height="15" border="0" />
                                               	</a>
                                               </td>
                                               <td width="55"><form:input type="text" id="prRepBusPlcNm" name="prRepBusPlcNm" path="acc02030.prRepBusPlcNm" class="box_deposit" readonly="readonly" cssStyle="background-color: ##f1f8fe;"/></td>
                                               <td width="130" align="right" style="padding-right: 3px;">종 사업장 번호</td>
                                               <td width="120" align="right"><form:input type="text" id="minPlcBusNo" name="minPlcBusNo" path="acc02030.minPlcBusNo" tabindex="26" class="box_bell" /></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">16.거래시작종료일</td>
                               <td colspan="9">
                                   <table width="330" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="35">시작:</td>
                                               <td width="100" colspan="2"><form:input type="text" id="stDt" name="stDt" path="acc02030.stDt" tabindex="27" class="btn_start" /></td>
                                               <td width="48">~ 종료:</td>
                                               <td width="130" colspan="2"><form:input type="text" id="endDt" name="endDt" path="acc02030.endDt" tabindex="28" class="btn_start" /></td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">17.비고</td>
                               <td colspan="9"><form:input type="text" id="etc" name="etc" path="acc02030.etc" tabindex="29" class="box_print" /></td>
                           </tr>
                           <tr>
                               <td width="117" height="30" align="left">18.사용여부</td>
                               <td colspan="9">
                                   <table width="100" border="0" cellspacing="0" cellpadding="0">
                                       <tbody>
                                           <tr>
                                               <td width="23">
                                               	<form:select id="useYn" name="useYn" path="acc02030.useYn" tabindex="30" cssStyle="width: 35px; height:23px;">
                                                	<form:option value=""></form:option>
                                                	<form:option value="0">부</form:option>
                                                	<form:option value="1">여</form:option>
                                                </form:select>
                                               </td>
                                               <td width="87" style="padding-left: 5px;">0:부 1:여</td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </td>
                           </tr>
                       </tbody>
                   </table>
               </div>
           	</form:form>
