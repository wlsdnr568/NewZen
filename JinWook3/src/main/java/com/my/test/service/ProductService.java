package com.my.test.service;

import java.util.List;

import com.my.test.model.Product;

public interface ProductService {

    public List<Product> getProductList();
    
    public int addProduct(Product product);
    
    public int updateProduct(Product product);
    
    public int delProduct(String code);
    
    public int addAllProduct(List<Product> productList);
    
}