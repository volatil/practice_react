import React , {useEffect , useState} from 'react';

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
	
	console.log( `Perrito Random .js` );
	
	if ( loading ) {
		return <div className="loadinggggg"><img width="100" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif" alt="Loading ..." /></div>
	};
	return ( 
		<section className="fetch">
			<h2>Perrito Random</h2>
			<img width="500" src={imagen} alt="GUAU!" />
		</section>
	)
	
};

export default FetchChow;