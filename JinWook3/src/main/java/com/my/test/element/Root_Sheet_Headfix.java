package com.my.test.element;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

public class Root_Sheet_Headfix {
	private String id;
	private Root_Sheet_Headfix_Fixed fixed;

	public String getId() {
		return id;
	}
	@XmlAttribute
	public void setId(String id) {
		this.id = id;
	}
	public Root_Sheet_Headfix_Fixed getFixed() {
		return fixed;
	}
	@XmlElement
	public void setFixed(Root_Sheet_Headfix_Fixed fixed) {
		this.fixed = fixed;
	}
	@Override
	public String toString() {
		return "Root_Sheet_Headfix [id=" + id + ", fixed=" + fixed + "]";
	}
}
