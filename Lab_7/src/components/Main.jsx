import React from "react";
import cards from "../data";
import Card from "./Card";
import { title } from "../data";
import Paragraph from "./paragraph";

function createCard(item) {
    return (
        <Card 
            key={item.key}
            url={item.url}
            title={item.title}
            description={item.description}
        />
    );
}

function Main() {
    return <main>
        <div className="conteiner">
            <div className="main_title">
                <img src="https://1000logos.net/wp-content/uploads/2018/05/New-Balance-Logo-2006.png" width={"600px"}  alt=""/>
                <div className="main_heading">
                <h1>Style, Comfort, and Performance</h1>
                <Paragraph description={title.description} key={title.key}/>
                </div>
            </div>
            <div className="main_cards">
                {cards.map(createCard)}
            </div>
            <div className="main_button">
                <a href="/">View more</a>
            </div>
        </div>
    </main>
}

export default Main;