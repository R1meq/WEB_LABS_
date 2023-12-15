package com.example.main.controller;

import com.example.main.model.Shoes;
import com.example.main.sercive.ShoesService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/shoes")
@CrossOrigin(origins = "*")
@Slf4j
public class ShoesController {

    private final ShoesService shoesService;

    public ShoesController(ShoesService shoesService) {
        this.shoesService = shoesService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Shoes>> getAll() {
        return  ResponseEntity
                .status(HttpStatus.OK)
                .body(shoesService.findAllShoes());
    }

    @PostMapping
    public ResponseEntity<Iterable<Shoes>> create(@RequestBody Shoes shoes) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(shoesService.create(shoes));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shoes> update(@PathVariable Long id,
                                        @RequestBody Shoes shoes) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(shoesService.update(id,shoes));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        shoesService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }



}
