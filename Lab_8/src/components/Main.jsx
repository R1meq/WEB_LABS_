import React, { useState } from "react";
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
    const itemPerRow = 3;
    const [text,setText] = useState("View more");
    const [visibleItems,setVisibleItems] = useState(3)
    const [fill,setFill] = useState();

    function moreInfo() {
        if (visibleItems < cards.length) {
            setVisibleItems(prevVisibleItems => {
                const updatedVisibleItems = prevVisibleItems + itemPerRow;
                if (updatedVisibleItems >= cards.length) {
                    setText("View Less");
                }
                return updatedVisibleItems;
            });
        } else {
            setVisibleItems(itemPerRow);
            setText("View More");
        }
    }


    return (
    <main className="home_main">
        <div className="conteiner">
            <div className="wrapper">
                <img src="https://1000logos.net/wp-content/uploads/2018/05/New-Balance-Logo-2006.png" width={"600px"}  alt=""/>
                <div className="main_title">
                <div className="main_heading">
                <h1>Style, Comfort, and Performance</h1>
                <Paragraph description={title.description} key={title.key}/>
                </div>
            </div>
            </div>
            <div className="main_cards">
                {cards.slice(0, visibleItems).map(createCard)}
            </div>
            <button className="main_button" onClick={moreInfo}>
                {text}
            </button>
        </div>
    </main>)
}

export default Main;