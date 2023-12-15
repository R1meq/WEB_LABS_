import React from "react";

function Select(props) {
    
    return (
    <select onChange={props.function} value={props.value} id="select"> 
        {props.optionValues.map((item) => { return  <option value={item.value.toLowerCase()}>{item.value}</option> })}
    </select>
    )
}

export default Select;