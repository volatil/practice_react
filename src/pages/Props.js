import React , { useState } from 'react';
import Button from "../components/Button";
import $ from "jquery";

function Props() {
	
	const [cambioTexto, setCambioTexto] = useState();
	
	function pulsar() {
		var algo = $( "input" ).val()
		setCambioTexto( algo )
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
			<h1>ComponenTEST</h1>
			<div style={{ display: "flex" , justifyContent: "center" , flexDirection: "column" , alignItems: "center" , width: "250px" , margin: "0 auto 40px" }}>
				<input onChange={pulsar} style={{ width: "100%" , height: "45px" , padding: "6px" , marginBottom: "10px" }} />
				<Button laclase="warning" texto="Cambiar Texto" />
			</div>
			<Componentito texto={cambioTexto} />
		</section>
		</>
	)
}

export default Props;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/*
import React, { useState } from "react";

export default function App() {
	const [cls, setCls] = useState("green");
	
	return (
		<>
			<style type="text/css">{`
				.red {color: red}
				.green {color: green}
			`}
			</style>
			<button className={cls} onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))} > Button </button>
		</>
	);
}
*/
	
	
	/*
	import {useState} from 'react';
	
	export default function App() {
		
		const [isActive, setIsActive] = useState(false);
		
		const handleClick = () => {
			setIsActive(current => !current);
		};
		
		return (
			<div>
			<div style={{ backgroundColor: isActive ? 'salmon' : '', color: isActive ? 'white' : '', }} onClick={handleClick} >
			Hello world
			</div>
			</div>
			);
		}
		*/
		
		
		
		
		
		/*
		import React from 'react';
		import Button from "../components/Button";
		
		function Props() {
			function Componentito( props ) {
				return <h1 style={{ padding: "0 60px" , backgroundColor: "red" , color: "white" , margin: "0 auto" , textAlign: "center" , fontSize: "6em" }}>{props.texto}</h1>
			}
			return(
				<section id="componentest">
				<h1>ComponenTEST</h1>
				<div style={{ display: "flex" , justifyContent: "center" , flexDirection: "column" , alignItems: "center" , width: "250px" , margin: "0 auto 40px" }}>
				<input style={{ width: "100%" , height: "45px" , padding: "6px" , marginBottom: "10px" }} placeholder="uffff" />
				<Button laclase="warning" texto="Cambiar Componente" />
				</div>
				<Componentito texto="HEHE 1" />
				</section>
				)
			}
			
			export default Props;
			*/
