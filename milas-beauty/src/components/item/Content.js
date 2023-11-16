import React from "react";

import "./Content.css";

function Content(props) {
    return (
        <div className="item">
            <img src={props.image} alt=""/>
            <h3>{props.name}</h3>
            <p>{props.price}$</p>
            <button  className="aboutBtn">Details..</button>
        </div>
    );

}

export default Content;
