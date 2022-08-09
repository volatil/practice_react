import React , { useState , useEffect } from 'react';
import HelmetResumen from '../components/Helmet/HelmetResumen';
import Loading from '../components/Loading/Loading';

import '../assets/css/Zoo.css';

function Zoo () {
	
	const [ loading , setLoading ] = useState( false );
	const [ animales , setAnimales ] = useState();
	const api = "https://zoo-animal-api.herokuapp.com/animals/rand/10";
	
	useEffect(()=>{
		
		setLoading( true );
		
		fetch( api )
		.then( zoo => zoo.json() )
		.then( zoo => {
		
			var todo = [];
			
			for ( var count = 0; count <= zoo.length-1; count++ ) {
				var animal = {
					"id" : zoo[ count ].id ,
					"nombre" : zoo[ count ].name ,
					"latin" : zoo[ count ].latin_name ,
					"longitud_minima" : zoo[ count ].length_min ,
					"longitud_maxima" : zoo[ count ].length_max ,
					"peso_minimo" : zoo[ count ].weight_min ,
					"peso_maximo" : zoo[ count ].weight_max ,
					"esperanza" : zoo[ count ].lifespan ,
					"habitat" : zoo[ count ].habitat ,
					"alimento" : zoo[ count ].diet ,
					"locacion" : zoo[ count ].geo_range ,
					"imagen" : zoo[ count ].image_link ,
				};
				todo.push({ 
					"id" : animal.id ,
					"nombre" : animal.nombre ,
					"latin" : animal.latin ,
					"longitud_minima" : animal.longitud_minima ,
					"longitud_maxima" : animal.longitud_maxima ,
					"peso_minimo" : animal.peso_minimo ,
					"peso_maximo" : animal.peso_maximo ,
					"esperanza" : animal.esperanza ,
					"habitat" : animal.habitat ,
					"alimento" : animal.alimento ,
					"locacion" : animal.locacion ,
					"imagen" : animal.imagen ,
				});
			};
			
			setAnimales( todo );
			setLoading( false );
			
		});
	},[]);
	
	if ( loading ) {
		return (
			<section className="zoo">
				<HelmetResumen title="Cargando Animalitos ..." />
				<h2>Zoo</h2>
				<Loading />
			</section>
		);
	};
	
	return (
		<section className="zoo">
			<HelmetResumen title="Animalitos" />
			<h2>Zoo</h2>
			<div className="animales">
				{
					animales?.map((ani) => {
						return (
							<div className="animal" key={ ani.id }>
								<div className="imagen">
									<img src={ ani.imagen } alt={ ani.nombre } />
								</div>
								<p className="nombre">{ ani.nombre }<br/><span>({ ani.latin })</span></p>
								<ul>
									<li><strong>Longitud Maxima:</strong> { ani.longitud_maxima }</li>
									<li><strong>Longitud Minima:</strong> { ani.longitud_minima }</li>
									<li><strong>Peso Maximo:</strong> { ani.weight_max }</li>
									<li><strong>Peso Minimo:</strong> { ani.weight_min }</li>
									<li><strong>Esperanza de Vida:</strong> { ani.esperanza }</li>
									<li><strong>Habitat:</strong> { ani.habitat }</li>
									<li><strong>Alimentacion:</strong> { ani.alimento }</li>
									<li><strong>Locación:</strong> { ani.locacion }</li>
								</ul>
							</div>
						);
					})
				}
			</div>
		</section>
	);
};


export default Zoo;