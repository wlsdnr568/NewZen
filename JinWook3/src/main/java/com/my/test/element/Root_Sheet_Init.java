package com.my.test.element;

import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

public class Root_Sheet_Init {
	private String id;
	private String name;
	private String row_height;
	private String top_head_height;
	private String property;
	List<Root_Sheet_Init_Function> function;

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
	public String getRow_height() {
		return row_height;
	}
	@XmlAttribute
	public void setRow_height(String row_height) {
		this.row_height = row_height;
	}
	public String getTop_head_height() {
		return top_head_height;
	}
	@XmlAttribute
	public void setTop_head_height(String top_head_height) {
		this.top_head_height = top_head_height;
	}
	public String getProperty() {
		return property;
	}
	@XmlAttribute
	public void setProperty(String property) {
		this.property = property;
	}
	public List<Root_Sheet_Init_Function> getFunction() {
		return function;
	}
	@XmlElement
	public void setFunction(List<Root_Sheet_Init_Function> function) {
		this.function = function;
	}
	@Override
	public String toString() {
		return "Root_Sheet_Init [id=" + id + ", name=" + name + ", row_height=" + row_height + ", top_head_height="
				+ top_head_height + ", property=" + property + ", function=" + function + "]";
	}
}
