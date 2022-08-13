import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import $ from "jquery";

// COMPONENTS
import HelmetResumen from "components/Helmet/HelmetResumen";
import Loading from "components/Loading/Loading";

// CSS
import "assets/css/Crypto.css";

// DOCUMENTACION
// https://docs.coincap.io/
// https://api.coincap.io/v2/assets/bitcoin
// https://api.coincap.io/v2/assets/bitcoin/history?interval=m1

function Crypto() {
	const [ loading , setLoading ] = useState( false );
	const [todasLasCryptos, setTodasLasCryptos] = useState();
	const crypto_todas =
	"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24h";
	
	useEffect(() => {
		setLoading( true );
		fetch(crypto_todas)
		.then((crypto_todas) => crypto_todas.json())
		.then((crypto) => {
			var todo = [];
			for (let count = 0; count <= crypto.length - 1; count++) {
				var resumen = crypto[count];
				var lacrypto = {
					id: resumen.id,
					ranking: resumen.market_cap_rank,
					nombre: resumen.name,
					simbolo: resumen.symbol,
					imagen: resumen.image
				};
				todo.push({
					id: lacrypto.id,
					ranking: lacrypto.ranking,
					nombre: lacrypto.nombre,
					simbolo: lacrypto.simbolo,
					imagen: lacrypto.imagen
				});
			}
			setTodasLasCryptos(todo);
			setLoading( false );
		});
	}, [setTodasLasCryptos]);
	
	if ( loading ) {
		return (
			<section className="usuario">
				<HelmetResumen title="Cryptos" />
				<Loading />
			</section>
		);
	};
	
	return (
		<section id="todaslascrypto">
		<HelmetResumen title="Cryptos" />
		<h2>{`{Cryptos}`}</h2>
		<div className="cryptos">
			{todasLasCryptos?.map((crypto) => {
				return (
					<div className="crypto" key={crypto.ranking}>
						<Link to={`/crypto/${crypto.id}`}>
							<img src={crypto.imagen} alt={crypto.nombre} />
							<h4>{crypto.nombre} ({crypto.simbolo})</h4>
						</Link>
					</div>
					);
				}
			)}
		</div>
		</section>
	);
}
		
export default Crypto;
