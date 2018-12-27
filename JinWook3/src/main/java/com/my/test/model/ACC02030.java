package com.my.test.model;

public class ACC02030 {

	private String orderCompCd;
	private String compCd;
	private String custCd;
	private String custNm;
	private String custSec;
	private String custType;
	private String busnPersRegsNo;
	private int custClsfCd;
	private String regsNo;
	private String regsNoSec;
	private String cardNo;
	private String srchNo;
	private String zipNo;
	private String addr;
	private String addrDtl;
	private String tel1;
	private String tel2;
	private String tel3;
	private String extsNo;
	private String fax1;
	private String fax2;
	private String fax3;
	private Float lmtAmt;
	private int stDt;
	private int endDt;
	private String repstvNm;
	private String bsnCdt;
	private String itm;
	private String compChrgEmpCd;
	private String compChrgEmpNm;
	private String prtCustNm;
	private Float scrtSetAmt;
	private String liqCd;
	private String liqCdNm;
	private int dpsBnkCd;
	private String dpsBnkCdDsp;
	private String dpsBnkNm;
	private String dsptor;
	private String accNo;
	private String chrgPersNm;
	private String emailAddr;
	private String custClsfNm;
	private String prRepBusPlcCd;
	private String prRepBusPlcNm;
	private String minPlcBusNo;
	private String etc;
	private int accOpnBnkCd;
	private String accOpnBnkNm;
	private String accOpnStorNm;
	private int eprtDt;
	private Float intrRate;
	private Float monPaymAmt;
	private int crdCardCompCd;
	private int setmtAccBnkCd;
	private String setmtAccNo;
	private Float fee;
	private int setmtDt;
	private String chrgPers;
	private String homPg;
	private String useYn;
	private String rmk;
	private String insertDt;
	private String updateDt;
	
	
	private String nCustCd; //비교할 현재 전표번호
	private String chrgPersEmailAddr;
	private String chrgPersTel1;
	private String chrgPersTel2;
	private String chrgPersTel3;
	private String chrgPersHp1;
	private String chrgPersHp2;
	private String chrgPersHp3;
	private String dispCustCd;	// 화면출력 0 pad 거래처번호
	
