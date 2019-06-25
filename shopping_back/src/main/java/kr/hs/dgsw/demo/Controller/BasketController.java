package kr.hs.dgsw.demo.Controller;

import kr.hs.dgsw.demo.Domain.Basket;
import kr.hs.dgsw.demo.Service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasketController {

    @Autowired
    private BasketService basketService;

    @PostMapping("/api/basket/add")
    public Long add(@RequestBody Basket basket){
        return basketService.add(basket);
    }
}
