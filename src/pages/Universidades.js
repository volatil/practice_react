import React , {useEffect , useState} from 'react';
import HelmetResumen from '../components/Helmet/HelmetResumen';
import $ from "jquery";

import Loading from '../components/Loading/Loading';
import Button from "../components/Button";

import "../assets/css/Universidades.css";

function Universidades () {
	
	const [ loading , setLoading ] = useState( false );
	const [ u_nombre , setU_nombre ] = useState();
	const [imprimeAlphaCode, setImprimeAlphaCode] = useState();
	const [exportarBuscador, setExportarBuscador] = useState();
	
	useEffect(() => {
		
		setLoading( true );
		
		const traeUniversidades = function (pais = "chile") {
			var universidades = `http://universities.hipolabs.com/search?country=${pais}`;
			fetch(universidades).then(x => x.json())
				.then(x => {
						
					var todo = [];
				
					for (var count = 0; count <= 63; count++) {
						var uni = {
							"nombre": x[count].name,
							"web": x[count].web_pages,
							"simbolo": x[count].alpha_two_code,
							"dominio": x[count].domains,
						}
						todo.push({
							"posicion": count,
							"nombre": uni.nombre,
							"web": uni.web,
							"simbolo": uni.simbolo,
							"dominio": uni.dominio
						});
					};
					setU_nombre(todo);
					setLoading(false);
				})
		};
		traeUniversidades("argentina");
		
		const traePaises = function () {
			
			var universidades = `http://universities.hipolabs.com/search`;
			fetch(universidades).then(x => x.json())
				.then(x => {
					var casitodo = [];
				
					for (var count = 0; count <= x.length-1; count++) {
					
						var uni = {
							"pais": x[count].country,
						}
						
						for( var i = 0; i < casitodo.length; i++){ 
							if ( casitodo[i].pais === uni.pais) { 
								casitodo.splice(i, 1); 
							}
						}
						
						casitodo.push({
							"pais": uni.pais,
						});
						
					};
					setImprimeAlphaCode(casitodo);
					setLoading(false);
				})
		};
		traePaises();
		
		const buscadorPorPais = function () {
			let paisPorBuscar = $(".buscaPais").val();
			console.log( `Buscar: ${paisPorBuscar}` );	
			traeUniversidades(paisPorBuscar);
		};
		setExportarBuscador(buscadorPorPais())
		
		
	},[]);
	
	
	if ( loading ) {
		return (
			<section className="lasuniversidades">
				<h2>Universidades</h2>
				<Loading />
			</section>
		);
	};
	
	return ( 
		<section id="lasuniversidades">
			<HelmetResumen title="Universidades" />
			<h2>Universidades</h2>
			<div className="buscador">
				<input className="buscaPais" type="text" list="alphas" placeholder="Ingresa Pais" />
				<datalist id="alphas">
					{
						imprimeAlphaCode?.map((alpha) => {
							return (
								<option key={alpha.pais} value={alpha.pais} />
							)
						})
					}
					
				</datalist>
				<Button laclase="warning" texto="Buscar" />
			</div>
			<div className="universidades">
				{
					u_nombre?.map(( uni ) => {
						return(
							<div className="universidad" key={ uni.nombre }>
								<h4><strong>[{uni.simbolo}]</strong> { uni.nombre }</h4>
								<p>
									<a target="_blank" href={ uni.web } rel="noreferrer">{ uni.dominio }</a>
								</p>
							</div>
						)
					})
				}
			</div>
		</section>
	)
};

export default Universidades;