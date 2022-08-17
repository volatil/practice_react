import React , { useState } from "react";
import $ from "jquery";

// CSS
import "./Darkmode.css";

// IMAGENES
import isoTipo from "assets/imagenes/darkmodeisotipo.svg"

function Darkmode() {

	const [ estado , setEstado ] = useState(false);

{/*
		
		var estadoDarkmode;
		const activando = function () {
			var estadoDarkmode = true;
			setTimeout(function () {
				$("section#darkmode").addClass("black");
				//console.log("=> ON");
			}, 2000);
			localStorage.setItem("darkmode", "on");
		};
		const desactivando = function () {
			var estadoDarkmode = false;
			setTimeout(function () {
				$("section#darkmode").removeClass("black");
				//console.log("=> OFF");
			}, 2000);
			localStorage.setItem("darkmode", "off");
		};
		
		const darkModeCheck = function () {
			//console.log("checando darkmode ...");
			if (localStorage.getItem("darkmode") === null) {
			} else {
				if (localStorage.getItem("darkmode") === "on") {
					//console.log("YA ESTABA activado");
					activando();
				} else {
					desactivando();
					//console.log("YA ESTABA desactivado");
				}
			}
		};
		darkModeCheck();
		
		function mode() {
			// DARKMODE ON/OFF
			if (localStorage.getItem("darkmode") === null) {
				activando();
			} else {
				if (localStorage.getItem("darkmode") === "on") {
					desactivando();
				} else {
					activando();
				}
			}
		}
		
		console.log(estadoDarkmode);
	var estadoDarkmode = false;
	const activar = function () {
		var estadoDarkmode = true;
		setTimeout(function () {
			$("section#darkmode").addClass("black");
			//console.log("=> ON");
		}, 2000);
		localStorage.setItem("darkmode", "on");
	};
	const desactivar = function () {
		var estadoDarkmode = false;
		setTimeout(function () {
			$("section#darkmode").removeClass("black");
			//console.log("=> OFF");
		}, 2000);
		localStorage.setItem("darkmode", "off");
	};
	
	var changeDarkmode = function () {};
*/}

	function changeDarkmode() {
		setEstado(!estado);
	};
	
	return (
		<section onClick={changeDarkmode} id="darkmode">
			<div className={estado?"black":null}>
				<img src={isoTipo} alt="Darkmode" />
			</div>
		</section>
	);
	
}

export default Darkmode;
