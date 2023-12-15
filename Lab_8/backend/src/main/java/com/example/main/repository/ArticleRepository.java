package com.example.main.repository;


import com.example.main.model.Articles;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository
        extends CrudRepository<Articles,Integer> {

    @Query("SELECT * FROM articles WHERE color = :color")
    List<Articles> filterArticlesByColor(String color);

    @Query("SELECT * FROM articles WHERE color = :color AND type = :type")
    List<Articles> filterArticlesByColorAndType(String color,String type);

    @Query("SELECT * FROM articles WHERE type = :type")
    List<Articles> filterArticlesByType(String type);

    @Query("SELECT * FROM articles WHERE color = :color AND title LIKE CONCAT('%',:title,'%')")
    List<Articles> filterArticlesByColorAndSearch(String color,String title);

    @Query("SELECT * FROM articles WHERE title LIKE CONCAT('%',:title,'%')")
    List<Articles> filterArticlesBySearch(String title);

    @Query("SELECT * FROM articles WHERE title LIKE CONCAT('%',:title,'%') AND color = :color AND type = :type")
    List<Articles> filterArticlesBySearchColorAndType(String title,String color,String type);
}
