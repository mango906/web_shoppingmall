package kr.hs.dgsw.demo.Domain;

import lombok.Data;

@Data
public class Basket {
    private Long id;
    private String account;
    private Long productId;
    private Long count;
}
