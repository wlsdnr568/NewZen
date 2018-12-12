package com.my.test.model;

import java.util.List;

public class ApprovalJson {
	private List<ACCDeptEmp>		accDeptEmpList;
	private List<WebApprovalDetail> apporvalList;
	private String approvalCd;
	public List<ACCDeptEmp> getAccDeptEmpList() {
		return accDeptEmpList;
	}
	public void setAccDeptEmpList(List<ACCDeptEmp> accDeptEmpList) {
		this.accDeptEmpList = accDeptEmpList;
	}
	public List<WebApprovalDetail> getApporvalList() {
		return apporvalList;
	}
	public void setApporvalList(List<WebApprovalDetail> apporvalList) {
		this.apporvalList = apporvalList;
	}
	public String getApprovalCd() {
		return approvalCd;
	}
	public void setApprovalCd(String approvalCd) {
		this.approvalCd = approvalCd;
	}
	@Override
	public String toString() {
		return "ApprovalJson [accDeptEmpList=" + accDeptEmpList + ", apporvalList=" + apporvalList + ", approvalCd="
				+ approvalCd + "]";
	}
	
	
	
	/*
	private List<ACCDeptEmp>		accDeptEmpList;
	private List<WebRecentApproval> apporvalList;
	private String approvalCd;
	
	public List<ACCDeptEmp> getAccDeptEmpList() {
		return accDeptEmpList;
	}
	public void setAccDeptEmpList(List<ACCDeptEmp> accDeptEmpList) {
		this.accDeptEmpList = accDeptEmpList;
	}
	public List<WebRecentApproval> getApporvalList() {
		return apporvalList;
	}
	public void setApporvalList(List<WebRecentApproval> apporvalList) {
		this.apporvalList = apporvalList;
	}
	public String getApprovalCd() {
		return approvalCd;
	}
	public void setApprovalCd(String approvalCd) {
		this.approvalCd = approvalCd;
	}
	
	@Override
	public String toString() {
		return "ApprovalJson [accDeptEmpList=" + accDeptEmpList + ", apporvalList=" + apporvalList + ", approvalCd="
				+ approvalCd + "]";
	}
	*/
	
}
