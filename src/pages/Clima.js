import React, { useEffect } from "react";

// COMPONENTS
import Icono from "components/Icono/Icono";
import { useState } from "react";

import { traducir } from "helpers/traducir";

// https://api.publicapis.org/entries

function Clima() {

	const [ clima , setClima ] = useState();

	useEffect(() => {
		var locacion = "san esteban valparaiso"
		var api = `https://weatherdbi.herokuapp.com/data/weather/${ locacion }`;
		fetch( api ).then( api => api.json() )
			.then( clima => {
				console.log( clima );
				var objClima = {
					"locacion" : clima.region ,
					"actual" : {
						"diahora" : function(){
							let diahora = clima.currentConditions.dayhour;
							return traducir(diahora)
						} ,
						"temp" : {
							"c" : function(){
								let c = clima.currentConditions.temp.c;
								return c;
							} ,
						} ,
						"imagen" : function() {
							let imagen = clima.currentConditions.iconURL;
							return imagen;
						} ,
						"pronostico" : function() {
							let pronostico = clima.currentConditions.comment;
							return traducir(pronostico);
						} ,
					}
				};
				var todo = [];
				todo.push({ 
					"locacion" : objClima.locacion , 
					"actual_diahora" : objClima.actual.diahora() ,
					"actual_c" : objClima.actual.temp.c() ,
					"actual_imagen" : objClima.actual.imagen() ,
					"actual_pronostico" : objClima.actual.pronostico() ,
				});
				setClima( todo )
			})
	},[])
	
	function ClimaEspecifico() {
		
		return (
			<>
				{
					clima?.map((cli) => {
						return (
							<div className="clima" key={cli.locacion}>
								<h4>{cli.locacion}</h4>
								<img style={{ width: "180px" }} src={cli.actual_imagen} alt={cli.locacion} />
								<p>{cli.actual_pronostico}</p>
								<p>{cli.actual_diahora}</p>
								<p>{cli.actual_c}°C</p>
							</div>
						)
					})
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
			<ClimaEspecifico />
		</section>
	)
}

export default Clima;