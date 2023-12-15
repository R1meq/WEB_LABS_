package com.example.main.model;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Shoes {

    @Id
    private Long id;

    private String brand;
    private Integer price;
    private Integer size;
    private String color;
}
