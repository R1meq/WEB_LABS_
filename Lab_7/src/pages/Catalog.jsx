import React, { Fragment } from "react";
import Filter from "../components/Filter";
import { articles } from "../data";
import Article from "../components/Article";


function createArticles(item) {
    return (
        <Article
         key={item.key}
         imgUrl={item.imgUrl} 
         title={item.title}
         description={item.description}
         price={item.price}
        />
    )
}


function Catalog() {
    return (
        <div className="catalog">
            <Filter />
            <main className="articleCard">
                {articles.map(createArticles)}
            </main>
        </div>
    ) 
}

export default Catalog