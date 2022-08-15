import React, { useState, useEffect } from "react";

// COMPONENTS
import Button from "components/Button";
import HelmetResumen from "components/Helmet/HelmetResumen";
import Icono from "components/Icono/Icono";

// CSS
import "assets/css/Feriados.css";

// https://date.nager.at/
// https://date.nager.at/api/v3/PublicHolidays/2017/AT

function Feriados() {
	const [feriados, setFeriados] = useState();
	
	const api = "https://date.nager.at/api/v3/PublicHolidays/2022/CL";
	
	//COMPONENTE BUSCADOR
	function Buscador() {
		return (
			<div id="buscador">
			<input
			className="inputBuscar"
			type="text"
			placeholder="Buscar por Pais"
			/>
			<Button laclase="primary" texto="Buscar" />
			</div>
			);
		}
		
		useEffect(() => {
			fetch(api)
			.then((api) => api.json())
			.then((feriados) => {
				var todo = [];
				for (var count = 0; count <= feriados.length - 1; count++) {
					var resumen = feriados[count];
					var feriado = {
						id: resumen.date,
						nuevoid: function () {
							let nuevoid = count + 1;
							return nuevoid;
						},
						nombre: function () {
							let nombre = resumen.localName;
							nombre = nombre.toLowerCase();
							return nombre;
						},
						fecha: resumen.date
					};
					todo.push({
						id: feriado.id,
						nuevoid: feriado.nuevoid(),
						nombre: feriado.nombre(),
						fecha: feriado.fecha
					});
				}
				setFeriados(todo);
			});
		}, [setFeriados]);
		
		return (
			<section id="feriados">
			<h2>
				<Icono nombre="calendar_month" />
				FERIADOS
			</h2>
			<HelmetResumen title="Feriados Chile" />
			<Buscador />
			<div className="feriados">
			{feriados?.map((feriado) => {
				return (
					<div
					className="feriado"
					data-feriadonombre={feriado.nombre}
					key={feriado.nuevoid}
					>
					<h4>
					<strong>{feriado.nombre}</strong>
					</h4>
					<p>{feriado.fecha}</p>
					</div>
					);
				})}
				</div>
				</section>
				);
			}
			
			export default Feriados;
