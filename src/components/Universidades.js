import React , {useEffect , useState} from 'react';

function Universidades () {
	
	const [ u_nombre , setU_nombre ] = useState();
	
	useEffect(() => {
		const universidades = "http://universities.hipolabs.com/search?country=Chile";
		fetch( universidades )
		.then( x => x.json() )
		.then(x => {
			
			var todo = [];
			
			for ( var count = 0; count <= 20; count++ ) {
				var uni = {
					"nombre" : x[ count ].name ,
				}
				console.log( `Nombre: ${uni.nombre}` );
				todo.push({ "nombre" : uni.nombre })
			};
			setU_nombre( todo );
		})
	},[]);
	
	return ( 
		<section className="lasuniversidades">
			<h2>Universidades</h2>
				{
					u_nombre?.map(( uni ) => {
						return(
							<div className="universidad" key={ uni.nombre }>{ uni.nombre }</div>
						)
					})
				}
		</section>
	)
};

export default Universidades;