package com.my.test.model;

// 결재상세 테이블
public class WebApprovalDetail {
	/* Columns */
	String orderCompCd;	// 발주회사코드
	String compKey;		// 회사코드 yyyymmddhhmmssiii + 001 => 17 + 3 자리
	String email;		// 이메일
	String approvalCd;	// 결재코드
	int sec;			// 결재구분	10:1차결재, 20:2차결재, 30:참조, 31:참조구성원
	int seq;			// 결재순번
	String deptEmpCd;	// 부서사원코드
	String dutyNm;		// 결재자 직함
	int isConfirm;		// 처리구분	0:대기(제출), 1:미결(승인차례), 2:기결,승인,참조확인, 3:반려, 4:보류, 5:전결(이후 결재자는 참조 추가)
	String confirmDt;	// 결재일자 yyyymmddhhmmssiii => 17 자리
	String comment;		// 결재내용
	
	/* Display Columns */
	String deptEmpNm;	// 부서사원명
	String deptEmpEmail;// 부서사원코드에 해당하는 email;	
	
	String deptEmpSec;	// TreeGrid에 부서사원구분에 사용 
	String SrcEmpCd;	// TreeGrid에 Depth구분에 사용
	
	
	public String getOrderCompCd() {
		return orderCompCd;
	}
	public void setOrderCompCd(String orderCompCd) {
		this.orderCompCd = orderCompCd;
	}
	public String getCompKey() {
		return compKey;
	}
	public void setCompKey(String compKey) {
		this.compKey = compKey;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getApprovalCd() {
		return approvalCd;
	}
	public void setApprovalCd(String approvalCd) {
		this.approvalCd = approvalCd;
	}
	public int getSec() {
		return sec;
	}
	public void setSec(int sec) {
		this.sec = sec;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getDeptEmpCd() {
		return deptEmpCd;
	}
	public void setDeptEmpCd(String deptEmpCd) {
		this.deptEmpCd = deptEmpCd;
	}
	public String getDutyNm() {
		return dutyNm;
	}
	public void setDutyNm(String dutyNm) {
		this.dutyNm = dutyNm;
	}
	public int getIsConfirm() {
		return isConfirm;
	}
	public void setIsConfirm(int isConfirm) {
		this.isConfirm = isConfirm;
	}
	public String getConfirmDt() {
		return confirmDt;
	}
	public void setConfirmDt(String confirmDt) {
		this.confirmDt = confirmDt;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getDeptEmpNm() {
		return deptEmpNm;
	}
	public void setDeptEmpNm(String deptEmpNm) {
		this.deptEmpNm = deptEmpNm;
	}
	public String getDeptEmpEmail() {
		return deptEmpEmail;
	}
	public void setDeptEmpEmail(String deptEmpEmail) {
		this.deptEmpEmail = deptEmpEmail;
	}
	public String getDeptEmpSec() {
		return deptEmpSec;
	}
	public void setDeptEmpSec(String deptEmpSec) {
		this.deptEmpSec = deptEmpSec;
	}
	public String getSrcEmpCd() {
		return SrcEmpCd;
	}
	public void setSrcEmpCd(String srcEmpCd) {
		SrcEmpCd = srcEmpCd;
	}
	@Override
	public String toString() {
		return "WebApprovalDetail [orderCompCd=" + orderCompCd + ", compKey=" + compKey + ", email=" + email
				+ ", approvalCd=" + approvalCd + ", sec=" + sec + ", seq=" + seq + ", deptEmpCd=" + deptEmpCd
				+ ", dutyNm=" + dutyNm + ", isConfirm=" + isConfirm + ", confirmDt=" + confirmDt + ", comment="
				+ comment + ", deptEmpNm=" + deptEmpNm + ", deptEmpEmail=" + deptEmpEmail + ", deptEmpSec=" + deptEmpSec
				+ ", SrcEmpCd=" + SrcEmpCd + "]";
	}
}
