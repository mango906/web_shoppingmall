package kr.hs.dgsw.demo.Domain;

import lombok.Data;

@Data
public class Product {
    private Long id;
    private String image;
    private String name;
    private String content;
//    private int sailCost;
    private int type;
    private int cost;
}
