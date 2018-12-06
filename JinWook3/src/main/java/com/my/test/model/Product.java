package com.my.test.model;

public class Product {
	
    private int price;
    private String unit;
    private String code;
    private String volume;
    private String productName;
    private String state;
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getVolume() {
		return volume;
	}
	public void setVolume(String volume) {
		this.volume = volume;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	@Override
	public String toString() {
		return "Product [price=" + price + ", unit=" + unit + ", code=" + code + ", volume=" + volume + ", productName="
				+ productName + ", state=" + state + "]";
	}
    
    
    
}