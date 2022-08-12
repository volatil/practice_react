import React from "react";
import { NavLink } from "react-router-dom";

// IMAGENES
import ArrowDown from "../assets/imagenes/arrowdown.svg";

// CSS
import "./Nav.css";

function Nav() {
	function Li({ link, nombre , icono }) {
		return (
			<li>
				<NavLink className={({ isActive }) => (isActive ? "tamoactivo" : "none")} to={link} end >
					<span className="material-symbols-outlined">{icono}</span>
					{nombre}
				</NavLink>
			</li>
		);
	}
	return (
		<nav>
			<ul>
				<Li nombre="Inicio" link="/" icono="home" />
				<li>
					ComponenTEST <img className="arrowDown" src={ArrowDown} alt="Arrow Down" />
					<ul>
						<Li nombre="Props" link="/props" icono="attachment" />
					</ul>
				</li>
				<li>
					Fetch <img className="arrowDown" src={ArrowDown} alt="Arrow Down" />
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
				<Li nombre="Contacto" link="/contacto" icono="perm_contact_calendar" />
			</ul>
		</nav>
	);
}
		
export default Nav;
