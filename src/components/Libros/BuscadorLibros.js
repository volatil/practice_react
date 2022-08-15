import Button from 'components/Button';

// FUNCTIONS
import { traeLibro } from "components/Libros/Functions";

function BuscadorLibros () {

	return (
		<div className="buscador">
			<div>
				<label>Buscar Libro</label>
				<input className="input_buscar" type="text" placeholder="Baldor? Porota? Papelucho?" />
			</div>
			<Button onClick={traeLibro} laclase="primary" texto="BUSCAR" />
		</div>
	);
};

export default BuscadorLibros;