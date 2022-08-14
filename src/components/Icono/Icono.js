function Icono({ nombre = "question_mark" } = {}) {
	return (
		<span style={{ marginRight: "10px" , fontSize : "1.2em" , position: "relative" , top: "8px" }} className="material-symbols-outlined">{nombre}</span>
	)
};

export default Icono;