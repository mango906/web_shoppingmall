package kr.hs.dgsw.demo.Domain;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BasketMapper {
    Long Add(Basket basket);
}
