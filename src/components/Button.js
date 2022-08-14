import React from "react";

import "./Button.css";

function Button( { texto = "Texto no Seteado"  , laclase = "danger" , onClick = null } = {}) {
	return (
		<button className={laclase} onClick={onClick}>
			<span></span>
			<p>{texto}</p>
		</button>
	);
}

// Button.defaultProps = {
// 	texto : "Texto no Seteado" , 
// 	laclase : "danger" , // primary , warning , danger , disabled
// }

export default Button;
