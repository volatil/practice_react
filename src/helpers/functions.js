import axios from "axios";

const traePaises = async ( pais , state) => {
	const peticion = await axios.get( `http://universities.hipolabs.com/search?country=${pais}` );
	state( peticion.data );
	// console.table( peticion.data );
};

const traeZoo = async (state) => {
	const peticion = await axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand/10`);
	// console.log( peticion.data );
	// console.table( peticion.data );
	state( peticion.data )
};

export { 
	traePaises , 
	traeZoo ,
};
