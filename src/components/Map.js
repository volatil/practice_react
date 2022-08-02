import React from 'react';

function Map () {
	
	const proveedores = [
		{
			"nombre" : "planeta" ,
			"link" : "/planeta-202207-80_t.html" , 
			"dcto" : 80 ,
		},
		{
			"nombre" : "liberalia" ,
			"link" : "/cl-liberalia-2022-08_t.html?no-cache=1" , 
			"dcto" : 60 ,
		},
		{
			"nombre" : "timebooks" ,
			"link" : "/cl-timebooks-2022-08_t.html?no-cache=1" , 
			"dcto" : 60 ,
		},
		{
			"nombre" : "penguin" ,
			"link" : "/cl-prh-obs-202206_t.html?no-cache=1" , 
			"dcto" : 80 ,
		},
		{
			"nombre" : "tajamar" ,
			"link" : "/cl-tajamar-2022-07_t.html?no-cache=1" , 
			"dcto" : 45 ,
		},
		{
			"nombre" : "bigsur" ,
			"link" : "/cl-bigsur-2207_t.html?no-cache=1" , 
			"dcto" : 30 ,
		},
		{
			"nombre" : "metales pesados" ,
			"link" : "/cl-metales-pesados_t.html" , 
			"dcto" : 25 ,
		},
		{
			"nombre" : "ril" ,
			"link" : "/cl-ril_t.html" , 
			"dcto" : 30 ,
		},
		{
			"nombre" : "ocho libros" ,
			"link" : "/cl-ocho-libros_t.html" , 
			"dcto" : 25 ,
		},
		{
			"nombre" : "libros del amanecer" ,
			"link" : "/cl-libros-del-amanecer_t.html" , 
			"dcto" : 25 ,
		},
		{
			"nombre" : "zigzag" ,
			"link" : "/cl-zigzag-2022-08_t.html?no-cache=1" , 
			"dcto" : 30 ,
		},
		{
			"nombre" : "retail express" ,
			"link" : "/retailexpress-cl-2208_t.html?no-cache=1" , 
			"dcto" : 45 ,
		},
		{
			"nombre" : "catalonia" ,
			"link" : "/cl-catalonia-2208_t.html?no-cache=1" , 
			"dcto" : 30 ,
		},
		{
			"nombre" : "ediciones urano" ,
			"link" : "/cl-urano-2022-08_t.html?no-cache=1" , 
			"dcto" : 25 ,
		},
		{
			"nombre" : "trayecto" ,
			"link" : "/cl-trayecto_t.html" , 
			"dcto" : 30 ,
		},
		{
			"nombre" : "universitaria" ,
			"link" : "/cl-editorialuniv-2208_t.html?no-cache=1" , 
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