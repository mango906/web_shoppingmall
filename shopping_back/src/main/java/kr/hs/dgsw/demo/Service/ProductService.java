package kr.hs.dgsw.demo.Service;

import kr.hs.dgsw.demo.Domain.Product;

import java.util.List;

public interface ProductService {
    List<Product> select();

    List<Product> selectByType(Long type);

    Product selectById(Long id);
}
