import React , { useEffect , useState } from "react";
import axios from "axios";
// import { NavLink , useLocation } from "react-router-dom";
import $ from "jquery";
import HelmetResumen from "components/Helmet/HelmetResumen";
// COMPONENTS
import Icono from 'components/Icono/Icono';
import Button from 'components/Button';
// import BuscadorLibros from 'components/Libros/BuscadorLibros';

// FUNCTIONS
// import {traeLibro} from "components/Libros/Functions";

import 'components/Libros/BuscadorLibros.css';

// https://www.googleapis.com/books/v1/volumes?q=${ book }

function Libros () {

	const [ resultado , setResultado ] = useState();
	
	useEffect(() => {
		console.log( `Actualizando ...` );
		// traeLibro(setResultado)
	},[]);
	
	const traeLibro = async() => {
		var loBuscado = $( "input.input_buscar" ).val();
		var peticion = await axios.get( `https://www.googleapis.com/books/v1/volumes?q=${loBuscado}` )
		console.log( peticion.data.items )
		setResultado( peticion.data.items )
	}
	
	function BuscadorLibros () {
		return (
			<div className="buscador">
				<div>
					<label>Buscar Libro</label>
					<input className="input_buscar" type="text" placeholder="Baldor? Porota? Papelucho?" />
				</div>
				<Button onClick={traeLibro} laclase="primary" texto="BUSCAR" />
			</div>
		);
	}
	
	function ResultadosLibros() {
		return (
			<div className="resultados">
				<h3>Resultados:</h3>
				<br></br>
				<div>
				{
					resultado?.map((resul) => {
						return(
							<div key={resul.etag}>
								<h5>{resul.volumeInfo.title} ({resul.volumeInfo.publishedDate})</h5>
							</div>
						)
					})
				}
				</div>
			</div>
		)
	}
	
	return (
		<section className="libros">
			<HelmetResumen title="Buscador de Libros" />
			<h2>
				<Icono nombre="menu_book" />
				Libros
			</h2>
			<BuscadorLibros />
			<ResultadosLibros />
		</section>
	);
	
};

export default Libros;