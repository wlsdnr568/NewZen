package com.my.test.element;

import javax.xml.bind.annotation.XmlAttribute;

public class Root_Sheet_Headfix_Fixed {
	private String text;

	public String getText() {
		return text;
	}
	@XmlAttribute
	public void setText(String text) {
		this.text = text;
	}
	@Override
	public String toString() {
		return "Root_Sheet_Headfix_Fixed [text=" + text + "]";
	}
}
