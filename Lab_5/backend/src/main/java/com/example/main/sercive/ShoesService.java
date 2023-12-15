package com.example.main.sercive;

import com.example.main.model.Shoes;
import com.example.main.repository.ShoesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoesService {

    private final ShoesRepository shoesRepository;

    public ShoesService(ShoesRepository shoesRepository) {
        this.shoesRepository = shoesRepository;
    }

    public Iterable<Shoes> create(Shoes shoes) {
        shoesRepository.save(shoes);
        return shoesRepository.findAll();
    }

    public Shoes update(Long id,Shoes shoes) {
        Shoes update = shoesRepository.findById(id).
                orElseThrow(() -> new RuntimeException("shoes not found"));

        if(!shoes.getBrand().isBlank())
            update.setBrand(shoes.getBrand());
        if(shoes.getPrice() != null)
            update.setPrice(shoes.getPrice());
        if(shoes.getSize() != null)
            update.setSize(shoes.getSize());
        if(!shoes.getColor().isBlank())
            update.setColor(shoes.getColor());

        return shoesRepository.save(update);
    }

    public void delete(Long id) {
        shoesRepository.deleteById(id);
    }

    public Iterable<Shoes> findAllShoes() {
        return shoesRepository.findAll();
    }
}
