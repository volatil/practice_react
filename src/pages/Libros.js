import React , { useState } from "react";
import axios from "axios";
// import { NavLink , useLocation } from "react-router-dom";
import $ from "jquery";
import HelmetResumen from "components/Helmet/HelmetResumen";
// COMPONENTS
import Icono from 'components/Icono/Icono';
import Button from 'components/Button';

import "../components/Libros/BuscadorLibros.css";

function Libros () {

	const [ resultado , setResultado ] = useState();
	
	function BuscadorLibros () {
	
		const traeLibro = async() => {
			var loBuscado = $( "input.input_buscar" ).val();
			if ( loBuscado.length === 0 ) {
				console.log( `FALLO uwu` );
				setResultado( null )
			} else {
				var peticion = await axios.get( `https://www.googleapis.com/books/v1/volumes?q=${loBuscado}` )
				setResultado( peticion.data.items )
			};
			
		}
		
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
			<section id="resultados">
				{
					resultado != null ? <h3>Resultados:</h3> : ""
				}
				
				<div className="resultados">
				{
					resultado != null ?
						resultado?.map((resul) => {
							return(
								<div className="resultado" key={resul.etag}>
									{
										resul.volumeInfo.imageLinks ? 
											<img src={resul.volumeInfo.imageLinks.thumbnail} alt={resul.volumeInfo.title} />
										: 
										<img src="https://books.google.com/books/content?id=oITaAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70GzwWtoIppkWzgg4fiKsyLxZ99P0xmfJ8naz4Jz7dPZswXxsv1XR4of18LTnNTO5q5XD42k024UunLxdL6zr0PG_R6NF_P5VaiKgtSgsjhOQnBuPNhhrJYnshZ3W4Wr0aOaqzY" alt={resul.volumeInfo.title} />
									}
									<h5>{resul.volumeInfo.title}</h5>
									<span>({resul.volumeInfo.publishedDate})</span>
								</div>
							)
						})
					: 
						""
				}
				</div>
			</section>
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