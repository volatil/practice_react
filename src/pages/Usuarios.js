import { useEffect , useState } from "react";

import Icono from "components/Icono/Icono";

function Usuarios() {
	
	const [ usuario , setUsuario ] = useState();
	
	useEffect(() => {
		var api = "https://fakerapi.it/api/v1/companies?_seed=12455&_quantity=70";
		fetch( api ).then(value => value.json())
			.then( x => {
				console.log( x.data[0] );
				var todo = [];
				for ( var count = 0; count <= x.data.length-1; count++ ) {
					let resumen = x.data[ count ];
					var usuario = {
						"id" : resumen.id ,
						"nombre" : resumen.name ,
						"vat" : resumen.vat ,
						"email" : resumen.email ,
						"genero" : resumen.contact.gender ,
						"imagen" : function(){
							let imagen = `https://xsgames.co/randomusers/assets/avatars/${ this.genero }/${ this.id }.jpg`;
							return imagen;
						} ,
						"web" : resumen.website ,
						"webCorta" : function(){
							let webCorta = resumen.website.split( "//" )[1];
							return webCorta;
						} ,
						"pais" : resumen.country ,
						"telefono" : resumen.phone ,
					};
					todo.push({
						"id" : usuario.id ,
						"nombre" : usuario.nombre ,
						"vat" : usuario.vat ,
						"email" : usuario.email,
						"imagen" : usuario.imagen() ,
						"web" : usuario.web ,
						"webCorta" : usuario.webCorta() ,
						"pais" : usuario.pais ,
						"telefono" : usuario.telefono ,
					});
				};
				setUsuario( todo );
			})
	},[]);
	
	function UsuarioUnico() {
		return (
			<>
				{
					usuario?.map((user) => {
						return(
							<div style={{ padding: "10px 0" , border: "1px solid #ccc" , width: "23%" , marginBottom: "30px" , height: "460px" }} className="usuario" key={user.vat}>
								<img style={{ borderRadius: "50%" }} src={ user.imagen } alt={ user.nombre } />
								<h3>[{ user.id }] { user.nombre }</h3>
								<p>Pais: { user.pais }</p>
								<ul>
									<li>
										<a href={`mailto:${ user.email }`}>{ user.email }</a>
									</li>
									<li>
										<a href={`tel:${ user.email }`}>{ user.telefono }</a>
									</li>
									<li>
										<a href={ user.web }>{ user.webCorta }</a>
									</li>
								</ul>
							</div>
						)
					})
				}
			</>
		)
	}
	
	return (
		<section id="usuarios">
			<h2>
				<Icono nombre="group"/>
				Usuarios
			</h2>
			<div style={{ display: "flex" , flexWrap: "wrap" , justifyContent: "space-evenly" }}>
				<UsuarioUnico />
			</div>
		</section>
	)
}
export default Usuarios;