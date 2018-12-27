package com.my.test.element;

import javax.xml.bind.annotation.XmlAttribute;

public class Root_Sheet_Init_Function {
	private String name;
	private String iparam;
	
	public String getName() {
		return name;
	}
	@XmlAttribute
	public void setName(String name) {
		this.name = name;
	}
	public String getIparam() {
		return iparam;
	}
	@XmlAttribute
	public void setIparam(String iparam) {
		this.iparam = iparam;
	}
	@Override
	public String toString() {
		return "Root_Sheet_Init_Function [name=" + name + ", iparam=" + iparam + "]";
	}
}
