import React , { useEffect, useState } from 'react';
import Loading from './Loading';

function Url () {
	
	const [ loading , setLoading ] = useState( false );
	const [ printUrl , setPrintUrl ] = useState([]);
	// const api = "https://urlscan.io/api/v1/search/?q=domain:volatil.io";
	const api = "https://urlscan.io/api/v1/search/?q=domain:buscalibre.cl";
	
	useEffect(() => {
		
		setLoading( true );
		
		fetch( api )
		.then( url => url.json() )
		.then( url => {
			
			function pillaError () {
				var jeje = url.results[ 0 ].task.domain;
			}
			
			try {
				pillaError()
			} catch ( error ) {
				if ( String( error ).includes( "TypeError: Cannot read properties of undefined" ) ) {
					console.log( `TE PILLE!` );
					setLoading( false );
					return (
						<section className="url">
							<h2>URL</h2>
							<p>UwU</p>
						</section>
					);
				} else {
					
					var geturl = url.results[ 0 ];
					var laurl = {
						"dominio" : geturl.task.domain ,
						"method" : geturl.task.method ,
						"url" : geturl.task.url ,
						"uuid" : geturl.task.uuid ,
						"ip" : geturl.page.ip ,
						"server" : geturl.page.server ,
					};
					
					setPrintUrl([ laurl ]);
					setLoading( false );
					
				};
			}
			
			
			
			
		});
	},[]);

	if ( loading ) {
		return (
			<section className="url">
				<h2>URL</h2>
				<Loading />
			</section>
		);
	} else {
		return (
			<section className="url">
				<h2>URL</h2>
				<p>UwU</p>
			</section>
		);
	};

	// return (
	// 	<section className="url">
	// 		<h2>URL</h2>
	// 			{
	// 				printUrl.map((hurl) => {
	// 					return(
	// 						<ul key={ hurl.uuid }>
	// 							<li><strong>Dominio:</strong> { hurl.dominio }</li>
	// 							<li><strong>Url:</strong> { hurl.url }</li>
	// 							<li><strong>Method:</strong> { hurl.method }</li>
	// 							<li><strong>Uuid:</strong> { hurl.uuid }</li>
	// 							<li><strong>Ip:</strong> { hurl.ip }</li>
	// 							<li><strong>Server:</strong> { hurl.server }</li>
	// 						</ul>
	// 					);
	// 				})
	// 			}
	// 	</section>
	// );
};

export default Url;