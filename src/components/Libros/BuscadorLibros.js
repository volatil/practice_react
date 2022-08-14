import React from 'react';
import Button from 'components/Button';

import './BuscadorLibros.css';
import HelmetResumen from "components/Helmet/HelmetResumen";

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
				<Button laclase="primary" texto="BUSCAR" />
			</div>
		</section>
	);
};

export default BuscadorLibros;