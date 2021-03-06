package kr.hs.dgsw.demo.Domain;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    List<Product> select();

    List<Product> selectByType(Long type);

    Product selectById(Long id);
}
