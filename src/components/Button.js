import React from 'react';

import './Button.css';

function Button( props ) {
	
	function buscar () {
		var vamosabuscar = document.querySelector( ".input_buscar" ).value;
		console.log( `Vamos a buscar: ${ vamosabuscar }` );
	}
	
	return ( 
		<button style={{ width: props.ancho }} onClick={ buscar }>
			<span></span><p>{ props.texto }</p>
		</button> 
	);
};

export default Button;