import React , {useEffect , useState} from 'react';
import Loading from './Loading';

function FetchChow () {
	
	const traeImagen = "https://dog.ceo/api/breeds/image/random";

	const [ loading , setLoading ] = useState( false );
	const [ imagen , setImagen ] = useState(traeImagen);
	
	useEffect(() => {
	
		setLoading( true );
		
		fetch( traeImagen )
		.then( x => x.json() )
		.then(x => {
			var perrito = x.message;
			setImagen(perrito);
			setLoading( false );
		})
		
	},[]);
	
	if ( loading ) {
		return <Loading />
	};
	
	return ( 
		<section className="fetch">
			<h2>Perrito Random</h2>
			<img width="500" src={imagen} alt="GUAU!" />
		</section>
	)
	
};

export default FetchChow;