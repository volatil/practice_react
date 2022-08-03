import React from 'react';
import Button from './Button';

import './BuscadorLibros.css';

function BuscadorLibros () {

	return (
		<section className="BuscadorLibros">
			<h2>Buscador Libros</h2>
			<div>
				<div>
					<label>Buscar Libro</label>
					<input className="input_buscar" type="text" placeholder="Baldor? Porota? Papelucho?" />
				</div>
				<Button />
			</div>
		</section>
	);
};

export default BuscadorLibros;