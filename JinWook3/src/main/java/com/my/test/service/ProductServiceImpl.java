package com.my.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.my.test.mapper.ProductMapper;
import com.my.test.model.ACCDeptEmp;
import com.my.test.model.Product;

@Service
public class ProductServiceImpl implements ProductService{
	
		@Autowired 
	    ProductMapper proMapper;

		@Override
		public List<Product> getProductList() {
			
			return proMapper.getProductList();
		}

		@Override
		public int addProduct(Product product) {
			return proMapper.addProduct(product);
		}

		@Override
		public int updateProduct(Product product) {
			return proMapper.updateProduct(product);
		}
		 
		@Override
		public int delProduct(String code) {
			return proMapper.delProduct(code);
		}

		@Transactional 
	    public int addAllProduct(List<Product> pdList) {
	        
	        int num = 0;
	        
	        for(Product product : pdList){
	            if(product.getState().equals("created"))
	                num += proMapper.addProduct(product);
	            else if(product.getState().equals("updated"))
	                num += proMapper.updateProduct(product);
	            else if(product.getState().equals("deleted"))
	                num += proMapper.delProduct(product.getCode());
	        }
	        return num;
	    }

	
}
