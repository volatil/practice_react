import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// COMPONENTS
import Button from "components/Button";
import HelmetResumen from "components/Helmet/HelmetResumen";
import Loading from "components/Loading/Loading";

// CSS
import "../assets/css/CryptoDetalle.css";

// DOCUMENTACION
// https://www.coingecko.com/es/api/documentation

function CryptoDetalle() {

	var location = useLocation();
	let navigate = useNavigate();
	const cryptoSlug = location.pathname.split("/crypto/")[1];
	const api_detalle = `https://api.coingecko.com/api/v3/coins/markets?ids=${cryptoSlug}&vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24h`;
	const [ loading , setLoading ] = useState( false );
	const [cryptoState, setCryptoState] = useState();
	
	useEffect(() => {
		setLoading( true );
		fetch(api_detalle)
		.then((api_detalle) => api_detalle.json())
		.then((detalleData) => {
			var resumen = detalleData[0];
			var detalle = {
				id: resumen.id,
				imagen: resumen.image,
				nombre: resumen.name,
				abreviatura: resumen.symbol,
				rango24h: {
					max: resumen.high_24h,
					min: resumen.high_24h
				},
				volumen: resumen.total_volume,
				ranking: resumen.market_cap_rank,
				precio: {
					actual: () => {
						let precio_actual = resumen.current_price;
						precio_actual = Number(precio_actual).toLocaleString();
						return precio_actual;
					},
					anterior: function () {
						let precio_exacto = resumen.sparkline_in_7d.price;
						precio_exacto = precio_exacto.at(-1);
						precio_exacto = Number(precio_exacto.toFixed(0)).toLocaleString();
						return precio_exacto;
					}
				},
				status: function() {
					let status = "";
					let precio_actual = detalle.precio.actual();
					let precio_anterior = detalle.precio.anterior();
					if (precio_anterior === precio_actual) {
						// status = "ESTA IGUAL";
						status = <div className="status mantiene"><span className="material-symbols-outlined"> equalizer </span><p>Se mantiene</p></div>;
					} else if (precio_anterior > precio_actual) {
						// status = "Bajo el precio uwu";
						status = <div className="status bajo"><span className="material-symbols-outlined"> expand_more </span><p>Bajo</p></div>;
					} else {
						// status = "Subio :D";
						status = <div className="status subio"><span className="material-symbols-outlined"> expand_less </span><p>Subio</p></div>;
					}
					return status;
				},
			};
			
			var todo = [];
			todo.push({
				id: detalle.id,
				imagen: detalle.imagen,
				nombre: detalle.nombre,
				abreviatura: detalle.abreviatura,
				rango24h: {
					max: detalle.rango24h.max,
					min: detalle.rango24h.max
				},
				volumen: detalle.volumen,
				ranking: detalle.ranking,
				precio: {
					actual: detalle.precio.actual(),
					anterior: detalle.precio.anterior()
				},
				status: detalle.status()
			});
			
			setCryptoState(todo);
			setLoading( false );
		});
	}, [api_detalle]);
	
	if ( loading ) {
		return (
			<section className="usuario">
				<HelmetResumen title="Cargando Crypto ..." />
				<Loading />
			</section>
		);
	};
	
	return (
		<section id="cryptodetalle">
			<HelmetResumen title={`Crypto => ${cryptoState?.map((asdasdasd) => {return asdasdasd.nombre})}`} />
			{cryptoState?.map((cryp) => {
				return (
					<div className="detalle" key={cryp.ranking}>
						<h1>
							<span>{cryp.nombre} ({cryp.abreviatura.toUpperCase()})</span>
							{cryp.status}
						</h1>
						<p className="ranking">Rank: <strong>#{cryp.ranking}</strong></p>
						<div className="imagen">
							<img src={cryp.imagen} alt={cryp.nombre} />
						</div>
						<h2>
							<strong>Ahora: $ {cryp.precio.actual}</strong>
						</h2>
						<h2>
							<strong>Antes: $ {cryp.precio.anterior}</strong>
						</h2>
						<p>Volumen: {cryp.volumen.toLocaleString()}</p>
						<p>Rango 24 hrs</p>
						<ul>
							<li>Max: $ {cryp.rango24h.max.toLocaleString()}</li>
							<li>Min: $ {cryp.rango24h.min.toLocaleString()}</li>
						</ul>
					</div>
					);
				})
			}
			<Button laclase="primary" onClick={() => navigate(-1)} texto="Volver" />
		</section>
	);
	
	

}

export default CryptoDetalle;
