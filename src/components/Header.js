import React from 'react'
import Vector from "../images/Vector.svg"

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Vector} alt="Логотип место Россия" />
        </header>
    );
  }
  
  export default Header;
  