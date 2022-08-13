import React , {useEffect , useState} from 'react';
import HelmetResumen from 'components/Helmet/HelmetResumen';
import Loading from 'components/Loading/Loading';

import 'assets/css/PerritoRandom.css';

function FetchChow () {
	
	const traeImagen = "https://dog.ceo/api/breeds/image/random";

	const [ loading , setLoading ] = useState( false );
	const [ imagen , setImagen ] = useState(traeImagen);
	const [ raza , setRaza ] = useState();
	
	useEffect(() => {
	
		setLoading( true );
		
		fetch( traeImagen )
		.then( x => x.json() )
		.then(x => {
		
			var perrito = x.message;
			var raza    = perrito.split( "/breeds/" )[1];
			raza = raza.split( "/" )[0];
			raza = raza.replaceAll( "-" , " " );
			
			setImagen(perrito);
			setRaza( raza );
			setLoading( false );

		});
		
	},[]);
	
	if ( loading ) {
		return (
			<section className="perritoRandom">
				<HelmetResumen title="Cargando Perrito ..." />
				<h2>Perrito Random</h2>
				<Loading />
			</section>
		);
	};
	
	return ( 
		<section className="perritoRandom">
			<HelmetResumen title={ `Perrito Raza: ${ raza }` } />
			<h2>Perrito Random</h2>
			<div>
				<img src={imagen} alt="GUAU!" />
				<p>{raza}</p>
			</div>
		</section>
	)
	
};

export default FetchChow;