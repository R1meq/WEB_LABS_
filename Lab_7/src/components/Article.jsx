import React from "react";


function Article(props) {
    return (
        <div className="cardItem">
            <img src={props.imgUrl} alt=""/>
            <div className="cardInfo">
                <h1>{props.title}</h1>
                <span>{props.description}</span>
                <span>Price: {props.price}</span>
            </div>
            <button>View more</button>
        </div>
    )
}

export default Article;