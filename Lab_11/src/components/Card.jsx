import React from "react";
import Paragraph from "./paragraph";

function Card(props) {
    return (
        <div className="card">
            <img src={props.url}></img>
            <h1 className="header_card">{props.title}</h1>
            <Paragraph description={props.description}/>
        </div>
    );
}

export default Card;