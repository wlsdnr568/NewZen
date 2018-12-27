package com.my.test.element;

import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

public class Root_Sheet_Mask {
	private String id;
	private String name;
	private String fixtop;
	private String fixbottom;
	private String fixedleft;
	private String fixedright;
	List<Root_Sheet_Mask_Flag> flag;

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
	public String getFixtop() {
		return fixtop;
	}
	@XmlAttribute
	public void setFixtop(String fixtop) {
		this.fixtop = fixtop;
	}
	public String getFixbottom() {
		return fixbottom;
	}
	@XmlAttribute
	public void setFixbottom(String fixbottom) {
		this.fixbottom = fixbottom;
	}
	public String getFixedleft() {
		return fixedleft;
	}
	@XmlAttribute
	public void setFixedleft(String fixedleft) {
		this.fixedleft = fixedleft;
	}
	public String getFixedright() {
		return fixedright;
	}
	@XmlAttribute
	public void setFixedright(String fixedright) {
		this.fixedright = fixedright;
	}
	public List<Root_Sheet_Mask_Flag> getFlag() {
		return flag;
	}
	@XmlElement
	public void setFlag(List<Root_Sheet_Mask_Flag> flag) {
		this.flag = flag;
	}
	@Override
	public String toString() {
		return "Root_Sheet_Mask [id=" + id + ", name=" + name + ", fixtop=" + fixtop + ", fixbottom=" + fixbottom
				+ ", fixedleft=" + fixedleft + ", fixedright=" + fixedright + ", flag=" + flag + "]";
	}
}
