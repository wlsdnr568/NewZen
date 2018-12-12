package com.my.test.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.my.test.model.ACCDeptEmp;
import com.my.test.model.Product;

@Mapper
public interface ProductMapper {
    
    public List<Product> getProductList();
    
    public int addProduct(Product product);
    
    public int updateProduct(Product product);
    
    public int delProduct(String code);
    
}
