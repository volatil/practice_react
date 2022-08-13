import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import "./Nav.css";

function Nav() {
	function Li({ link, nombre }) {
		return (
			<li>
				<NavLink className={({ isActive }) => (isActive ? "tamoactivo" : "none")} to={link} end >
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
					ComponenTEST 
					<span className="material-symbols-outlined">keyboard_arrow_down</span>
					<ul>
						<Li nombre="Props" link="/props" />
					</ul>
				</li>
				<li>
					Fetch 
					<span className="material-symbols-outlined">keyboard_arrow_down</span>
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
