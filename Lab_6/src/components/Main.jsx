import React from "react";
import cards from "../data";
import Card from "./Card";

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
                <img src="https://1000logos.net/wp-content/uploads/2018/05/New-Balance-Logo-2006.png" width={"700px"}></img>
                <div className="main_heading">
                <h1>Style, Comfort, and Performance</h1>
                <p>
                    Experience style, comfort, and performance with New Balance shoes.<br/>
                    From athletics to casual wear, New Balance blends innovation and <br/> 
                    technology to meet your active lifestyle needs.Step into a new era <br/> 
                    of footwear where fashion and function find perfect balance in<br/>
                    every pair.
                </p>
                </div>
            </div>
            <div className="main_cards">
                {cards.map(createCard)}
            </div>
            <div className="main_button">
                <a a href="">View more</a>
            </div>
        </div>
    </main>
}

export default Main;