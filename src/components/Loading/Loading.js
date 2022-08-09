import React from 'react';
// IMAGENES
import imgLoading from "../../assets/imagenes/loading.gif";

import './Loading.css';

function Loading () {

	return ( 
		<section className="loadinggggg">
			<img src={imgLoading} alt="Loading ..." />
		</section> 
	);
	
};

export default Loading;