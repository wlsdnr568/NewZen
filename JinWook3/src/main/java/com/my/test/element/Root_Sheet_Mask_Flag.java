package com.my.test.element;

import javax.xml.bind.annotation.XmlAttribute;

public class Root_Sheet_Mask_Flag {
	private String name;
	private String title;
	private String width;	// test용 너비
	private String iparam;
	private String type;

	public String getName() {
		return name;
	}
	@XmlAttribute
	public void setName(String name) {
		this.name = name;
	}
	public String getTitle() {
		return title;
	}
	@XmlAttribute
	public void setTitle(String title) {
		this.title = title;
	}
	public String getWidth() {
		return width;
	}
	@XmlAttribute
	public void setWidth(String width) {
		this.width = width;
	}
	public String getIparam() {
		return iparam;
	}
	@XmlAttribute
	public void setIparam(String iparam) {
		this.iparam = iparam;
	}
	public String getType() {
		return type;
	}
	@XmlAttribute
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Root_Sheet_Mask_Flag [name=" + name + ", title=" + title + ", width=" + width + ", iparam=" + iparam
				+ ", type=" + type + "]";
	}
}
