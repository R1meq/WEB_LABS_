import {createStore} from "redux";
import { ADD_ITEM, ADD_SOME_ITEMS, DELETE_SOME_ITEMS, DELETE_ITEM } from "./actions";
const defaultState = {
    cartItems: new Map(),
    totalAmount: 0,
};

const rootReducer = (state = defaultState,action) => {
    switch(action.type) {
        case ADD_ITEM:
            return addItem(state,action);
        case ADD_SOME_ITEMS:
            return addSomeItems(state,action);
        case DELETE_SOME_ITEMS:
            return delelteSomeItems(state,action);
        case DELETE_ITEM:
            return  deleteItem(state,action);
        default:
            return state
    }
}

const addItem = (state, action) => {
    const {item, count} =  action.payload;
    console.log(action.payload)
    console.log(item)
    console.log(count)
    const { id, price} = item;
    const updatedCartItems = new Map(state.cartItems);

    updatedCartItems.set(id,{shoes: item, count: count, totalPrice: (price * count)})
    
    const totalAmount = state.totalAmount += (price * count);

    return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: totalAmount 
    }
}

const addSomeItems = (state,action) => {
    const currentItem =  action.payload;
    const { id, price} = currentItem;
    const updatedCartItems = new Map(state.cartItems);

    const item = updatedCartItems.get(id);
    item.count = Number(item.count) + 1;
    item.totalPrice += price;

    const totalAmount = state.totalAmount += price;

    return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: totalAmount 
    }
}

const delelteSomeItems = (state,action) => {
    const currentItem =  action.payload;
    const { id, price} = currentItem;
    const updatedCartItems = new Map(state.cartItems);

    const item = updatedCartItems.get(id);
    item.count -= 1;
    item.totalPrice -= price;
        
    const totalAmount = state.totalAmount -= price;

    return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: totalAmount 
    }
}

const deleteItem = (state, action) => {
    const currentItem =  action.payload;
    const {id,price} = currentItem;
    const updatedCartItems = new Map(state.cartItems);
    const values = [...updatedCartItems.values()];


    if(updatedCartItems.has(id)) {
       updatedCartItems.delete(id)
    }

    const totalAmount = state.totalAmount -= price * values.find(x => x.id = id).count;

    return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: totalAmount 
    }
}

export default rootReducer;

