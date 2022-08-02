//tentando entender por que eu digito isso e nao aparece o que preciso. não sei por que o refce nao funciona...

import React from "react";
import "./Header.css"
import TeslaLogo from "../assets/teslaLogoSmall.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla logo"></img>
            </div>

            <div className="header__center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>

            
        </div>
    )
}

export default Header