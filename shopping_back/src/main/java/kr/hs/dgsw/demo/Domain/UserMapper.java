package kr.hs.dgsw.demo.Domain;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    Long add(User user);

    User login(User user);

    Long idCheck(String account);
}
