import React from "react";
import HelmetResumen from "components/Helmet/HelmetResumen";

function Inicio() {
	// var imagen = "https://ouch-cdn2.icons8.com/9NZ040oJ2EFjkNQlksgUP2U0eBA1o-6Hd7lP4JI4HSU/rs:fit:608:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTIy/LzEwYTcyNjI1LWRm/ODMtNDk5Mi04YTdh/LTgzY2U4MGY3Nzcz/Yi5zdmc.png";
	var imagen =
		"https://ouch-cdn2.icons8.com/dfkVsUfRhD9T5p1T6oihPZ8w5VDfG3d0Ww_KO5Epc0k/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDE3/LzgyMjBjZDEyLWU4/ZjgtNGI4My1iOTcy/LTk2MjkwODU1NmM2/Mi5zdmc.png";

	return (
		<section className="inicio">
			<HelmetResumen title="Inicio" />
			<h2>INICIO</h2>
			<img
				style={{ display: "block", margin: "0 auto" }}
				src={imagen}
				alt="Inicio"
			/>
		</section>
	);
}

export default Inicio;
