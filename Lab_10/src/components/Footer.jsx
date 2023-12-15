import React from "react";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";
import Logo from "./Logo";

function createLinks(item) {
    return <SocialLink key={item.key} url={item.url}/>;
}

function Footer() {
    return (
            <footer>
            <div className="conteiner">
                <div className="footer_inner">
                    <div className="footer_inner_braning">
                    Independent since 1906, we empower people<br />
                    through sport and craftsmanship to create<br />
                    positive change in communities around the<br />
                    world
                    </div>
                    <Logo name="footer_logo"/>
                    <div className="footer_social">
                        {socialLinks.map(createLinks)}
                    </div>
                </div>
                <hr />
                <div className="footer_copyright">
                    2023 © IoT copyright all rights reserved
                </div>
            </div>
           </footer>
    );
}

export default Footer;