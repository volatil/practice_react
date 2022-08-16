import React , { useState } from 'react';
import $ from "jquery";
import HelmetResumen from 'components/Helmet/HelmetResumen';

import Loading from 'components/Loading/Loading';
import Button from "components/Button";

import { traePaises } from "helpers/functions";

import "assets/css/Universidades.css";
import Icono from 'components/Icono/Icono';

function Universidades () {
	
	const [ loading , setLoading ] = useState( false );
	const [universidades, setUniversidades] = useState();
	
	const buscarPais = async () => {
		setLoading( true );
		var buscando = $( ".buscador > input" ).val()
		traePaises( buscando , setUniversidades )
		setTimeout(() => {
			setLoading( false );
		}, 2000);
	};
	
	function Universidades( props ) {
		return (
			<div className="universidades">
				{
					universidades?.map((uni) => {
						return(
							<div className="universidad" key={uni.name}>
								<a href={uni.web_pages[0]} target="_blank" rel="noreferrer">
									<h2>{uni.name}</h2>
									<Button laclase="primary" texto="Visitar" />
								</a>
							</div>
						)
					})
				}
			</div>
		)
	};
	
	function Buscador() {
		return(
			<div className="buscador">
				<input className="buscaPais" type="text" list="alphas" placeholder="Ingresa Pais" />
				<datalist id="alphas">
					<option value="chile" />
					<option value="mexico" />
					<option value="bolivia" />
					<option value="spain" />
					<option value="peru" />
					<option value="argentina" />
				</datalist>
				<Button onClick={buscarPais} laclase="primary" texto="Buscar" />
			</div>
		)
	}
	
	if ( loading ) {
		return (
			<section id="lasuniversidades">
				<HelmetResumen title="Cargando Universidades ..." />
				<h2>
					<Icono nombre="school" />
					Universidades
				</h2>
				<Buscador />
				<Loading />
			</section>
		);
	};
	
	return ( 
		<section id="lasuniversidades">
			<HelmetResumen title="Universidades" />
			<h2>
				<Icono nombre="school" />
				Universidades
			</h2>
			<Buscador />
			<Universidades />
		</section>
	)
};

export default Universidades;