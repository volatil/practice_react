import React from 'react';
import { NavLink } from "react-router-dom";


import ArrowDown from '../assets/arrowdown.svg';

import './Nav.css';

function Nav () {
	return (
		<nav>
			<ul>
				<li>
					<NavLink  className={({isActive}) => (isActive ? "active-style" : 'none')} to="/">Inicio</NavLink>
				</li>
				<li>
					<NavLink  className={({isActive}) => (isActive ? "active-style" : 'none')} to="/map">Map</NavLink>
				</li>
				<li>
					<NavLink  className={({isActive}) => (isActive ? "active-style" : 'none')} to="/perritorandom">Perrito Random</NavLink>
				</li>
				<li>
					Fetch <img src={ArrowDown} alt="Arrow Down" />
						<ul>
							{/* <li>
								<NavLink  className={({isActive}) => (isActive ? "active-style" : 'none')} to="/perritorandom">Perrito Random</NavLink>
							</li> */}
							<li>
								<NavLink  className={({isActive}) => (isActive ? "active-style" : 'none')} to="/universidades">Universidades</NavLink>
							</li>
							<li>
								<NavLink  className={({isActive}) => (isActive ? "active-style" : 'none')} to="/usuario">Usuario</NavLink>
							</li>
						</ul>
				</li>
				<li>
					<NavLink  className={({isActive}) => (isActive ? "active-style" : 'none')} to="/contacto">Contacto</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;