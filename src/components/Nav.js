import React from 'react';
import { NavLink } from "react-router-dom";

import ArrowDown from '../assets/arrowdown.svg';

import './Nav.css';

function Nav () {
	return (
		<nav>
			<ul>
				<li>
					<NavLink  activeClassName="selected" to="/">Inicio</NavLink>
				</li>
				<li>
					<NavLink  activeClassName="selected" to="/map">Map</NavLink>
				</li>
				<li>
					<NavLink  activeClassName="selected" to="/perritorandom">Perrito Random</NavLink>
				</li>
				<li>
					Fetch <img src={ArrowDown} alt="Arrow Down" />
						<ul>
							{/* <li>
								<NavLink  activeClassName="selected" to="/perritorandom">Perrito Random</NavLink>
							</li> */}
							<li>
								<NavLink  activeClassName="selected" to="/universidades">Universidades</NavLink>
							</li>
							<li>
								<NavLink  activeClassName="selected" to="/usuario">Usuario</NavLink>
							</li>
						</ul>
				</li>
				<li>
					<NavLink  activeClassName="selected" to="/contacto">Contacto</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;