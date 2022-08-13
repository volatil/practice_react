import React , { useState } from 'react';
import Button from "components/Button";
import $ from "jquery";

const Props = () => {
	const [cambioTexto, setCambioTexto] = useState(null);
	
	function pulsarTecla() {
		var algo = $("input").val();
		setCambioTexto(algo)
	}

	function Componentito( props ) {
		return <h1 style={{ padding: "0 60px" , backgroundColor: "red" , color: "white" , margin: "0 auto" , textAlign: "center" , fontSize: "6em" }}>{props.texto}</h1>
	}

	return(
		<>
		<section id="componentest">
			<style type="text/css">{`
				.red {
					color: red
				}
				.green {
					color: green
				}
				
			`}
			</style>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
	
			<br></br>
			<h1>ComponenTEST</h1>
			<div style={{ display: "flex" , justifyContent: "center" , flexDirection: "column" , alignItems: "center" , width: "250px" , margin: "0 auto 40px" }}>
				<input className="elinput" onChange={pulsarTecla} style={{ width: "100%" , height: "45px" , padding: "6px" , marginBottom: "10px" }} />
				<Button laclase="warning" texto="Cambiar Texto" />
				<Button />
			</div>
			<Componentito texto={cambioTexto} />
		</section>
		</>
	)
}

export default Props;