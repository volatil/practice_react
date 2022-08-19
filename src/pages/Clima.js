import React from "react";
import axios from "axios";
import $ from "jquery";
import HelmetResumen from "components/Helmet/HelmetResumen";

// COMPONENTS
import Loading from "components/Loading/Loading";
import Icono from "components/Icono/Icono";
import { useState } from "react";

// FUNCTIONS
import { traducir ,cambioImagenClima } from "helpers/traducir";

// CSS
import "../assets/css/Clima.css"
import Button from "components/Button";

// https://api.publicapis.org/entries

function Clima() {

	const [ clima , setClima ] = useState("");
	const [ loading , setLoading ] = useState(false);

	const traeClima = async ( locacion ) => {
		const peticion = await axios.get( `https://weatherdbi.herokuapp.com/data/weather/${ locacion }` );
		console.log( peticion );
		setClima( peticion.data )
		setLoading( false );
	}
	
	function Buscador() {
		function elQueBusca() {
			setLoading( true );
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
							<h1>HOY</h1>
							<h3>{clima.region}</h3>
							<img src={cambioImagenClima(clima.currentConditions.iconURL)} alt={clima.region} />
							<h4>{clima.currentConditions.temp.c}°C</h4>
							<ul>
								<li><strong>{traducir( clima.currentConditions.comment )}</strong></li>
								<li>{traducir( clima.currentConditions.dayhour )}</li>
								<li><strong>Humedad: </strong>{clima.currentConditions.humidity}</li>
								<li><strong>Precipitaciones: </strong>{clima.currentConditions.precip}</li>
							</ul>
						</div>
					:
						null
				}
			</>
		)
	};
	
	const ClimaRestosDias = function (  ) {
	
		return (
			<div className="climas">
				{
					clima.next_days?.map((nexts , i) => {
						return (
							<div className="climafuturo" data-key={i} key={i}>
								<h2>{traducir( nexts.day )}</h2>
								<img src={ cambioImagenClima( nexts.iconURL ) } alt={clima.day} />
								<ul>
									<li>{traducir( nexts.comment )}</li>
									<li><strong>Max: </strong>{nexts.max_temp.c}° / <strong>Min: </strong>{nexts.min_temp.c}°</li>
								</ul>
							</div>
						)
					})
				}
			</div>
		)
		
	};
	
	if ( clima ){
		var regionTitle = clima.region;
	}
	
	return (
		<section id="clima">
			<HelmetResumen title={`Clima ${regionTitle}`} />
			<h2>
				<Icono nombre="flood" />
				Clima
			</h2>
			<Buscador />
			{ loading ? <Loading /> : null }
			<ClimaEspecifico />
			<ClimaRestosDias />
		</section>
	)
}

export default Clima;