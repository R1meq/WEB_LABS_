import React from "react";
import { logoUrl } from "../data";

function Logo(props) {
    return <img className={props.name} src={logoUrl} width={"150px"} height={"150px"} />;
}

export default Logo;