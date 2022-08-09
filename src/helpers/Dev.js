import "./Dev.css";
import $ from "jquery";

function Dev() {
  function Medidas() {
    var ventana = {
      ancho: $(window).width(),
      alto: $(window).height()
    };
    var documento = {
      ancho: $(document).width(),
      alto: $(document).height()
    };
    console.log(`
    |===========| VENTANA |===========|
    Ancho: ${ventana.ancho}px
    Alto: ${ventana.alto}px
    |===========| DOCUMENTO |===========|
    Ancho: ${documento.ancho}px
    Alto: ${documento.alto}px
    `);
  }
  Medidas();
  return (
    <div onClick={Medidas} id="dev">
      <p>
        Medida: <span></span>
      </p>
    </div>
  );
}

export default Dev;
