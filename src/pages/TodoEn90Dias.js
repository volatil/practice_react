import React, { useState, useEffect } from "react";

import "assets/css/TodoEn90Dias.css";

import HelmetResumen from "components/Helmet/HelmetResumen";

function TodoEn90Dias() {
  const [shows, setShows] = useState();
  const api = "https://api.tvmaze.com/search/shows?q=fiance";

  useEffect(() => {
    fetch(api)
      .then((api) => api.json())
      .then((shows) => {
        var todo = [];
        for (var count = 0; count <= shows.length - 1; count++) {
          var resumen = shows[count].show;
          var show = {
            id: resumen.id,
            nombre: resumen.name,
            tipo: resumen.type,
            imagen: {
              mediano: resumen.image.medium,
              original: resumen.image.original
            },
            estado: function () {
              var estado = resumen.status;
              estado = estado.replaceAll("Running", "En Rodaje");
              estado = estado.replaceAll("Ended", "Finalizado");
              estado = estado.replaceAll("To Be Determined", "Por Determinar");
              return estado;
            },
            url: resumen.officialSite,
            valoracion: resumen.rating.average,
            genero: function () {
              let genero = resumen.genres;
              genero = String(genero).replaceAll(",", " , ");
              return genero;
            },
            imdb: resumen.externals.imdb,
            descripcion: function () {
              let descripcion = resumen.summary;
              descripcion = descripcion.replaceAll("<p>", "");
              descripcion = descripcion.replaceAll("</p>", "");
              descripcion = descripcion.replaceAll("<b>", "");
              descripcion = descripcion.replaceAll("</b>", "");
              descripcion = descripcion.replaceAll("<i>", "");
              descripcion = descripcion.replaceAll("</i>", "");
              return descripcion;
            },
            horario: {
              hora: resumen.schedule.time,
              dias: function () {
                var dias = resumen.schedule.days;
                dias = String(dias).replaceAll("Sunday", "Domingo");
                dias = String(dias).replaceAll("Saturday", "Sábado");
                dias = String(dias).replaceAll("Monday", "Lunes");
                dias = String(dias).replaceAll("Tuesday", "Martes");
                return dias;
              }
            },
            tv: resumen.network?.name,
            stream: resumen.webChannel?.name
          };
          todo.push({
            id: show.id,
            nombre: show.nombre,
            tipo: show.tipo,
            imagen_mediano: show.imagen.mediano,
            imagen_original: show.imagen.original,
            estado: show.estado(),
            url: show.url,
            valoracion: show.valoracion,
            genero: show.genero(),
            imdb: show.imdb,
            descripcion: show.descripcion(),
            horario: {
              hora: show.horario.hora,
              dias: show.horario.dias()
            },
            tv: show.tv,
            stream: show.stream
          });
        }
        setShows(todo);
      });
  }, [setShows]);

  return (
    <section id="tests">
      <h2>TODO EN 90 DÍAS</h2>
      <HelmetResumen title="Todo en 90 Días" />
      <div className="tests">
        {shows?.map((sh) => {
          return (
            <div className="test" key={sh.id}>
              <img
                style={{ width: "100%" }}
                src={sh.imagen_mediano}
                alt={sh.nombre}
              />
              <h4>{sh.nombre}</h4>
              <p>
                <strong>Horario</strong>
              </p>
              <ul>
                {sh.horario.hora ? <li>{sh.horario.hora}</li> : ""}
                {sh.horario.dias ? <li>{sh.horario.dias}</li> : ""}
              </ul>
              {sh.tv ? (
                <p>
                  <strong>TV: </strong>
                  {sh.tv}
                </p>
              ) : (
                ""
              )}
              {sh.stream ? (
                <p>
                  <strong>Stream: </strong>
                  {sh.stream}
                </p>
              ) : (
                ""
              )}
              <p>
                <strong>Tipo: </strong>
                {sh.tipo}
              </p>
              <p>
                <strong>Estado: </strong>
                {sh.estado}
              </p>
              {sh.valoracion ? (
                <p>
                  <strong>Valoracion: </strong>
                  {sh.valoracion}
                </p>
              ) : (
                ""
              )}
              {sh.genero ? (
                <p>
                  <strong>Genero: </strong>
                  {sh.genero}
                </p>
              ) : (
                ""
              )}
              <p>
                <strong>IMDB: </strong>
                <a
                  href={`https://www.imdb.com/title/${sh.imdb}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  IR
                </a>
              </p>
              <p className="descripcion">{sh.descripcion}</p>
              <button>
                <a href={sh.url} target="_blank" rel="noreferrer">
                  Visitar Pagina
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TodoEn90Dias;
