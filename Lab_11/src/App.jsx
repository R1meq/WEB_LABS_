import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Item from "./pages/Item";
import { useEffect,useState } from "react";
import { getAllShoesRequset } from "./components/api";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import SuccessFormik from "./components/checkout/Success";


function App() {
    const [shoes, setShoes] = useState([]);
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        getAllShoesRequset()
            .then(resp => {
                setShoes(resp)
            })
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/catalog" element={ <Catalog /> }/>
                {shoes.map((el) => {return <Route key={el.id} path={`catalog/shoe/${el.id}`} element={<Item key={el.id} id={el.id} shoes={shoes}/>}/>})}
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/cart_formik" element={<Checkout />}/>
                <Route path="/formik_success" element={<SuccessFormik/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
