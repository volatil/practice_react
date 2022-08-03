import React from 'react';

import './Button.css';

function Button() {
	
	function buscar () {
		var vamosabuscar = document.querySelector( ".input_buscar" ).value;
		console.log( `Vamos a buscar: ${ vamosabuscar }` );
	}
	
	return ( 
		<button onClick={ buscar }>
			<span></span><p>Buscar</p>
		</button> 
	);
};

export default Button;