	// DB field별 처리시 사용
	private String fieldNm;
	private String fieldVal;
	public String getOrderCompCd() {
		return orderCompCd;
	}
	public void setOrderCompCd(String orderCompCd) {
		this.orderCompCd = orderCompCd;
	}
	public String getCompCd() {
		return compCd;
	}
	public void setCompCd(String compCd) {
		this.compCd = compCd;
	}
	public String getCustCd() {
		return custCd;
	}
	public void setCustCd(String custCd) {
		this.custCd = custCd;
	}
	public String getCustNm() {
		return custNm;
	}
	public void setCustNm(String custNm) {
		this.custNm = custNm;
	}
	public String getCustSec() {
		return custSec;
	}
	public void setCustSec(String custSec) {
		this.custSec = custSec;
	}
	public String getCustType() {
		return custType;
	}
	public void setCustType(String custType) {
		this.custType = custType;
	}
	public String getBusnPersRegsNo() {
		return busnPersRegsNo;
	}
	public void setBusnPersRegsNo(String busnPersRegsNo) {
		this.busnPersRegsNo = busnPersRegsNo;
	}
	public int getCustClsfCd() {
		return custClsfCd;
	}
	public void setCustClsfCd(int custClsfCd) {
		this.custClsfCd = custClsfCd;
	}
	public String getRegsNo() {
		return regsNo;
	}
	public void setRegsNo(String regsNo) {
		this.regsNo = regsNo;
	}
	public String getRegsNoSec() {
		return regsNoSec;
	}
	public void setRegsNoSec(String regsNoSec) {
		this.regsNoSec = regsNoSec;
	}
	public String getCardNo() {
		return cardNo;
	}
	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}
	public String getSrchNo() {
		return srchNo;
	}
	public void setSrchNo(String srchNo) {
		this.srchNo = srchNo;
	}
	public String getZipNo() {
		return zipNo;
	}
	public void setZipNo(String zipNo) {
		this.zipNo = zipNo;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getAddrDtl() {
		return addrDtl;
	}
	public void setAddrDtl(String addrDtl) {
		this.addrDtl = addrDtl;
	}
	public String getTel1() {
		return tel1;
	}
	public void setTel1(String tel1) {
		this.tel1 = tel1;
	}
	public String getTel2() {
		return tel2;
	}
	public void setTel2(String tel2) {
		this.tel2 = tel2;
	}
	public String getTel3() {
		return tel3;
	}
	public void setTel3(String tel3) {
		this.tel3 = tel3;
	}
	public String getExtsNo() {
		return extsNo;
	}
	public void setExtsNo(String extsNo) {
		this.extsNo = extsNo;
	}
	public String getFax1() {
		return fax1;
	}
	public void setFax1(String fax1) {
		this.fax1 = fax1;
	}
	public String getFax2() {
		return fax2;
	}
	public void setFax2(String fax2) {
		this.fax2 = fax2;
	}
	public String getFax3() {
		return fax3;
	}
	public void setFax3(String fax3) {
		this.fax3 = fax3;
	}
	public Float getLmtAmt() {
		return lmtAmt;
	}
	public void setLmtAmt(Float lmtAmt) {
		this.lmtAmt = lmtAmt;
	}
	public int getStDt() {
		return stDt;
	}
	public void setStDt(int stDt) {
		this.stDt = stDt;
	}
	public int getEndDt() {
		return endDt;
	}
	public void setEndDt(int endDt) {
		this.endDt = endDt;
	}
	public String getRepstvNm() {
		return repstvNm;
	}
	public void setRepstvNm(String repstvNm) {
		this.repstvNm = repstvNm;
	}
	public String getBsnCdt() {
		return bsnCdt;
	}
	public void setBsnCdt(String bsnCdt) {
		this.bsnCdt = bsnCdt;
	}
	public String getItm() {
		return itm;
	}
	public void setItm(String itm) {
		this.itm = itm;
	}
	public String getCompChrgEmpCd() {
		return compChrgEmpCd;
	}
	public void setCompChrgEmpCd(String compChrgEmpCd) {
		this.compChrgEmpCd = compChrgEmpCd;
	}
	public String getCompChrgEmpNm() {
		return compChrgEmpNm;
	}
	public void setCompChrgEmpNm(String compChrgEmpNm) {
		this.compChrgEmpNm = compChrgEmpNm;
	}
	public String getPrtCustNm() {
		return prtCustNm;
	}
	public void setPrtCustNm(String prtCustNm) {
		this.prtCustNm = prtCustNm;
	}
	public Float getScrtSetAmt() {
		return scrtSetAmt;
	}
	public void setScrtSetAmt(Float scrtSetAmt) {
		this.scrtSetAmt = scrtSetAmt;
	}
	public String getLiqCd() {
		return liqCd;
	}
	public void setLiqCd(String liqCd) {
		this.liqCd = liqCd;
	}
	public String getLiqCdNm() {
		return liqCdNm;
	}
	public void setLiqCdNm(String liqCdNm) {
		this.liqCdNm = liqCdNm;
	}
	public int getDpsBnkCd() {
		return dpsBnkCd;
	}
	public void setDpsBnkCd(int dpsBnkCd) {
		this.dpsBnkCd = dpsBnkCd;
	}
	public String getDpsBnkCdDsp() {
		return dpsBnkCdDsp;
	}
	public void setDpsBnkCdDsp(String dpsBnkCdDsp) {
		this.dpsBnkCdDsp = dpsBnkCdDsp;
	}
	public String getDpsBnkNm() {
		return dpsBnkNm;
	}
	public void setDpsBnkNm(String dpsBnkNm) {
		this.dpsBnkNm = dpsBnkNm;
	}
	public String getDsptor() {
		return dsptor;
	}
	public void setDsptor(String dsptor) {
		this.dsptor = dsptor;
	}
	public String getAccNo() {
		return accNo;
	}
	public void setAccNo(String accNo) {
		this.accNo = accNo;
	}
	public String getChrgPersNm() {
		return chrgPersNm;
	}
	public void setChrgPersNm(String chrgPersNm) {
		this.chrgPersNm = chrgPersNm;
	}
	public String getEmailAddr() {
		return emailAddr;
	}
	public void setEmailAddr(String emailAddr) {
		this.emailAddr = emailAddr;
	}
	public String getCustClsfNm() {
		return custClsfNm;
	}
	public void setCustClsfNm(String custClsfNm) {
		this.custClsfNm = custClsfNm;
	}
	public String getPrRepBusPlcCd() {
		return prRepBusPlcCd;
	}
	public void setPrRepBusPlcCd(String prRepBusPlcCd) {
		this.prRepBusPlcCd = prRepBusPlcCd;
	}
	public String getPrRepBusPlcNm() {
		return prRepBusPlcNm;
	}
	public void setPrRepBusPlcNm(String prRepBusPlcNm) {
		this.prRepBusPlcNm = prRepBusPlcNm;
	}
	public String getMinPlcBusNo() {
		return minPlcBusNo;
	}
	public void setMinPlcBusNo(String minPlcBusNo) {
		this.minPlcBusNo = minPlcBusNo;
	}
	public String getEtc() {
		return etc;
	}
	public void setEtc(String etc) {
		this.etc = etc;
	}
	public int getAccOpnBnkCd() {
		return accOpnBnkCd;
	}
	public void setAccOpnBnkCd(int accOpnBnkCd) {
		this.accOpnBnkCd = accOpnBnkCd;
	}
	public String getAccOpnBnkNm() {
		return accOpnBnkNm;
	}
	public void setAccOpnBnkNm(String accOpnBnkNm) {
		this.accOpnBnkNm = accOpnBnkNm;
	}
	public String getAccOpnStorNm() {
		return accOpnStorNm;
	}
	public void setAccOpnStorNm(String accOpnStorNm) {
		this.accOpnStorNm = accOpnStorNm;
	}
	public int getEprtDt() {
		return eprtDt;
	}
	public void setEprtDt(int eprtDt) {
		this.eprtDt = eprtDt;
	}
	public Float getIntrRate() {
		return intrRate;
	}
	public void setIntrRate(Float intrRate) {
		this.intrRate = intrRate;
	}
	public Float getMonPaymAmt() {
		return monPaymAmt;
	}
	public void setMonPaymAmt(Float monPaymAmt) {
		this.monPaymAmt = monPaymAmt;
	}
	public int getCrdCardCompCd() {
		return crdCardCompCd;
	}
	public void setCrdCardCompCd(int crdCardCompCd) {
		this.crdCardCompCd = crdCardCompCd;
	}
	public int getSetmtAccBnkCd() {
		return setmtAccBnkCd;
	}
	public void setSetmtAccBnkCd(int setmtAccBnkCd) {
		this.setmtAccBnkCd = setmtAccBnkCd;
	}
	public String getSetmtAccNo() {
		return setmtAccNo;
	}
	public void setSetmtAccNo(String setmtAccNo) {
		this.setmtAccNo = setmtAccNo;
	}
	public Float getFee() {
		return fee;
	}
	public void setFee(Float fee) {
		this.fee = fee;
	}
	public int getSetmtDt() {
		return setmtDt;
	}
	public void setSetmtDt(int setmtDt) {
		this.setmtDt = setmtDt;
	}
	public String getChrgPers() {
		return chrgPers;
	}
	public void setChrgPers(String chrgPers) {
		this.chrgPers = chrgPers;
	}
	public String getHomPg() {
		return homPg;
	}
	public void setHomPg(String homPg) {
		this.homPg = homPg;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public String getRmk() {
		return rmk;
	}
	public void setRmk(String rmk) {
		this.rmk = rmk;
	}
	public String getInsertDt() {
		return insertDt;
	}
	public void setInsertDt(String insertDt) {
		this.insertDt = insertDt;
	}
	public String getUpdateDt() {
		return updateDt;
	}
	public void setUpdateDt(String updateDt) {
		this.updateDt = updateDt;
	}
	public String getnCustCd() {
		return nCustCd;
	}
	public void setnCustCd(String nCustCd) {
		this.nCustCd = nCustCd;
	}
	public String getChrgPersEmailAddr() {
		return chrgPersEmailAddr;
	}
	public void setChrgPersEmailAddr(String chrgPersEmailAddr) {
		this.chrgPersEmailAddr = chrgPersEmailAddr;
	}
	public String getChrgPersTel1() {
		return chrgPersTel1;
	}
	public void setChrgPersTel1(String chrgPersTel1) {
		this.chrgPersTel1 = chrgPersTel1;
	}
	public String getChrgPersTel2() {
		return chrgPersTel2;
	}
	public void setChrgPersTel2(String chrgPersTel2) {
		this.chrgPersTel2 = chrgPersTel2;
	}
	public String getChrgPersTel3() {
		return chrgPersTel3;
	}
	public void setChrgPersTel3(String chrgPersTel3) {
		this.chrgPersTel3 = chrgPersTel3;
	}
	public String getChrgPersHp1() {
		return chrgPersHp1;
	}
	public void setChrgPersHp1(String chrgPersHp1) {
		this.chrgPersHp1 = chrgPersHp1;
	}
	public String getChrgPersHp2() {
		return chrgPersHp2;
	}
	public void setChrgPersHp2(String chrgPersHp2) {
		this.chrgPersHp2 = chrgPersHp2;
	}
	public String getChrgPersHp3() {
		return chrgPersHp3;
	}
	public void setChrgPersHp3(String chrgPersHp3) {
		this.chrgPersHp3 = chrgPersHp3;
	}
	public String getDispCustCd() {
		return dispCustCd;
	}
	public void setDispCustCd(String dispCustCd) {
		this.dispCustCd = dispCustCd;
	}
	public String getFieldNm() {
		return fieldNm;
	}
	public void setFieldNm(String fieldNm) {
		this.fieldNm = fieldNm;
	}
	public String getFieldVal() {
		return fieldVal;
	}
	public void setFieldVal(String fieldVal) {
		this.fieldVal = fieldVal;
	}
	@Override
	public String toString() {
		return "ACC02030 [orderCompCd=" + orderCompCd + ", compCd=" + compCd + ", custCd=" + custCd + ", custNm="
				+ custNm + ", custSec=" + custSec + ", custType=" + custType + ", busnPersRegsNo=" + busnPersRegsNo
				+ ", custClsfCd=" + custClsfCd + ", regsNo=" + regsNo + ", regsNoSec=" + regsNoSec + ", cardNo="
				+ cardNo + ", srchNo=" + srchNo + ", zipNo=" + zipNo + ", addr=" + addr + ", addrDtl=" + addrDtl
				+ ", tel1=" + tel1 + ", tel2=" + tel2 + ", tel3=" + tel3 + ", extsNo=" + extsNo + ", fax1=" + fax1
				+ ", fax2=" + fax2 + ", fax3=" + fax3 + ", lmtAmt=" + lmtAmt + ", stDt=" + stDt + ", endDt=" + endDt
				+ ", repstvNm=" + repstvNm + ", bsnCdt=" + bsnCdt + ", itm=" + itm + ", compChrgEmpCd=" + compChrgEmpCd
				+ ", compChrgEmpNm=" + compChrgEmpNm + ", prtCustNm=" + prtCustNm + ", scrtSetAmt=" + scrtSetAmt
				+ ", liqCd=" + liqCd + ", liqCdNm=" + liqCdNm + ", dpsBnkCd=" + dpsBnkCd + ", dpsBnkCdDsp="
				+ dpsBnkCdDsp + ", dpsBnkNm=" + dpsBnkNm + ", dsptor=" + dsptor + ", accNo=" + accNo + ", chrgPersNm="
				+ chrgPersNm + ", emailAddr=" + emailAddr + ", custClsfNm=" + custClsfNm + ", prRepBusPlcCd="
				+ prRepBusPlcCd + ", prRepBusPlcNm=" + prRepBusPlcNm + ", minPlcBusNo=" + minPlcBusNo + ", etc=" + etc
				+ ", accOpnBnkCd=" + accOpnBnkCd + ", accOpnBnkNm=" + accOpnBnkNm + ", accOpnStorNm=" + accOpnStorNm
				+ ", eprtDt=" + eprtDt + ", intrRate=" + intrRate + ", monPaymAmt=" + monPaymAmt + ", crdCardCompCd="
				+ crdCardCompCd + ", setmtAccBnkCd=" + setmtAccBnkCd + ", setmtAccNo=" + setmtAccNo + ", fee=" + fee
				+ ", setmtDt=" + setmtDt + ", chrgPers=" + chrgPers + ", homPg=" + homPg + ", useYn=" + useYn + ", rmk="
				+ rmk + ", insertDt=" + insertDt + ", updateDt=" + updateDt + ", nCustCd=" + nCustCd
				+ ", chrgPersEmailAddr=" + chrgPersEmailAddr + ", chrgPersTel1=" + chrgPersTel1 + ", chrgPersTel2="
				+ chrgPersTel2 + ", chrgPersTel3=" + chrgPersTel3 + ", chrgPersHp1=" + chrgPersHp1 + ", chrgPersHp2="
				+ chrgPersHp2 + ", chrgPersHp3=" + chrgPersHp3 + ", dispCustCd=" + dispCustCd + ", fieldNm=" + fieldNm
				+ ", fieldVal=" + fieldVal + "]";
	}
}
