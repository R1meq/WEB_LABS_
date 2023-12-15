import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Item from "./pages/Item";
import { useEffect,useState } from "react";
import { getAllShoesRequset } from "./components/api";


function App() {
    const [shoes, setShoes] = useState([]);

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
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
