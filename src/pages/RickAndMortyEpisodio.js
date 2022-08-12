import React, { useState , useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

// COMPONENTS
import Button from "../components/Button";
import HelmetResumen from "../components/Helmet/HelmetResumen";
import Loading from "../components/Loading/Loading";

// CSS
import "../assets/css/RickAndMortyEpisodio.css";

function RickAndMortyDetalle() {

	var location = useLocation();
	let navigate = useNavigate();
	
	// HABILITAR DESPUES DE TRABAJAR
	var slug = location.pathname.split("/rickandmorty/episodio/")[1];
	
	const [ loading , setLoading ] = useState( false );
	const [traeData, setTraeData] = useState();
	
	useEffect(() => {
	
		
		setLoading(true);
		// RANDOM SLUG
		/*
		let max = 826;
		let min = 1;
		const slug = Math.floor(Math.random() * (max - min + 1)) + min;
		*/
		const api = `https://rickandmortyapi.com/api/episode/${slug}`;
		fetch(api).then(api => api.json())
			.then(perso => {
				var personaje = {
					"id": perso.id ,
					"nombre": perso.name ,
					"fecha": perso.air_date ,
					"episodio": perso.episode ,
					/*
					"estado": function () {
						let estado = perso.status;
						if ( estado === "unknown" ) {
							estado = "Desconocido";
						} else if ( estado === "Alive" ) {
							estado = "Vivo";
						} else if ( estado === "Dead" ) {
							estado = "Muerto";
						} else if ( estado === "AAAAAAAA" ) {
							estado = "AAAAAAAA";
						} else {
							// alert(`Estado Desconocido: ${estado}`);
						}
						return estado;
					} ,
					*/
				};
				var todo = [];
				todo.push({
					id: personaje.id ,
					nombre: personaje.nombre ,
					fecha: personaje.fecha ,
					episodio: personaje.episodio ,
				});
				setTraeData(todo);
				setLoading(false);
			});
		
	},[ slug, setTraeData ]);

	if ( loading ) {
		return (
			<section id="RickAndMortyDetalle">
			<HelmetResumen title="Rick And Morty - Cargando ..." />
				<h2>Detalle</h2>
				<Loading />
			</section>
		);
	};

	function Episodio() {
		return (
			<div className="detalles">
			{/* <script type="text/javascript"> function googleTranslateElementInit() { new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element') } </script>
			<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> */}
	
				{
					traeData?.map((elepi) => {
						return (
							<div className="detalle" key={elepi.id}>
								<h3>[ { elepi.episodio } ] { elepi.nombre }</h3>
								<p><strong>Fecha Emisión: </strong>{ elepi.fecha }</p>
							</div>
						)
					})
				} 
			</div>
		)
	}

	return (
		<section id="RickAndMortyEpisodio">
			<HelmetResumen title={`Rick And Morty / Episodio ${traeData?.map((asdasdasd) => {return asdasdasd.nombre})}`} />
			<Episodio />
			<Button laclase="primary" onClick={() => navigate(-1)} texto="Volver" />
		</section>
	)

		
}

export default RickAndMortyDetalle;