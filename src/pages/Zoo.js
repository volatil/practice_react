import React , { useState , useEffect } from 'react';
import HelmetResumen from 'components/Helmet/HelmetResumen';
import Loading from 'components/Loading/Loading';

import { traeZoo } from "helpers/functions";

import 'assets/css/Zoo.css';
import Icono from 'components/Icono/Icono';

function Zoo () {
	
	const [ loading , setLoading ] = useState( false );
	const [ animales , setAnimales ] = useState();
	
	useEffect(()=>{
		
		setLoading( true );
		traeZoo(setAnimales)
		setLoading( false );
		
	},[]);
		
	function Animalitos(params) {
		return (
			<div className="animales">
			{
				animales?.map((animal) => {
					return(
						<div className="animal" key={animal.id}>
							<div className="imagen">
								<img src={ animal.image_link } alt={ animal.name } />
							</div>
							<p className="nombre">{ animal.name }<br/><span>({ animal.latin_name })</span></p>
							<ul>
								<li><strong>Longitud Maxima:</strong> { animal.length_max } ft.</li>
								<li><strong>Longitud Minima:</strong> { animal.length_min } ft.</li>
								<li><strong>Peso Maximo:</strong> { animal.weight_max } lb.</li>
								<li><strong>Peso Minimo:</strong> { animal.weight_min } lb.</li>
								<li><strong>Esperanza de Vida:</strong> { animal.lifespan }</li>
								<li><strong>Habitat:</strong> { animal.habitat }</li>
								<li><strong>Alimentacion:</strong> { animal.diet }</li>
								<li><strong>Locación:</strong> { animal.geo_range }</li>
								<li><strong>Tiempo de Actividad:</strong> { animal.active_time }</li>
							</ul>
						</div>
					)
				})
			}
			</div>
		)
	}
	
	if ( loading ) {
		return (
			<section className="zoo">
				<HelmetResumen title="Cargando Animalitos ..." />
				<h2>
					<Icono nombre="cruelty_free" />
					Zoo
				</h2>
				<Loading />
			</section>
		);
	};
				
	return (
		<section className="zoo">
			<HelmetResumen title="Animalitos" />
			<h2>
				<Icono nombre="cruelty_free" />
				Zoo
			</h2>
			<Animalitos />
		</section>
	);
	
};

export default Zoo;