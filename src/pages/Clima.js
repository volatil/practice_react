import React from "react";
import axios from "axios";
import $ from "jquery";

// COMPONENTS
import Icono from "components/Icono/Icono";
import { useState } from "react";

// FUNCTIONS
import { traducir } from "helpers/traducir";

// CSS
import "assets/css/Clima.css"
import Button from "components/Button";

// https://api.publicapis.org/entries

function Clima() {

	const [ clima , setClima ] = useState("");

	const traeClima = async ( locacion ) => {
		const peticion = await axios.get( `https://weatherdbi.herokuapp.com/data/weather/${ locacion }` );
		console.log( peticion );
		// console.log( peticion.data.region );
		setClima( peticion.data )
	}
	
	function Buscador() {
		function elQueBusca() {
			var loquevoyabuscar = $( ".buscador > input" ).val();
			console.log( `Buscando: ${ loquevoyabuscar }` );
			traeClima( loquevoyabuscar )
		}
		return(
			<div className="buscador">
				<input style={{ width: "270px" , padding: "5px" , height: "40px" , marginBottom: "10px" }} type="text" placeholder="Ingresa tu ciudad" defaultValue={clima.region} />
				<Button onClick={elQueBusca} laclase="primary" texto="Buscar" />
			</div>
		)
	}
	
	function ClimaEspecifico() {
		
		return (
			<>
		
				{
					clima ? 
						<div className="clima" key={clima.region}>
							<h4>{clima.region}</h4>
							<img src={clima.currentConditions.iconURL} alt={clima.region} />
							<h5>{clima.currentConditions.temp.c}°C</h5>
							<ul>
								<li>{traducir( clima.currentConditions.comment )}</li>
								<li>{traducir( clima.currentConditions.dayhour )}</li>
								<li>Humedad: {clima.currentConditions.humidity}</li>
							</ul>
						</div>
					:
						null
				}
			</>
		)
	};
	

	return (
		<section id="clima">
			<h2>
				<Icono nombre="flood" />
				Clima
			</h2>
			<Buscador />
			<ClimaEspecifico />
		</section>
	)
}

export default Clima;