import React from "react";
import { NavLink } from "react-router-dom";

// IMAGENES
import ArrowDown from "../assets/imagenes/arrowdown.svg";

// CSS
import "./Nav.css";

function Nav() {
  function Li({ link, nombre }) {
    return (
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "tamoactivo" : "none")}
          to={link}
          end
        >
          {nombre}
        </NavLink>
      </li>
    );
  }
  return (
    <nav>
      <ul>
        <Li nombre="Inicio" link="/" />
        <li>
          Fetch <img src={ArrowDown} alt="Arrow Down" />
          <ul>
            <Li nombre="Rick and Morty" link="/rickandmorty" />
            <Li nombre="Todo en 90 Dias" link="/todoen90dias" />
            <Li nombre="Feriados" link="/feriados" />
            <Li nombre="Crypto" link="/crypto" />
            <Li nombre="Color" link="/color" />
            <Li nombre="Usuario" link="/usuario" />
            <Li nombre="Universidades" link="/universidades" />
            <Li nombre="Perrito Random" link="/perritorandom" />
            <Li nombre="Zoo" link="/zoo" />
          </ul>
        </li>
        <Li nombre="Contacto" link="/contacto" />
      </ul>
    </nav>
  );
}

export default Nav;
