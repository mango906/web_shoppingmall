package kr.hs.dgsw.demo.Service;

import kr.hs.dgsw.demo.Domain.User;

public interface UserService {
    public Long register(User user);

    public User login(User user);

    public Long idCheck(String account);
}
