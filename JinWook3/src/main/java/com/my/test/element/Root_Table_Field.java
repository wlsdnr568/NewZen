package com.my.test.element;

import javax.xml.bind.annotation.XmlAttribute;

public class Root_Table_Field {
	private String name;
	private String sqltype;
	private String type;
	private String size;
	private String key;

	public String getName() {
		return name;
	}
	@XmlAttribute
	public void setName(String name) {
		this.name = name;
	}
	public String getSqltype() {
		return sqltype;
	}
	@XmlAttribute
	public void setSqltype(String sqltype) {
		this.sqltype = sqltype;
	}
	public String getType() {
		return type;
	}
	@XmlAttribute
	public void setType(String type) {
		this.type = type;
	}
	public String getSize() {
		return size;
	}
	@XmlAttribute
	public void setSize(String size) {
		this.size = size;
	}
	public String getKey() {
		return key;
	}
	@XmlAttribute
	public void setKey(String key) {
		this.key = key;
	}
	@Override
	public String toString() {
		return "Root_Table_Field [name=" + name + ", sqltype=" + sqltype + ", type=" + type + ", size=" + size
				+ ", key=" + key + "]";
	}
}
