import React from 'react';

import './BuscadorLibros.css';

function BuscadorLibros () {
	
	function buscar () {
		var vamosabuscar = document.querySelector( ".input_buscar" ).value;
		console.log( `Vamos a buscar: ${ vamosabuscar }` );
	}

	return (
		<section className="BuscadorLibros">
			<h2>Buscador Libros</h2>
			<div>
				<div>
					<label>Buscar Libro</label>
					<input className="input_buscar" type="text" placeholder="Baldor? Porota? Papelucho?" />
				</div>
				<button onClick={buscar}>Buscar</button>
			</div>
		</section>
	);
};

export default BuscadorLibros;