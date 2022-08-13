import React , { useState } from 'react';
import $ from "jquery";
import HelmetResumen from '../components/Helmet/HelmetResumen';

import Loading from '../components/Loading/Loading';
import Button from "../components/Button";

import { traePaises } from "../helpers/functions";

import "../assets/css/Universidades.css";

function Universidades () {
	
	const [ loading , setLoading ] = useState( false );
	const [universidades, setUniversidades] = useState();
	
	const buscarPais = async () => {
		setLoading( true );
		var buscando = $( ".buscador > input" ).val()
		traePaises( buscando , setUniversidades )
		setTimeout(() => {
			setLoading( false );
		}, 5000);
	};
	
	function Universidades( props ) {
		return (
			<div className="universidades">
				{
					universidades?.map((uni) => {
						return(
							<div key={uni.name}>
								<h1>{uni.name}</h1>
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
				<h2>Universidades</h2>
				<Buscador />
				<Loading />
			</section>
		);
	};
	
	return ( 
		<section id="lasuniversidades">
			<HelmetResumen title="Universidades" />
			<h2>Universidades</h2>
			<Buscador />
			<Universidades />
		</section>
	)
};

export default Universidades;