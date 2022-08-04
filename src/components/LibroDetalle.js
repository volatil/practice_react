import React, { useEffect , useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";

import HelmetResumen from "./HelmetResumen";
import Loading from './Loading';
import Button from "./Button";

function LibroDetalle () {
	
	const [ traeInfo , setTraeInfo ] = useState();
	const [ traeTitulo , setTraeTitulo ] = useState();
	const [ loading , setLoading ] = useState( false );
	
	var idlibro = useLocation().pathname.split( "/detalle/" )[1];
	const navigate = useNavigate();

	useEffect(() => {

		setLoading( true );
		
		const api = `https://www.googleapis.com/books/v1/volumes/${ idlibro }`;
		fetch( api )
		.then( detalle => detalle.json() )
		.then( detalle => {
			
			var todoData = [];
			var todoTitulo = [];
			
			for ( var count = 0; count <= 0; count++ ) {
				var data = {
					"id" : detalle.id ,
					"titulo" : detalle.volumeInfo.title ,
					"autor" : detalle.volumeInfo.authors ,
					"imagen" : function(){
						let imagen = detalle.volumeInfo.imageLinks;
						if ( imagen ) {
							imagen = detalle.volumeInfo.imageLinks.thumbnail;
							return imagen;
						} else {
							imagen = "https://ouch-cdn2.icons8.com/DP-WOV6CKiyzfKpw4jgLyhW1t0lCk3ca-WuruEH9ZHY/rs:fit:455:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjU1/LzM3OGRkMjBjLWQ5/OGMtNGE3ZS1hYTQx/LWY3NDg0NjQwYzk2/Mi5zdmc.png";
							return imagen;
						};
					} , 
				}
				todoData.push({ 
					"id" : data.id , 
					"titulo" : data.titulo , 
					"autor" : data.autor ,
					"imagen" : data.imagen() ,
				});
				todoTitulo.push({
					"titulo" : data.titulo ,
				});
			};
			
			// console.log( `Algo: ${ todoTitulo[ 0 ].titulo }` );
			
			setTraeInfo( todoData );
			setTraeTitulo( todoTitulo[ 0 ].titulo );

			setLoading( false );

		})
		
	},[idlibro,traeTitulo]);
	
	if ( loading ) {
		return (
			<section className="detalleLibro">
				<HelmetResumen title="Cargando Libro ..." />
				<h2>DETALLE LIBRO</h2>
				<Loading />
			</section>
		);
	};

	return (
		<section className="detalleLibro">
			<HelmetResumen title={ `${traeTitulo}` } />
			<h2>DETALLE LIBRO</h2>
			<Button texto="Volver" onclick={() => navigate(-1)} />
				{
					traeInfo?.map( ( info ) => {
						return (
							<div className="detalle" key={ info.id }>
								<img src={ info.imagen } alt={ info.titulo } />
								<h5>{ info.titulo }</h5>
								<p>{ info.autor }</p>
							</div>
						);
					})
				}
		</section>
	);
}

export default LibroDetalle;