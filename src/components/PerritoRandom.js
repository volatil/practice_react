import React , {useEffect , useState} from 'react';

function FetchChow () {
	
	const [ imagen , setImagen ] = useState();
	
	useEffect(() => {
		const imagen = "https://dog.ceo/api/breeds/image/random";
		fetch( imagen )
		.then( x => x.json() )
		.then(x => {
			var perrito = x.message;
			setImagen(perrito);
		})
	},[]);
	
	return ( 
		<section className="fetch">
			<h2>Perrito Random</h2>
			<img width="500" src={imagen} alt="GUAU!" />
		</section>
	)
};

export default FetchChow;