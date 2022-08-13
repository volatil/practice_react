import React from "react";
import { useLocation } from "react-router-dom";
import HelmetResumen from 'components/Helmet/HelmetResumen';

function Error() {
	
	var location = useLocation();
	
	return (
		<section id="error">
			<HelmetResumen title={`Pagina no encontrada (${location.pathname})`} />
			<h2>PAGINA NO ENCONTRADA</h2>
			<p style={{ textAlign: 'center' }}>No encontramos la pagina: <code style={{ background: 'whitesmoke' , padding: '10px' , color: 'black' , fontWeight: 'bold' }}>{location.pathname}</code></p>
		</section>
	);
}

export default Error;
