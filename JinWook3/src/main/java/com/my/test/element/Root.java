package com.my.test.element;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Root {
	List<Root_Table> table;
	List<Root_Sheet> sheet;
	
	public List<Root_Table> getTable() {
		return table;
	}
	@XmlElement
	public void setTable(List<Root_Table> table) {
		this.table = table;
	}
	public List<Root_Sheet> getSheet() {
		return sheet;
	}
	@XmlElement
	public void setSheet(List<Root_Sheet> sheet) {
		this.sheet = sheet;
	}
	@Override
	public String toString() {
		return "Root [table=" + table + ", sheet=" + sheet + "]";
	}
}
