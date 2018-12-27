package com.my.test.element;

import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

public class Root_Sheet {
	private String id;
	private String name;
	private String using;
	private List<Root_Sheet_Headfix> headfix;
	private List<Root_Sheet_Mask> mask;
	private Root_Sheet_Record record;
	private Root_Sheet_Init init;

	public String getId() {
		return id;
	}
	@XmlAttribute
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	@XmlAttribute
	public void setName(String name) {
		this.name = name;
	}
	public String getUsing() {
		return using;
	}
	@XmlAttribute
	public void setUsing(String using) {
		this.using = using;
	}
	public List<Root_Sheet_Headfix> getHeadfix() {
		return headfix;
	}
	@XmlElement
	public void setHeadfix(List<Root_Sheet_Headfix> headfix) {
		this.headfix = headfix;
	}
	public List<Root_Sheet_Mask> getMask() {
		return mask;
	}
	@XmlElement
	public void setMask(List<Root_Sheet_Mask> mask) {
		this.mask = mask;
	}
	public Root_Sheet_Record getRecord() {
		return record;
	}
	@XmlElement
	public void setRecord(Root_Sheet_Record record) {
		this.record = record;
	}
	public Root_Sheet_Init getInit() {
		return init;
	}
	@XmlElement
	public void setInit(Root_Sheet_Init init) {
		this.init = init;
	}
	@Override
	public String toString() {
		return "Root_Sheet [id=" + id + ", name=" + name + ", using=" + using + ", headfix=" + headfix + ", mask="
				+ mask + ", record=" + record + ", init=" + init + "]";
	}
}
