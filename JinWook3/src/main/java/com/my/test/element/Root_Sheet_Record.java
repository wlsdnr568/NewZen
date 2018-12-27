package com.my.test.element;

import javax.xml.bind.annotation.XmlAttribute;

public class Root_Sheet_Record {
	private String id;
	private String name;
	
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
	@Override
	public String toString() {
		return "Root_Sheet_Record [id=" + id + ", name=" + name + "]";
	}
}
