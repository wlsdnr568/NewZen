package com.my.test.element;

import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

public class Root_Table {
	private String id;
	private String name;
	List<Root_Table_Field> field;
	
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
	public List<Root_Table_Field> getField() {
		return field;
	}
	@XmlElement
	public void setField(List<Root_Table_Field> field) {
		this.field = field;
	}
	@Override
	public String toString() {
		return "Root_Table [id=" + id + ", name=" + name + ", field=" + field + "]";
	}
}
