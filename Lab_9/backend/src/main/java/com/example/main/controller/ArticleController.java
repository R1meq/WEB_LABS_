package com.example.main.controller;

import com.example.main.model.Articles;
import com.example.main.service.ArticleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/catalog")
@CrossOrigin("*")
public class ArticleController {
    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping()
    public Iterable<Articles> filterArticles(
            @RequestParam(required = false) String color,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String title
    ) {

        if (color != null && type != null && title != null)
            return articleService.filterBySearchColorAndType(title, color, type);
        if (color != null && type != null)
            return articleService.filterByColorAndType(color, type);
        if (color != null && title != null)
            return articleService.filterByColorAndSearch(color, title);
        if (color != null)
            return articleService.filterByColor(color);
        if (type != null)
            return articleService.filterByType(type);
        if (title != null)
            return articleService.filterBySearch(title);

        return articleService.getAll();
    }

    @GetMapping("/shoe/{id}")
    public Articles getById(@PathVariable Integer id) {
        return articleService.getById(id);
    }
}