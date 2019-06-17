package kr.hs.dgsw.demo.Domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class User {
    private Long id;
    private String account;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String username;
    private String phone;
    private String address;
    private String email;
    private LocalDateTime created;
    private LocalDateTime updated;
}
