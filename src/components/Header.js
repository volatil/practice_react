import React from 'react';
import './Header.css';

function Header () {

	var reak = "{ REACT }";
	var imagen = "https://ouch-cdn2.icons8.com/GcfbRzbpV46ApbM94z6RGZPvj1niXNehLBUfq9QRg7Y/rs:fit:542:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjIv/ZWY4M2QxMTQtYzA2/Ni00NzgzLWE2MTUt/YzVkMDNjNTUzZDU5/LnN2Zw.png";
	
	const test = () => {
		var mensaje = prompt( "Cambiamos REACT ?" );
		if ( mensaje === null ) {
			mensaje = reak.replaceAll( "{" , "" ).replaceAll( "}" , "" );
			document.querySelector( ".eljeader" ).innerHTML = ( `<img style="width: 40px" src=${ imagen } alt="CODE" /> PRACTICE - {${ mensaje }}` );
		} else if ( mensaje === "" ) {
			mensaje = reak.replaceAll( "{" , "" ).replaceAll( "}" , "" );
			document.querySelector( ".eljeader" ).innerHTML = ( `<img style="width: 40px" src=${ imagen } alt="CODE" /> PRACTICE - {${ mensaje }}` );
		} else {
			document.querySelector( ".eljeader" ).innerHTML = ( `<img style="width: 40px" src=${ imagen } alt="CODE" /> PRACTICE - {${ mensaje }}` );
		};
	};
	
	return (
		<header>
			
			<h1 className="eljeader" onClick={test}><img style={{width: '40px'}} src={ imagen } alt="CODE" /> PRACTICE - {reak}</h1>
		</header>
	);
}

export default Header;