import axios from "axios";

const traePaises = async ( pais , state) => {
	const peticion = await axios.get( `http://universities.hipolabs.com/search?country=${pais}` );
	state( peticion.data );
};

export { 
	traePaises , 
};
