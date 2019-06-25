package kr.hs.dgsw.demo.Domain;

import lombok.Data;

@Data
public class Basket {
    private Long id;
    private Long accountId;
    private Long productId;
    private Long count;
}
