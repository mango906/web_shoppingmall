package kr.hs.dgsw.demo.Controller;

import kr.hs.dgsw.demo.Domain.User;
import kr.hs.dgsw.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/api/user/add")
    public Long add(@RequestBody User user) {
        return this.userService.register(user);
    }

    @PostMapping("/api/user/login")
    public User login(@RequestBody User user){
        return this.userService.login(user);
    }

    @GetMapping("/api/user/idCheck/{account}")
    public Long idCheck(@PathVariable String account){
        return this.userService.idCheck(account);
    }
}
