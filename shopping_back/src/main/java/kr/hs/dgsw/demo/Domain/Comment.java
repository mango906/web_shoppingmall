package kr.hs.dgsw.demo.Domain;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Comment {
    private Long id;
    private Long productId;
    private String account;
    private String content;
    private LocalDateTime date;
}
