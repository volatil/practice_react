import React , { useEffect , useState } from "react";

function ColorRandom () {

	const [ elcolor , setColor ] = useState([]);

	useEffect(() => {
		const api = "https://x-colors.herokuapp.com/api/random";
		
		fetch( api )
		.then( api => api.json() )
		.then( api => {
			setColor( api.hex );
		});
		
	},[]);
	

	return (
		<section className="test">
			<h2>Color Random</h2>
			<div className="hola" style={{ background: elcolor , width: '100%' , height: '550px' , margin: '0 auto' }}></div>
		</section>
	);
};

export default ColorRandom;