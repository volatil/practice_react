import React from 'react';
import { useLocation } from "react-router-dom";

function Error () {

	var location = useLocation();

	return ( 
		<section className="error">
			<h2>PAGINA NO ENCONTRADA</h2>
			<p>No encontramos la pagina <code>{location.pathname}</code></p>
		</section>
	);
}

export default Error;