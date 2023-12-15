import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
    const itemCart = useSelector(state => state.cartItems);
    const totalAmount = useSelector(state => state.totalAmount);
    const values = [...itemCart.values()];
    console.log(values)
    const navigate = useNavigate();

    function navigateItem() {
        navigate('/catalog');
    }

    return ( 
        <div className="cart">
            <div className="cart_title-div">
                <h1 className="cart_title">Shopping Cart</h1>
            </div>
            <div className="cart_conteiner">
                { 
                    values !== 0 && values.map(item => (
                        <CartItem
                            key={item.shoes.id}
                            shoes={item}
                        />
                    ))
                }
            </div>
            <div className="total_price">
                <p>Total amount: <span>{totalAmount}$</span></p>
            </div>
            <div className="cart_buttons">
                <button 
                onClick={navigateItem}
                style={{fontSize: "1.4rem",padding: "1.5vh 1vw", color: "black",background: "white"}}
                >    
                    Back to Catalog
                </button>
                <button>    
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Cart;