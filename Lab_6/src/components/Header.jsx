import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";



function Header() {
        return <header>
                <div className="conteiner">
                    <Logo name="header_logo"/>
                    <Navigation />
                </div>
            </header>
}

export default Header;