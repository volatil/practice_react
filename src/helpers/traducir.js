function traducir( palabra ) {
	
	palabra = palabra.replaceAll( "Light rain showers" , "Lluvias ligeras" );
	palabra = palabra.replaceAll( "Partly cloudy" , "Parcialmente nublado" );
	palabra = palabra.replaceAll( "Mostly sunny" , "Mayormente soleado" );
	palabra = palabra.replaceAll( "Sunny" , "Soleado" );
	palabra = palabra.replaceAll( "Rain" , "LLuvioso" );
	palabra = palabra.replaceAll( "Cloudy" , "Nuboso" );
	
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