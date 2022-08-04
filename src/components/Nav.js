import React from 'react';
import { NavLink } from "react-router-dom";


import ArrowDown from '../assets/arrowdown.svg';

import './Nav.css';

function Nav () {
	return (
		<nav>
			<ul>
				<li>
					<NavLink  className={({isActive}) => (isActive ? "tamoactivo" : 'none')} to="/">Inicio</NavLink>
				</li>
				<li>
					<NavLink  className={({isActive}) => (isActive ? "tamoactivo" : 'none')} to="/map">Map</NavLink>
				</li>
				<li>
					<NavLink  className={({isActive}) => (isActive ? "tamoactivo" : 'none')} to="/libro">Libro</NavLink>
				</li>
				<li>
					<a href="#fetch">Fetch <img src={ArrowDown} alt="Arrow Down" /></a>
						<ul>
							<li>
								<NavLink  className={({isActive}) => (isActive ? "tamoactivo" : 'none')} to="/perritorandom">Perrito Random</NavLink>
							</li>
							<li>
								<NavLink  className={({isActive}) => (isActive ? "tamoactivo" : 'none')} to="/universidades">Universidades</NavLink>
							</li>
							<li>
								<NavLink  className={({isActive}) => (isActive ? "tamoactivo" : 'none')} to="/usuario">Usuario</NavLink>
							</li>
							<li>
								<NavLink  className={({isActive}) => (isActive ? "tamoactivo" : 'none')} to="/zoo">Zoo</NavLink>
							</li>
							<li>
								<NavLink  className={({isActive}) => (isActive ? "tamoactivo" : 'none')} to="/colorrandom">Color Random</NavLink>
							</li>
						</ul>
				</li>
				<li>
					<NavLink  className={({isActive}) => (isActive ? "tamoactivo" : 'none')} to="/contacto">Contacto</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;