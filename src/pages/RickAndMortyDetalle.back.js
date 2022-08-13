import React, { useState , useEffect } from 'react';
import { useLocation, useNavigate , Link } from "react-router-dom";

// COMPONENTS
import Button from "components/Button";
import HelmetResumen from "components/Helmet/HelmetResumen";
import Loading from "components/Loading/Loading";

// CSS
import "assets/css/RickAndMortyDetalle.css";

function RickAndMortyDetalle() {

	var location = useLocation();
	let navigate = useNavigate();
	var slug = location.pathname.split("/rickandmorty/personaje")[1];
	
	const [ loading , setLoading ] = useState( false );
	const [traeData, setTraeData] = useState();
	
	useEffect(() => {
	
		
		setLoading(true);
		const api = `https://rickandmortyapi.com/api/character/${slug}`;
		fetch(api).then(api => api.json())
			.then(perso => {
				var personaje = {
					"id": perso.id,
					"nombre": perso.name,
					"imagen": perso.image,
					"estado": function () {
						let estado = perso.status;
						if ( estado === "unknown" ) {
							estado = "Desconocido";
						} else if ( estado === "Alive" ) {
							estado = "Vivo";
						} else if ( estado === "Dead" ) {
							estado = "Muerto";
						} else if ( estado === "AAAAAAAA" ) {
							estado = "AAAAAAAA";
						} else {
							// alert(`Estado Desconocido: ${estado}`);
						}
						return estado;
					} ,
					"especie": function () {
						let especie = perso.species;
						if ( especie === "Mythological Creature" ) {
							especie = "Criatura Mitológica";
						} else if ( especie === "Alien" ) {
							especie = "Extraterrestre";
						} else if ( especie === "Human" ) {
							especie = "Humana";
						} else if ( especie === "Humanoid" ) {
							especie = "Humanoide";
						} else if ( especie === "Disease" ) {
							especie = "Enfermedad";
						} else if ( especie === "unknown" ) {
							especie = "Desconocida";
						} else if ( especie === "Robot" ) {
							especie = "Robot";
						} else if ( especie === "Animal" ) {
							especie = "Animal";
						} else if ( especie === "Poopybutthole" ) {
							especie = "Cara Culo";
						} else if ( especie === "Cronenberg" ) {
							especie = "Cronenberg";
						} else if ( especie === "AAAAAAAA" ) {
							especie = "EEEEEEEEEE";
						} else {
							// alert(`Especie desconocida: ${especie}`);
						}
						return especie;
					} ,
					"tipo" : function() {
						let tipo = perso.type;
						if (tipo === "") {
							// tipo = "AAAAAAAAAAAAAAAAAAAAAAAAAAA!!";
						} else if ( tipo === "Parasite" ) {
							tipo = "Parasito";
						} else if ( tipo === "Poopybutthole" ) {
							tipo = "Cara Culo";
						} else if ( tipo === "Crow" ) {
							tipo = "Cuervo";
						} else if ( tipo === "Changeformer" ) {
							tipo = "Transformer";
						} else if ( tipo === "Soulless Puppet" ) {
							tipo = "Marioneta sin Alma";
						} else if ( tipo === "Unknown-nippled alien" ) {
							tipo = "Extranjera de pezones desconocidos";
						} else if ( tipo === "Dog" ) {
							tipo = "Perro";
						} else if ( tipo === "Old Amazons" ) {
							tipo = "Amazona Vieja";
						} else if ( tipo === "Decoy" ) {
							tipo = "Señuelo";
						} else if ( tipo === "Plutonian" ) {
							tipo = "Plutoniano";
						} else if ( tipo === "Cyborg" ) {
							tipo = "Cyborg";
						} else if ( tipo === "Gazorpian" ) {
							tipo = "Gazorpiana";
						} else if ( tipo === "CHUD" ) {
							tipo = "CHUD";
						} else if ( tipo === "Weasel" ) {
							tipo = "Comadreja";
						} else if ( tipo === "Fly" ) {
							tipo = "Volador";
						} else if ( tipo === "Narnian" ) {
							tipo = "Narniano";
						} else if ( tipo === "Zigerion" ) {
							tipo = "Zigerion";
						} else if ( tipo === "Shrimp" ) {
							tipo = "Camarón";
						} else if ( tipo === "Omniscient being" ) {
							tipo = "Ser Omnisciente";
						} else if ( tipo === "Glorzo" ) {
							tipo = "Glorzo";
						} else if ( tipo === "Gromflomite" ) {
							tipo = "Gromflomita";
						} else if ( tipo === "Ferret Robot" ) {
							tipo = "Hurón Robot";
						} else if ( tipo === "Pizza" ) {
							tipo = "Pizza";
						} else if ( tipo === "Shimshamian" ) {
							tipo = "Shimshamian";
						} else if ( tipo === "Snake" ) {
							tipo = "Serpiente";
						} else if ( tipo === "Hivemind" ) {
							tipo = "Mente de la Colmena";
						} else if ( tipo === "Hologram" ) {
							tipo = "Holograma";
						} else if ( tipo === "Memory" ) {
							tipo = "Memoria";
						} else if ( tipo === "Dragon" ) {
							tipo = "Dragón";
						} else if ( tipo === "Monster" ) {
							tipo = "Monstruo";
						} else if ( tipo === "Microverse inhabitant" ) {
							tipo = "Habitante del Microverso";
						} else if ( tipo === "Meeseeks" ) {
							tipo = "Meeseeks";
						} else if ( tipo === "Teddy Bear" ) {
							tipo = "Oso Teddy";
						} else if ( tipo === "Bird-Person Human Mix" ) {
							tipo = "Mezcla de Pájaro y Humano";
						} else if ( tipo === "Vampire" ) {
							tipo = "Vampiro";
						} else if ( tipo === "Tumblorkian" ) {
							tipo = "Tumblor";
						} else if ( tipo === "Passing Butter Robot" ) {
							tipo = "Robot de Mantequilla";
						} else if ( tipo === "Clay-Person" ) {
							tipo = "Persona de Arcilla";
						} else if ( tipo === "Necrophiliac" ) {
							tipo = "Necrófila";
						} else if ( tipo === "Alphabetrian" ) {
							tipo = "Alfabética";
						} else if ( tipo === "Conjoined twin" ) {
							tipo = "Gemelo Unida";
						} else if ( tipo === "Turkey" ) {
							tipo = "Pavo";
						} else if ( tipo === "Tuskfish" ) {
							tipo = "Colmillo";
						} else if ( tipo === "Monogatron" ) {
							tipo = "Monogatrón";
						} else if ( tipo === "Wasp" ) {
							tipo = "Avispa";
						} else if ( tipo === "Tentacle alien" ) {
							tipo = "Tentáculo Alienígena";
						} else if ( tipo === "Giant Cat Monster" ) {
							tipo = "Monstruo Gato Gigante";
						} else if ( tipo === "Cronenberg" ) {
							tipo = "Cronenberg";
						} else if ( tipo === "Animal" ) {
							tipo = "Animal";
						} else if ( tipo === "Human-Snake hybrid" ) {
							tipo = "Híbrido Humano-Serpiente";
						} else if ( tipo === "Caterpillar" ) {
							tipo = "Oruga";
						} else if ( tipo === "Game" ) {
							tipo = "Juego";
						} else if ( tipo === "Demon" ) {
							tipo = "Demonio";
						} else if ( tipo === "Gear-Person" ) {
							tipo = "Engranaje-Persona";
						} else if ( tipo === "Anime" ) {
							tipo = "Anime";
						} else if ( tipo === "Cone-nippled alien" ) {
							tipo = "Alienígena de Pezones Cónicos";
						} else if ( tipo === "Sexy Aquaman" ) {
							tipo = "Sexy Aquaman";
						} else if ( tipo === "Light bulb-Alien" ) {
							tipo = "Bombilla-Alien";
						} else if ( tipo === "Scrotian" ) {
							tipo = "Escrotiano";
						} else if ( tipo === "Krootabulan" ) {
							tipo = "Krootabuliano";
						} else if ( tipo === "Traflorkian" ) {
							tipo = "Traflorkiano";
						} else if ( tipo === "Gazorpian reproduction robot" ) {
							tipo = "Robot Reproductor Gazorpiano";
						} else if ( tipo === "Cronenberg" ) {
							tipo = "Cronenberg";
						} else if ( tipo === "Normal Size Bug" ) {
							tipo = "Error de Tamaño Normal";
						} else if ( tipo === "Mascot" ) {
							tipo = "Mascota";
						} else if ( tipo === "Flansian" ) {
							tipo = "Flansiano";
						} else if ( tipo === "Superhuman" ) {
							tipo = "Superhumano";
						} else if ( tipo === "Cat-Person" ) {
							tipo = "Persona-Gato";
						} else if ( tipo === "Mytholog" ) {
							tipo = "Mitologico";
						} else if ( tipo === "Miniverse inhabitant" ) {
							tipo = "Habitante del Miniverso";
						} else if ( tipo === "Interdimensional gaseous being" ) {
							tipo = "Ser Gaseoso Interdimensional";
						} else if ( tipo === "Shapeshifter" ) {
							tipo = "Cambiaformas";
						} else if ( tipo === "Elephant-Person" ) {
							tipo = "Persona Elefante";
						} else if ( tipo === "Artificial Intelligence" ) {
							tipo = "Inteligencia Artificial";
						} else if ( tipo === "Zombodian" ) {
							tipo = "Zombodiano";
						} else if ( tipo === "Numbericon" ) {
							tipo = "Numero";
						} else if ( tipo === "Tiger" ) {
							tipo = "Tigre";
						} else if ( tipo === "Morglutzian" ) {
							tipo = "Morglutziano";
						} else if ( tipo === "Rat" ) {
							tipo = "Rata";
						} else if ( tipo === "Rick's toxic side" ) {
							tipo = "El Lado Tóxico de Rick";
						} else if ( tipo === "Superhuman (Ghost trains summoner)" ) {
							tipo = "Superhumano (Invocador de Trenes Fantasma)";
						} else if ( tipo === "Little Human" ) {
							tipo = "Pequeña Humana";
						} else if ( tipo === "Eat shiter-Person" ) {
							tipo = "Come Mierda";
						} else if ( tipo === "Fish-Person" ) {
							tipo = "Persona Pez";
						} else if ( tipo === "Mega Gargantuan" ) {
							tipo = "Mega Gargantuan";
						} else if ( tipo === "Clone" ) {
							tipo = "Clon";
						} else if ( tipo === "Doopidoo" ) {
							tipo = "Doopidoo";
						} else if ( tipo === "Genetic experiment" ) {
							tipo = "Experimento Genetico";
						} else if ( tipo === "Centaur" ) {
							tipo = "Centauro";
						} else if ( tipo === "Chair" ) {
							tipo = "Silla";
						} else if ( tipo === "Turkey Human Mix" ) {
							tipo = "Mezcla Humano Pavo";
						} else if ( tipo === "Earth (Fascist Teddy Bear Dimension)" ) {
							tipo = "Tierra (Dimensión del Oso de Peluche Fascista)";
						} else if ( tipo === "Super Sperm Monster" ) {
							tipo = "Super Monstruo de Esperma";
						} else if ( tipo === "Human with antennae" ) {
							tipo = "Humano con Antena";
						} else if ( tipo === "AAAAAAAAAAAA" ) {
							tipo = "AAAAAAAAAAAA";
						} else {
							// alert(`[${this.id}] Tipo desconocida: ${tipo}`);
						}
						
						return tipo;
					} ,
					"genero": function () {
						let genero = perso.gender;
						if ( genero === "Female" ) {
							genero = "Femenino";
						} else if ( genero === "Male" ) {
							genero = "Masculino";
						} else if ( genero === "unknown" ) {
							genero = "Desconocido";
						} else if ( genero === "Genderless" ) {
							genero = "Sin Género";
						} else {
							// alert("GENERO NO RECONOCIDO");
						}
						return genero;
					} ,
					"origen": function () {
						let origen = perso.origin.name;
						if (origen === "Interdimensional Cable") {
							origen = "Cable Interdimensional";
						} else if ( origen === "Narnia Dimension" ) {
							origen = "Dimensión de Narnia";
						} else if ( origen === "unknown" ) {
							origen = "Desconocido";
						} else if ( origen === "Merged Universe" ) {
							origen = "Universo Fusionado";
						} else if ( origen === "Draygon" ) {
							origen = "Dragona";
						} else if ( origen === "Earth (D716-B)" ) {
							origen = "Tierra (D716-B)";
						} else if ( origen === "Venzenulon 7" ) {
							origen = "Venzenulon 7";
						} else if ( origen === "Earth (C-500A)" ) {
							origen = "Tierra (C-500A)";
						} else if ( origen === "Anatomy Park" ) {
							origen = "Parque de la Anatomía";
						} else if ( origen === "Earth (K-83)" ) {
							origen = "Tierra (K-83)";
						} else if ( origen === "Earth (C-137)" ) {
							origen = "Tierra (C-137)";
						} else if ( origen === "Purge Planet" ) {
							origen = "Planeta Purga";
						} else if ( origen === "Glorzo Asteroid" ) {
							origen = "Asteroide Glorzo";
						} else if ( origen === "Earth (K-22)" ) {
							origen = "Tierra (K-22)";
						} else if ( origen === "Earth (Replacement Dimension)" ) {
							origen = "Tierra (Dimensión de Reemplazo)";
						} else if ( origen === "Nuptia 4" ) {
							origen = "Nuptia 4";
						} else if ( origen === "The Ocean" ) {
							origen = "El Oceano";
						} else if ( origen === "Citadel of Ricks" ) {
							origen = "Citadela de los Ricks";
						} else if ( origen === "Mega Gargantuan Kingdom" ) {
							origen = "Reino Mega Gargantuan";
						} else if ( origen === "Gear World" ) {
							origen = "Mundo Engranajes";
						} else if ( origen === "Clone" ) {
							origen = "Clon";
						} else if ( origen === "Earth (Giant Telepathic Spiders Dimension)" ) {
							origen = "Tierra (Dimensión de Arañas Telepáticas Gigantes)";
						} else if ( origen === "Earth (Fascist Dimension)" ) {
							origen = "Tierra (Dimensión Fascista)";
						} else if ( origen === "Abadango" ) {
							origen = "Abadango";
						} else if ( origen === "Mr. Goldenfold's dream" ) {
							origen = "El sueño del Sr. Goldenfold";
						} else if ( origen === "Post-Apocalyptic Earth" ) {
							origen = "Tierra Post-Apocalíptica";
						} else if ( origen === "Story Train" ) {
							origen = "Tren de la Historia";
						} else if ( origen === "Snake Planet" ) {
							origen = "Planeta Serpiente";
						} else if ( origen === "Earth (Chair Dimension)" ) {
							origen = "Tierra (Dimension Silla)";
						} else if ( origen === "Pluto" ) {
							origen = "Pluto";
						} else if ( origen === "Earth (Fascist Teddy Bear Dimension)" ) {
							origen = "Tierra (Dimensión del Oso de Peluche Fascista)";
						} else if ( origen === "Morty" ) {
							origen = "Morty";
						} else if ( origen === "Hell" ) {
							origen = "Infierno";
						} else if ( origen === "AAAAAAAAAAAA" ) {
							origen = "AAAAAAAAAAAA";
						} else {
							// alert(`[${this.id} - ${this.nombre}] Origen desconocido: ${origen}`);
						}
						return origen;
					} ,
					"locacion": function () {
						let locacion = perso.location.name;
						if (locacion === "Interdimensional Cable") {
							locacion = "Cable Interdimensional";
						} else if ( locacion === "Narnia Dimension" ) {
							locacion = "Dimensión de Narnia";
						} else if ( locacion === "unknown" ) {
							locacion = "Desconocido";
						} else if ( locacion === "Merged Universe" ) {
							locacion = "Universo Fusionado";
						} else if ( locacion === "Citadel of Ricks" ) {
							locacion = "Citadela de los Ricks";
						} else if ( locacion === "Draygon" ) {
							locacion = "Dragona";
						} else if ( locacion === "Venzenulon 7" ) {
							locacion = "Venzenulon 7";
						} else if ( locacion === "Earth (C-500A)" ) {
							locacion = "Tierra (C-500A)";
						} else if ( locacion === "Anatomy Park" ) {
							locacion = "Parque de la Anatomía";
						} else if ( locacion === "Earth (Replacement Dimension)" ) {
							locacion = "Tierra (Dimensión de Reemplazo)";
						} else if ( locacion === "Purge Planet" ) {
							locacion = "Planeta Purga";
						} else if ( locacion === "Glorzo Asteroid" ) {
							locacion = "Asteroide Glorzo";
						} else if ( locacion === "Froopyland" ) {
							locacion = "Froopyland";
						} else if ( locacion === "Nuptia 4" ) {
							locacion = "Nuptia 4";
						} else if ( locacion === "Snake Planet" ) {
							locacion = "Planeta Serpiente";
						} else if ( locacion === "Mega Gargantuan Kingdom" ) {
							locacion = "Reino Mega Gargantuan";
						} else if ( locacion === "Gear World" ) {
							locacion = "Mundo Engranajes";
						} else if ( locacion === "Earth (Fascist Dimension)" ) {
							locacion = "Tierra (Dimensión Fascista)";
						} else if ( locacion === "Worldender's lair" ) {
							locacion = "La guarida de Worldender";
						} else if ( locacion === "Testicle Monster Dimension" ) {
							locacion = "Dimensión del Monstruo Testicular";
						} else if ( locacion === "Abadango" ) {
							locacion = "Abadango";
						} else if ( locacion === "Mr. Goldenfold's dream" ) {
							locacion = "El sueño del Sr. Goldenfold";
						} else if ( locacion === "Post-Apocalyptic Earth" ) {
							locacion = "Tierra Post-Apocalíptica";
						} else if ( locacion === "Story Train" ) {
							locacion = "Story Train";
						} else if ( locacion === "Earth (C-137)" ) {
							locacion = "Tierra (C-137)";
						} else if ( locacion === "Earth (Chair Dimension)" ) {
							locacion = "Tierra (Dimension Silla)";
						} else if ( locacion === "Pluto" ) {
							locacion = "Pluto";
						} else if ( locacion === "Rick's Memories" ) {
							locacion = "Recuerdos de Rick";
						} else if ( locacion === "Hell" ) {
							locacion = "Infierno";
						} else if ( locacion === "AAAAAAAAAAAA" ) {
							locacion = "AAAAAAAAAAAA";
						} else {
							// alert(`[${this.id} - ${this.nombre}] Locacion desconocido: ${locacion}`);
						}
						return locacion;
					} , 
					"episodio" : function() {
						
						let episodioGet = perso.episode;
						let episodiosLink = [];
						
						for (let count = 0; count <= episodioGet.length-1; count++) {
							var episodio = {
								"link": episodioGet[ count ] ,
								"numero" : episodioGet[ count ].replaceAll( "https://rickandmortyapi.com/api/episode/" , "" ) ,
							}
							episodiosLink.push({ count: count , link: episodio.numero });
						};
						
						return episodiosLink;
						
					}
				};
				var todo = [];
				todo.push({
					id: personaje.id ,
					nombre: personaje.nombre ,
					imagen: personaje.imagen ,
					estado: personaje.estado() ,
					especie: personaje.especie() ,
					tipo: personaje.tipo() ,
					genero: personaje.genero() ,
					origen: personaje.origen() ,
					locacion: personaje.locacion() ,
					episodio: personaje.episodio() ,
				});
				setTraeData(todo);
				setLoading(false);
			});
		
	},[ slug, setTraeData ]);

	if ( loading ) {
		return (
			<section id="RickAndMortyDetalle">
			<HelmetResumen title="Rick And Morty - Cargando ..." />
				<h2>Detalle</h2>
				<Loading />
			</section>
		);
	};

	function Detallito() {
		return (
			<div className="detalles">
				{
					traeData?.map((elperso) => {
						return (
							<div key={elperso.id} className="detalle">
								<img src={elperso.imagen} alt={ elperso.nombre } />
								<h3>{ elperso.nombre }{ elperso.nombre }</h3>
								<p><strong>Estado: </strong>{ elperso.estado }</p>
								<p><strong>Especie: </strong>{ elperso.especie }</p>
								{
									elperso.tipo !== "" ? <p><strong>Tipo: </strong>{ elperso.tipo }</p> : ""
								}
								<p><strong>Género: </strong>{ elperso.genero }</p>
								<p><strong>Origen: </strong>{ elperso.origen }</p>
								<p><strong>Última Locación: </strong>{ elperso.locacion }</p>
								<div><strong>Episodios: </strong>
										{ 
											elperso.episodio.map(( epi ) => {
												let laclase = "";
												if ( elperso.episodio.length >= 2 ) {
													laclase = "mas2";
												} else {
													laclase = "es1";
												}
												return ( 
														<Link key={epi.count} className={laclase} to={`/rickandmorty/episodio/${epi.link}`}>{epi.link}</Link>
												)
											})
										}
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}

	return (
		<section id="RickAndMortyDetalle">
			<HelmetResumen title="Rick And Morty - Detalle" />
			<HelmetResumen title={`Rick And Morty / ${traeData?.map((asdasdasd) => {return asdasdasd.nombre})}`} />
			<Detallito />
			<Button laclase="primary" onClick={() => navigate(-1)} texto="Volver" />
		</section>
	)
		
}

export default RickAndMortyDetalle;