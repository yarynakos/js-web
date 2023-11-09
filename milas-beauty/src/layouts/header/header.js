import React from "react";
import logo from '../../assets/images/homePage/logo.svg';
import "./header.css"


function Header() {
    return (
        <header>
            <div className="logoImage">
                <img src={logo} alt=""/>
            </div>
            <div className="linksSec">
                <a href={""}>CATALOG</a>
                <a href={""}>CART</a>
            </div>
        </header>
    );
};

export default Header;
