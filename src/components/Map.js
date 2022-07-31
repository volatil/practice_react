import React from 'react';

function Map () {
	
	const proveedores = [
		{
			"link" : "/planeta-202207-80_t.html" , 
			"nombre" : "planeta" ,
			"dcto" : 80 ,
		},
		{
			"link" : "/cl-liberalia-2022-08_t.html?no-cache=1" , 
			"nombre" : "liberalia" ,
			"dcto" : 60 ,
		},
		{
			"link" : "/cl-timebooks-2022-08_t.html?no-cache=1" , 
			"nombre" : "timebooks" ,
			"dcto" : 60 ,
		},
		{
			"link" : "/cl-prh-obs-202206_t.html?no-cache=1" , 
			"nombre" : "penguin" ,
			"dcto" : 80 ,
		},
		{
			"link" : "/cl-tajamar-2022-07_t.html?no-cache=1" , 
			"nombre" : "tajamar" ,
			"dcto" : 45 ,
		},
		{
			"link" : "/cl-bigsur-2207_t.html?no-cache=1" , 
			"nombre" : "bigsur" ,
			"dcto" : 30 ,
		},
		{
			"link" : "/cl-metales-pesados_t.html" , 
			"nombre" : "metales pesados" ,
			"dcto" : 25 ,
		},
		{
			"link" : "/cl-ril_t.html" , 
			"nombre" : "ril" ,
			"dcto" : 30 ,
		},
		{
			"link" : "/cl-ocho-libros_t.html" , 
			"nombre" : "ocho libros" ,
			"dcto" : 25 ,
		},
		{
			"link" : "/cl-libros-del-amanecer_t.html" , 
			"nombre" : "libros del amanecer" ,
			"dcto" : 25 ,
		},
		{
			"link" : "/cl-zigzag-2022-08_t.html?no-cache=1" , 
			"nombre" : "zigzag" ,
			"dcto" : 30 ,
		},
		{
			"link" : "/retailexpress-cl-2208_t.html?no-cache=1" , 
			"nombre" : "retail express" ,
			"dcto" : 45 ,
		},
		{
			"link" : "/cl-catalonia-2208_t.html?no-cache=1" , 
			"nombre" : "catalonia" ,
			"dcto" : 30 ,
		},
		{
			"link" : "/cl-urano-2022-08_t.html?no-cache=1" , 
			"nombre" : "ediciones urano" ,
			"dcto" : 25 ,
		},
		{
			"link" : "/cl-trayecto_t.html" , 
			"nombre" : "trayecto" ,
			"dcto" : 30 ,
		},
		{
			"link" : "/cl-editorialuniv-2208_t.html?no-cache=1" , 
			"nombre" : "universitaria" ,
			"dcto" : 45 ,
		},
	];

	return (
		<section className="map">
			<h2>MAP</h2>
			<ul>
				{
					proveedores.map((prov) => {
						return ( 
							<li key={ prov.link }>{ prov.nombre }</li> 
						);
					})
				}
			</ul>
		</section>
	);
}

export default Map;