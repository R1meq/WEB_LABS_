package com.example.main.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Articles {

    @Id
    private Integer id;

    private String img_url;
    private String title;
    private String description;
    private String type;
    private String color;
    private Double size;
    private BigDecimal price;
}
