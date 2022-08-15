import axios from "axios";
// import $ from "jquery";

// function traeLibro (state , loBuscado) {
// 	// var loBuscado = $( "input.input_buscar" ).val();
// 	console.log( loBuscado );
// 	state(loBuscado);
// }

const traeLibro = async(state) => {
	// var loBuscado = $( "input.input_buscar" ).val();
	var peticion = await axios.get( `https://www.googleapis.com/books/v1/volumes?q=baldor` )
	console.log( peticion.data.items )
	state( peticion.data.items )
}

export {
	traeLibro
}