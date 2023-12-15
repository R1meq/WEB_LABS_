import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/catalog" element={ <Catalog /> }/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
