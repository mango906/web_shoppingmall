package kr.hs.dgsw.demo.Service;

import kr.hs.dgsw.demo.Domain.User;
import kr.hs.dgsw.demo.Domain.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public Long register(User user) {
        return this.userMapper.add(user);
    }

    @Override
    public User login(User user) {
        return this.userMapper.login(user);
    }

    @Override
    public Long idCheck(String account) {
        return this.userMapper.idCheck(account);
    }
}
