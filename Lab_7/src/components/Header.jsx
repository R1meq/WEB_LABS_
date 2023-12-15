import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";



function Header() {
        return <header>
                <div className="conteiner">
                    <Logo name="header_logo"/>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/catalog">Catalog</NavLink></li>
                            <li><NavLink to="/cart">Cart</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
}

export default Header;