import React from "react";
import { NavLink } from "react-router-dom";

// COMPONENTS
import Icono from 'components/Icono/Icono';

// CSS
import "./Nav.css";

function Nav() {
	function Li({ link, nombre, arrow }) {
		return (
			<li>
				<NavLink className={({ isActive }) => (isActive ? "tamoactivo" : "none")} to={link} end >
					{nombre}
					{ arrow ? <Icono nombre="navigate_next" /> : "" }
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
					<Icono nombre="keyboard_arrow_down" />
					<ul>
						<Li nombre="Props" link="/props" arrow="si" />
					</ul>
				</li>
				<li>
					Fetch 
					<Icono nombre="keyboard_arrow_down" />
					<ul>
						<Li nombre="Clima" link="/clima" arrow="si" />
						<Li nombre="Libros" link="/libros" arrow="si" />
						<Li nombre="Rick and Morty" link="/rickandmorty" arrow="si" />
						<Li nombre="Todo en 90 Dias" link="/todoen90dias" arrow="si" />
						<Li nombre="Feriados" link="/feriados" arrow="si" />
						<Li nombre="Crypto" link="/crypto" arrow="si" />
						<Li nombre="Color" link="/color" arrow="si" />
						<Li nombre="Usuario" link="/usuario" arrow="si" />
						<Li nombre="Usuarios" link="/usuarios" arrow="si" />
						<Li nombre="Universidades" link="/universidades" arrow="si" />
						<Li nombre="Perrito Random" link="/perritorandom" arrow="si" />
						<Li nombre="Zoo" link="/zoo" arrow="si" />
					</ul>
				</li>
				<Li nombre="Contacto" link="/contacto" />
			</ul>
		</nav>
	);
}
		
export default Nav;
