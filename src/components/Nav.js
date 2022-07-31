import React from 'react';
import { NavLink } from "react-router-dom";

function Nav () {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Inicio</NavLink>
				</li>
				<li>
					<NavLink to="/map">Map</NavLink>
				</li>
				<li>
					Fetch
				</li>
				<li>
					<ul>
						<li>
							<NavLink to="/perritorandom">Perrito Random</NavLink>
						</li>
						<li>
							<NavLink to="/universidades">Universidades</NavLink>
						</li>
					</ul>
				</li>
				<li>
					<NavLink to="/contacto">Contacto</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;