function traducir( palabra ) {
	
	// CLIMA.js
	palabra = palabra.replaceAll( "Light rain showers" , "Lluvias ligeras" );
	palabra = palabra.replaceAll( "Partly cloudy" , "Parcialmente nublado" );
	palabra = palabra.replaceAll( "Mostly sunny" , "Mayormente soleado" );
	palabra = palabra.replaceAll( "Mostly cloudy" , "Mayormente nuboso" );
	palabra = palabra.replaceAll( "Rain and snow" , "Lluvia y nieve" );
	palabra = palabra.replaceAll( "Patches of fog" , "Parches de niebla" );
	palabra = palabra.replaceAll( "Thunderstorm" , "Tormenta" );
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

export { traducir }