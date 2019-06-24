package kr.hs.dgsw.demo.Service;

import kr.hs.dgsw.demo.Domain.Product;
import kr.hs.dgsw.demo.Domain.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductMapper productMapper;

    @Override
    public List<Product> select() {
        return this.productMapper.select();
    }
}
