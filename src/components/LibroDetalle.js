import React, { useEffect , useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";

function LibroDetalle () {
	
	const [ traeInfo , setTraeInfo ] = useState();
	
	var idlibro = useLocation().pathname.split( "/detalle/" )[1];

	useEffect(() => {
		
		const api = `https://www.googleapis.com/books/v1/volumes/${ idlibro }`;
		fetch( api )
		.then( detalle => detalle.json() )
		.then( detalle => {
			
			var todo = [];
			
			for ( var count = 0; count <= 0; count++ ) {
				var data = {
					"id" : detalle.id ,
					"titulo" : detalle.volumeInfo.title ,
					"autor" : detalle.volumeInfo.authors ,
					"imagen" : function(){
						let imagen = detalle.volumeInfo.imageLinks;
						if ( imagen ) {
							console.log( `SI HAY IMAGEN` );
							imagen = detalle.volumeInfo.imageLinks.thumbnail;
							return imagen;
						} else {
							console.log( `NO HAY IMAGEN` );
							imagen = "https://ouch-cdn2.icons8.com/DP-WOV6CKiyzfKpw4jgLyhW1t0lCk3ca-WuruEH9ZHY/rs:fit:455:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjU1/LzM3OGRkMjBjLWQ5/OGMtNGE3ZS1hYTQx/LWY3NDg0NjQwYzk2/Mi5zdmc.png";
							return imagen;
						};
					} , 
				}
				todo.push({ 
					"id" : data.id , 
					"titulo" : data.titulo , 
					"autor" : data.autor ,
					"imagen" : data.imagen() ,
				});
			};

			setTraeInfo( todo );
			
		})
		
	},[idlibro]);

	const navigate = useNavigate();

	return (
		<section className="detalleLibro">
			<h2>DETALLE LIBRO</h2>
			<button onClick={() => navigate(-1)}>Volver</button>
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