package com.example.main.repository;

import com.example.main.model.Shoes;
import org.springframework.data.repository.CrudRepository;

public interface ShoesRepository extends CrudRepository<Shoes,Long> {
}
