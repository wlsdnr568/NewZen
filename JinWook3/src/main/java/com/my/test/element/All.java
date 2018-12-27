package com.my.test.element;

import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlValue;

@XmlRootElement(name = "all")
public class All {
	List<Store> store;

	public List<Store> getStore() {
		return store;
	}
	@XmlElement
	public void setStore(List<Store> store) {
		this.store = store;
	}
	@Override
	public String toString() {
		return "All [store=" + store + "]";
	}
}

class Store {
	private String itemName;
	private price price;

	public String getItemName() {
		return itemName;
	}
	@XmlElement
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public price getPrice() {
		return price;
	}
	@XmlElement
	public void setPrice(price price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Store [itemName=" + itemName + ", price=" + price + "]";
	}
}

class price {
	private String type;
	private String value;
	
	public String getType() {
		return type;
	}
	@XmlAttribute
	public void setType(String type) {
		this.type = type;
	}
	public String getValue() {
		return value;
	}
	@XmlValue
	public void setValue(String value) {
		this.value = value;
	}
	@Override
	public String toString() {
		return "price [type=" + type + ", value=" + value + "]";
	}
}
