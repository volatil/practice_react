import React , { useEffect , useState } from 'react';
import HelmetResumen from 'components/Helmet/HelmetResumen';
import Loading from 'components/Loading/Loading';

import 'assets/css/Usuario.css';

// https://randomuser.me/api/

function Usuario () {
	
	const [ loading , setLoading ] = useState( false );
	const [ usuario , setUsuario ] = useState();
	const [ fijatitle , setFijatitle ] = useState();
	
	useEffect(() => {
		
		setLoading( true );
		
		fetch( "https://randomuser.me/api/" )
		.then( x => x.json() )
		.then( x => {
			var getUsuario = [{
				"seed"          : x.info.seed ,
				"genero"        : function(){
					let genero = x.results[ 0 ].gender;
					if ( genero === "female" ) {
						genero = "femenino";
					} else if ( genero === "male" ) {
						genero = "masculino";
					} else {
						genero = "no identificado";
						alert( "no identificado[202208011631]" )
					};
					return genero;
				} ,
				"nombre"        : {
					"title" : x.results[ 0 ].name.title ,
					"nombre" : x.results[ 0 ].name.first ,
					"apellido" : x.results[ 0 ].name.last ,
				} ,
				"direccion"     : {
					"calle" : {
						"numero" : x.results[ 0 ].location.street.number ,
						"nombre" : x.results[ 0 ].location.street.name ,
					} ,
					"ciudad" : x.results[ 0 ].location.city ,
					"estado" : x.results[ 0 ].location.state ,
					"pais" : x.results[ 0 ].location.country ,
					"codigopostal" : x.results[ 0 ].location.postcode ,
					"cordenadas" : {
						"latitud" : x.results[ 0 ].location.coordinates.latitude ,
						"longitud" : x.results[ 0 ].location.coordinates.longitude ,
					} ,
					"zonahoraria" : {
						"gmt" : x.results[ 0 ].location.timezone.offset ,
						"descripcion" : x.results[ 0 ].location.timezone.description ,
					} ,
				} ,
				"mail" : x.results[ 0 ].email ,
				"edad"          : {
					"nacimiento" : function(){
						let nacimiento = x.results[ 0 ].dob.date;
						let fecha = nacimiento.split( "T" )[0];
						nacimiento = fecha;
						return nacimiento;
					} ,
					"edad" : x.results[ 0 ].dob.age ,
				} ,
				"telefono" : {
					"fijo" : x.results[ 0 ].phone ,
					"celular" : x.results[ 0 ].cell ,
				} ,
				"imagen_large"  : x.results[ 0 ].picture.large ,
				"nat" : x.results[ 0 ].nat ,
			}];

			setUsuario( getUsuario );
			setFijatitle( getUsuario[ 0 ].nombre.title + " " + getUsuario[ 0 ].nombre.nombre + " " + getUsuario[ 0 ].nombre.apellido );
			setLoading( false );
			
		});
	},[]);
	
	if ( loading ) {
		return (
			<section className="usuario">
				<HelmetResumen title="Cargando Usuario ..." />
				<h2>Usuario</h2>
				<Loading />
			</section>
		);
	};

	return ( 
		<section className="usuario">
			<HelmetResumen title={`Usuario: ${fijatitle}`} />
			<h2>Usuario</h2>
			<div className="elusuario">
				{
					usuario?.map((elusuario) => {
						return(
							<div key={elusuario.seed}>
								<img src={ elusuario.imagen_large } alt={ elusuario.nombre.nombre } />
								<p>
									<strong>{ elusuario.nombre.title }. { elusuario.nombre.nombre } { elusuario.nombre.apellido }</strong>
								</p>
								<ul>
									<li><strong>Edad:</strong> { elusuario.edad.edad } ({ elusuario.edad.nacimiento() })</li>
									<li><strong>Genero:</strong> { elusuario.genero() }</li>
									<li><strong>Telefono Celular:</strong> <a href={`tel:${ elusuario.telefono.celular }`}>{ elusuario.telefono.celular }</a></li>
									<li><strong>Telefono Fijo:</strong> <a href={`tel:${ elusuario.telefono.fijo }`}>{ elusuario.telefono.fijo }</a></li>
								</ul>
								<p>
									<strong>Direccion:</strong>
								</p>
								<ul>
									<li><strong>Calle:</strong> { elusuario.direccion.calle.nombre }, { elusuario.direccion.calle.numero }</li>
									<li><strong>Ciudad:</strong> { elusuario.direccion.ciudad }</li>
									<li><strong>Estado:</strong> { elusuario.direccion.estado }</li>
									<li><strong>Pais:</strong> { elusuario.direccion.pais } ({ elusuario.nat })</li>
									<li><strong>Codigo Postal:</strong> { elusuario.direccion.codigopostal }</li>
									<li><strong>Cordenadas:</strong> { elusuario.direccion.cordenadas.latitud } , { elusuario.direccion.cordenadas.longitud }</li>
									<li><strong>Zona Horaria:</strong> { elusuario.direccion.zonahoraria.gmt } { elusuario.direccion.zonahoraria.descripcion }</li>
								</ul>
								<p><strong>Mail:</strong> { elusuario.mail }</p>
							</div>
						);
					})
				}
			</div>
		</section>
	);
};

export default Usuario;