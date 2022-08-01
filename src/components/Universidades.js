import React , {useEffect , useState} from 'react';

function Universidades () {
	
	const [ u_nombre , setU_nombre ] = useState();
	
	useEffect(() => {
		const universidades = "http://universities.hipolabs.com/search?country=Chile";
		fetch( universidades )
		.then( x => x.json() )
		.then(x => {
			
			var todo = [];
			
			for ( var count = 0; count <= 63; count++ ) {
				var uni = {
					"nombre" : x[ count ].name ,
					"web" : x[ count ].web_pages ,
					"dominio" : x[ count ].domains ,
				}
				todo.push({ "posicion" : count , "nombre" : uni.nombre , "web" : uni.web , "dominio" : uni.dominio });
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
							<div className="universidad" key={ uni.nombre }>
								<p>{ uni.nombre }</p>
								<p>
									<a target="_blank" href={ uni.web } rel="noreferrer">{ uni.dominio }</a>
								</p>
							</div>
						)
					})
				}
		</section>
	)
};

export default Universidades;