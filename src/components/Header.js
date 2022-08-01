import React from 'react';
import './Header.css';

function Header () {

	var reak = "{ REACT }";
	
	const test = () => {
		var mensaje = prompt( "algo" );
		if ( mensaje === null ) {
			mensaje = reak.replaceAll( "{" , "" ).replaceAll( "}" , "" );
			document.querySelector( ".eljeader" ).innerHTML = ( `PRACTICE - {${ mensaje }}` );
		} else if ( mensaje === "" ) {
			mensaje = reak.replaceAll( "{" , "" ).replaceAll( "}" , "" );
			document.querySelector( ".eljeader" ).innerHTML = ( `PRACTICE - {${ mensaje }}` );
		} else {
			document.querySelector( ".eljeader" ).innerHTML = ( `PRACTICE - {${ mensaje }}` );
		};
	};
	
	return (
		<header>
			<h1 className="eljeader" onClick={test}>PRACTICE - {reak}</h1>
		</header>
	);
}

export default Header;