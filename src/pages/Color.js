import React , { useEffect , useState } from "react";
import HelmetResumen from "components/Helmet/HelmetResumen";
import Loading from "components/Loading/Loading";
import Icono from "components/Icono/Icono";

function ColorRandom () {

	const [ loading , setLoading ] = useState( false );
	const [ elcolor , setColor ] = useState([]);

	useEffect(() => {
		setLoading( true );
		const api = "https://x-colors.herokuapp.com/api/random";
		
		fetch( api )
		.then( api => api.json() )
		.then( api => {
			setColor( api.hex );
			setLoading( false );
		});
		
		
	},[]);
	
	if ( loading ) {
		return (
			<section className="test">
				<HelmetResumen title="Cargando Color ..." />
				<h2>
					<Icono nombre="palette" />
					Color Random
				</h2>
				<Loading />
			</section>
		);
	};

	return (
		<section className="test">
			<HelmetResumen title={`Color ${elcolor}`} />
			<h2>
				<Icono nombre="palette" />
				Color Random
			</h2>
			<div style={{ background: elcolor , width: '100%' , height: '550px' , margin: '0 auto' }}></div>
		</section>
	);
};

export default ColorRandom;