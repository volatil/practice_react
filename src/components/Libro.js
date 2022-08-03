import React , { useEffect , useState } from "react";
import Loading from './Loading';
import { NavLink , useLocation } from "react-router-dom";

import BuscadorLibros from './BuscadorLibros';

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
				
				todo.push({ 
					"autor" : resumen.volumeInfo.authors , 
					"descripcion" : resumen.volumeInfo.description , 
					"id" : resumen.id , 
					"imagen" : resumen.volumeInfo?.imageLinks ? resumen.volumeInfo.imageLinks.thumbnail : "https://ouch-cdn2.icons8.com/DP-WOV6CKiyzfKpw4jgLyhW1t0lCk3ca-WuruEH9ZHY/rs:fit:455:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjU1/LzM3OGRkMjBjLWQ5/OGMtNGE3ZS1hYTQx/LWY3NDg0NjQwYzk2/Mi5zdmc.png" , 
					"nombre" : resumen.volumeInfo.title , 
					"editorial" : resumen.volumeInfo.publisher === undefined ? "" : <li>Editorial: { resumen.volumeInfo.publisher }</li> ,
					"categoria" : resumen.volumeInfo.categories === undefined ? "" : <li>Categoria: { resumen.volumeInfo.categories }</li> ,
					"publicado" : resumen.volumeInfo.publishedDate ,
					"identificador" : resumen.volumeInfo.industryIdentifiers === undefined ? "?" : resumen.volumeInfo.industryIdentifiers[ 0 ].identifier ,
					// "isbn_13" : resumen.volumeInfo.industryIdentifiers[1] === undefined ? "?" : resumen.volumeInfo.industryIdentifiers[ 1 ].identifier ,
					"paginas" : resumen.volumeInfo.pageCount ,
					"idioma" : resumen.volumeInfo.language ,
					"preview" : resumen.volumeInfo.previewLink ,
					"venta" : {
						"precio" : resumen.saleInfo.listPrice === undefined ? "" : <li>Precio: $ {resumen.saleInfo.listPrice.amount} {resumen.saleInfo.listPrice.currencyCode}</li> ,
						"peso" : resumen.saleInfo.listPrice === undefined ? "" : resumen.saleInfo.listPrice.currencyCode ,
						"comprar" : resumen.saleInfo.buyLink === undefined ? "" : <a className="comprar" target="_blank" rel="noreferrer" href={ resumen.saleInfo.buyLink }>Comprar ePub</a> ,
					} ,
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
									<NavLink to={ "/detalle/" + librito.id }>VISITAR DETALLE</NavLink>
									<div className="imagen">
										<img src={ librito.imagen } alt={ librito.nombre } />
									</div>
									<ul>
										<strong className="nombre_libro">{ librito.nombre }</strong>
										<li>Autor: { librito.autor }</li>
										{ librito.editorial }
										<li>Publicado: { librito.publicado }</li>
										{ librito.categoria }
										<li>Identificador: { librito.identificador }</li>
										{/* <li>ISBN 13: { librito.isbn_13 }</li> */}
										<li>Paginas: { librito.paginas }</li>
										<li>Idioma: { librito.idioma }</li>
										<li>
											<a target="_blank" rel="noreferrer" href={ librito.preview }>Preview</a>
										</li>
										{ librito.venta.precio }
									</ul>
									{ librito.venta.comprar }
									{/* <p>{ librito.descripcion }</p> */}
								</div>
						);
					})
				}
			</div>
			
			
			
		</section>
	);
};

export default Libros;