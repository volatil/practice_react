import React , { useEffect , useState } from "react";
import Loading from './Loading';
import { NavLink , useLocation } from "react-router-dom";

import BuscadorLibros from './BuscadorLibros';
import Button from './Button';

import './Libros.css';

function Libros () {

	const [ loading , setLoading ] = useState( false );
	const [ buscador , setBuscador ] = useState( false );
	const [ elLibro , setElLibro ] = useState([]);
	
	var location = useLocation();
	// var book = location.pathname.split( "/libro/" )[1];
	var book = "";
	
	function service_GetDataLibro (book) {
		const api = `https://www.googleapis.com/books/v1/volumes?q=${ book }`;
		
		fetch( api )
		.then( libro => libro.json() )
		.then( libro => {
			
			var todo = [];
			
			for ( var count = 0; count <= libro.items.length-1; count++ ) {
				
				var resumen = libro.items[ count ];
				
				var fixTodo = {
					"autor" : resumen.volumeInfo.authors ,// eslint-disable-next-line
					// "precio2" : function(){

					// 	// var fixPrecio = "";
					// 	if ( libro.items[ count ].saleInfo.listPrice ) {
					// 		console.log( `07` );
					// 		var fixPrecio = `<p>Precio: $ ${ libro.items[ count ].saleInfo.listPrice.amount } ${ resumen.saleInfo.listPrice.currencyCode }</p>`;
					// 	} else {
					// 		fixPrecio = "";
					// 	};

					// 	return fixPrecio;
						
					// } ,
					"isPrecioExiste" : resumen.saleInfo.listPrice ,
				};
				
				todo.push({ 
					"autor" : fixTodo.autor , 
					"descripcion" : resumen.volumeInfo.description , 
					"id" : resumen.id , 
					"imagen" : resumen.volumeInfo?.imageLinks ? resumen.volumeInfo.imageLinks.thumbnail : "https://ouch-cdn2.icons8.com/DP-WOV6CKiyzfKpw4jgLyhW1t0lCk3ca-WuruEH9ZHY/rs:fit:455:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjU1/LzM3OGRkMjBjLWQ5/OGMtNGE3ZS1hYTQx/LWY3NDg0NjQwYzk2/Mi5zdmc.png" , 
					"nombre" : resumen.volumeInfo.title , 
					"editorial" : resumen.volumeInfo.publisher === undefined ? "" : <p>Editorial: { resumen.volumeInfo.publisher }</p> ,
					"categoria" : resumen.volumeInfo.categories === undefined ? "" : <p>Categoria: { resumen.volumeInfo.categories }</p> ,
					"publicado" : resumen.volumeInfo.publishedDate ,
					"identificador" : resumen.volumeInfo.industryIdentifiers === undefined ? "?" : resumen.volumeInfo.industryIdentifiers[ 0 ].identifier ,
					"paginas" : resumen.volumeInfo.pageCount ,
					"idioma" : resumen.volumeInfo.language ,
					"preview" : resumen.volumeInfo.previewLink ,
					"isPrecioExiste" : fixTodo.isPrecioExiste ,
					"venta" : {
						"precio" : resumen.saleInfo.listPrice === undefined ? "" : resumen.saleInfo.listPrice.amount ,
						"peso" : resumen.saleInfo.listPrice === undefined ? "" : resumen.saleInfo.listPrice.currencyCode ,
						"comprar" : resumen.saleInfo.buyLink === undefined ? "" : <Button ancho="100%" texto="Comprar ePub" /> ,
					} ,
					// "precio2" : fixTodo.precio2() ,
				});
				
			};
			
			setElLibro( todo );
			setLoading( false );

		});
	};
	
	useEffect(() => {

		setLoading( true );
		
		var book = location.pathname.split( "/libro/" )[1];
		if ( book === undefined || book.length <= 0 ) {
			setLoading( false );
			setBuscador( true )
		} else {
			service_GetDataLibro( book )
		};
		
	},[location]);
	
	if ( loading ) {
		return (
			<section className="libros">
				<h2>Libros</h2>
				<Loading />
			</section>
		);
	};
	
	if ( buscador ) {
		return (
			<section className="libros">
				<h2>Libros</h2>
				<BuscadorLibros />
			</section>
		);
	}

	return (
		<section className="libros">
			<h2>Libros</h2>
			<div className="libros">
				{
					elLibro.map( ( librito ) => {
						return (
							<div className="libro" key={ librito.id }>
									<NavLink to={ "/detalle/" + librito.id }>
										<div className="imagen">
											<img src={ librito.imagen } alt={ librito.nombre } />
										</div>
										<strong className="nombre_libro">{ librito.nombre }</strong>
										<p>Autor: { librito.autor }</p>
										{ librito.editorial }
										<p>Publicado: { librito.publicado }</p>
										{ librito.categoria }
										<p>Identificador: { librito.identificador }</p>
										<p>Paginas: { librito.paginas }</p>
										<p>Idioma: { librito.idioma }</p>
										{/* <p>
											<a target="_blank" rel="noreferrer" href={ librito.preview }>Preview</a>
										</p> */}
										{
											librito.isPrecioExiste ? <p> $ { librito.venta.precio } { librito.venta.peso }</p> : ""
										}
										{ librito.venta.comprar }
										{/* <p>{ librito.descripcion }</p> */}
									</NavLink>
								</div>
						);
					})
				}
			</div>
			
			
			
		</section>
	);
};

export default Libros;