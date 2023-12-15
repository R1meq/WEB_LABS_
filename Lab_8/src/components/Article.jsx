import React from "react";
import { useNavigate } from "react-router-dom";


function Article(props) {

    const navigate = useNavigate();
    const navigateItem = () => {
        const [page] = props.pagesId.filter(x => x.id === props.id);
        navigate(`shoe/${page.id}`);
    }

    return (
        <div className="cardItem" id={props.id}>
            <img src={props.imgUrl} alt=""/>
            <div className="cardInfo">
                <h1>{props.title}</h1>
                <span>{props.description.substring(0,70)}...</span>
                <div>
                    <span>type: {props.type}</span>
                    <span>color: {props.color}</span>
                    <span>Price: {props.price}$</span>
                </div>
            </div>
            <button onClick={navigateItem}>View more</button>
        </div>
    )
}

export default Article;