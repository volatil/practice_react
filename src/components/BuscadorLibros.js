import React from 'react';
import Button from './Button';

import './BuscadorLibros.css';
import HelmetResumen from './HelmetResumen';

function BuscadorLibros () {

	return (
		<section className="BuscadorLibros">
			<HelmetResumen title="Buscador por Libro" />
			<h2>Buscador Libros</h2>
			<div>
				<div>
					<label>Buscar Libro</label>
					<input className="input_buscar" type="text" placeholder="Baldor? Porota? Papelucho?" />
				</div>
				<Button ancho="320px" texto="BUSCAR" />
			</div>
		</section>
	);
};

export default BuscadorLibros;