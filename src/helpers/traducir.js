const cambioImagenClima = function ( imagen ) {

	if ( imagen.includes( "48" ) ) {
		imagen = imagen.replaceAll( "48" , "64" );
	}

	imagen = imagen.replaceAll( "https://ssl.gstatic.com/onebox/weather/64/sunny.png" , "https://cdn-icons-png.flaticon.com/512/869/869869.png" );
	imagen = imagen.replaceAll( "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" , "https://cdn-icons-png.flaticon.com/512/1146/1146869.png" );
	imagen = imagen.replaceAll( "https://ssl.gstatic.com/onebox/weather/64/cloudy.png" , "https://cdn-icons-png.flaticon.com/512/1163/1163624.png" );
	imagen = imagen.replaceAll( "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" , "https://cdn-icons-png.flaticon.com/512/1163/1163657.png" );
	imagen = imagen.replaceAll( "https://ssl.gstatic.com/onebox/weather/64/rain_light.png" , "https://cdn-icons-png.flaticon.com/512/1163/1163626.png" );
	imagen = imagen.replaceAll( "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" , "https://cdn-icons-png.flaticon.com/512/1163/1163661.png" );
	imagen = imagen.replaceAll( "https://ssl.gstatic.com/onebox/weather/64/fog.png" , "https://cdn-icons-png.flaticon.com/512/1163/1163673.png" );
	
	return imagen;
	
};

function traducir( palabra ) {
	
	// CLIMA.js
	palabra = palabra.replaceAll( "Light rain showers" , "Lluvias ligeras" );
	palabra = palabra.replaceAll( "Partly cloudy" , "Parcialmente nublado" );
	palabra = palabra.replaceAll( "Mostly sunny" , "Mayormente soleado" );
	palabra = palabra.replaceAll( "Mostly cloudy" , "Mayormente nuboso" );
	palabra = palabra.replaceAll( "Rain and snow" , "Lluvia y nieve" );
	palabra = palabra.replaceAll( "Patches of fog" , "Parches de niebla" );
	palabra = palabra.replaceAll( "Thunderstorm" , "Tormenta" );
	palabra = palabra.replaceAll( "Haze" , "Bruma" );
	palabra = palabra.replaceAll( "Sunny" , "Soleado" );
	palabra = palabra.replaceAll( "Rain" , "LLuvioso" );
	palabra = palabra.replaceAll( "Cloudy" , "Nuboso" );
	palabra = palabra.replaceAll( "Clear" , "Despejado" );
	palabra = palabra.replaceAll( "Monday" , "Lunes" );
	palabra = palabra.replaceAll( "Tuesday" , "Martes" );
	palabra = palabra.replaceAll( "Wednesday" , "Miercoles" );
	palabra = palabra.replaceAll( "Thursday" , "Jueves" );
	palabra = palabra.replaceAll( "Friday" , "Viernes" );
	palabra = palabra.replaceAll( "Saturday" , "Sabado" );
	palabra = palabra.replaceAll( "Sunday" , "Domingo" );
	
	return palabra;
	
};

export { traducir , cambioImagenClima }