import React from "react";
import { useDispatch } from "react-redux";
import { ADD_SOME_ITEMS,DELETE_SOME_ITEMS,DELETE_ITEM } from "../store/actions";
import { NavLink} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function CartItem(props) {
    const {shoes, count, totalPrice} = props.shoes;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigateItem = () => {
        navigate(`/catalog/shoe/${shoes.id}`);
    };

    function addItem() {
        dispatch({
            type: ADD_SOME_ITEMS,
            payload: shoes, 
        })
    }

    function deleteItem() {
        if(count > 1) {
            dispatch({
                type: DELETE_SOME_ITEMS,
                payload: shoes, 
            })
        }
    }

    function deleteItemFromCart() {
        dispatch({
            type: DELETE_ITEM,
              payload: shoes, 
        })
    }

    return (
        <div className="cart-item">
             <div className="cart_left-side">
             <NavLink to={`/catalog/shoe/${shoes.id}`}>
                <img src={shoes.img_url} alt="Shoe" />
            </NavLink>
                <div>
                    <h3>{shoes.title}</h3>
                </div>
             </div>
             <div className="cart_center-side">
                <button 
                onClick={deleteItem}
                disabled={count === 1}
                style={count === 1 ? {background: '#e1e1e1'} : {} }
                className="button-delete">
                    <span>-</span>
                </button>
                <p>
                    <strong>{count}</strong>
                </p>
                <button onClick={addItem} className="button-add">
                   <span>+</span>
                </button>
             </div>
             <div className="cart_right-side">
                <h3>{totalPrice}$</h3>
                <button className="button_delete-item" onClick={deleteItemFromCart}>
                    <img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_delete_48px-64.png" alt="delete"/>
                </button>
             </div>
        </div>
    )
}

export default CartItem;