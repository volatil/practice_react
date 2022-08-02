import React from 'react';

function BuscadorLibros () {
	
	function buscar () {
		var vamosabuscar = document.querySelector( ".input_buscar" ).value;
		console.log( `Vamos a buscar: ${ vamosabuscar }` );
	}

	return (
		<section className="BuscadorLibros">
			<h2>Buscador Libros</h2>
			<input className="input_buscar" type="text" placeholder="Buscar Libro" />
			<button onClick={buscar}>Buscar</button>
		</section>
	);
};

export default BuscadorLibros;