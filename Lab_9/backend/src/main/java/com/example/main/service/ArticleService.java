package com.example.main.service;

import com.example.main.model.Articles;
import com.example.main.repository.ArticleRepository;
import org.springframework.stereotype.Service;


@Service
public class ArticleService {
    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public Articles getById(Integer id) {
        return  articleRepository.findById(id).orElseThrow(() ->new RuntimeException("Error"));
    }

    public Iterable<Articles> filterByColor(String color) {
        return articleRepository.filterArticlesByColor(color);
    }

    public Iterable<Articles>  getAll() {
        return articleRepository.findAll();
    }

    public Iterable<Articles> filterByColorAndType(String color,String type) {
        return articleRepository.filterArticlesByColorAndType(color, type);
    }

    public Iterable<Articles> filterByType(String type) {
        return articleRepository.filterArticlesByType(type);
    }

    public Iterable<Articles> filterBySearch(String title) {
        return articleRepository.filterArticlesBySearch(title);
    }

    public  Iterable<Articles> filterByColorAndSearch(String color,String searchType) {
        return articleRepository.filterArticlesByColorAndSearch(color,searchType);
    }

    public Iterable<Articles> filterBySearchColorAndType(String title, String color, String type) {
        return articleRepository.filterArticlesBySearchColorAndType(title,color,type);
    }
}
