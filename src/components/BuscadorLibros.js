import React from 'react';
import Button from './Button';

import './BuscadorLibros.css';
import HelmetResumen from './HelmetResumen';

function BuscadorLibros () {

	var buscar = "";
	
	return (
		<section className="BuscadorLibros">
			<HelmetResumen title="Buscador por Libro" />
			<h2>Buscador Libros</h2>
			<div>
				<div>
					<label>Buscar Libro</label>
					<input className="input_buscar" type="text" placeholder="Baldor? Porota? Papelucho?" />
				</div>
				<Button onclick={buscar} texto="BUSCAR" />
			</div>
		</section>
	);
};

export default BuscadorLibros;