package kr.hs.dgsw.demo.Controller;

import kr.hs.dgsw.demo.Domain.Product;
import kr.hs.dgsw.demo.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/api/product/select")
    public List<Product> select() {
        return this.productService.select();
    }

    @GetMapping("/api/product/select/{type}")
    public List<Product> selectByType(@PathVariable Long type) {
        return this.productService.selectByType(type);
    }

    @GetMapping("/api/product/selectById/{id}")
    public Product selectById(@PathVariable Long id){
        return this.productService.selectById(id);
    }

}
