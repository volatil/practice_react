import React from "react";
import HelmetResumen from "../components/Helmet/HelmetResumen";

import imgContacto from "../assets/imagenes/contacto.png"

function Contacto() {

	return (
		<section className="contacto">
			<HelmetResumen title="Contacto" />
			<h2>Contacto</h2>
			<img src={imgContacto} alt="Contacto" />;
		</section>
	);
}

export default Contacto;
