import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import isoHeader from "../../assets/imagenes/isoHeader.png"

function Header() {

  return (
    <header>
      <Link to="/">
        <h1 className="eljeader">
          <img src={isoHeader} alt="CODE" />
          <p>
            <span>{`{REACT}`}</span> Practice;
          </p>
        </h1>
      </Link>
    </header>
  );
}

export default Header;
