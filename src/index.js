
import { Fragment } from "react";
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Nav from "./components/Nav";
import RickAndMorty from "./pages/RickAndMorty";
import TodoEn90Dias from "./pages/TodoEn90Dias";
import Feriados from "./pages/Feriados";
import Crypto from "./pages/Crypto";
import CryptoDetalle from "./pages/CryptoDetalle";
import Color from "./pages/Color";
import Usuario from "./pages/Usuario";
import Universidades from "./pages/Universidades";
import PerritoRandom from "./pages/PerritoRandom";
import Zoo from "./pages/Zoo";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";

// COMPONENTS
import Darkmode from "./components/darkmode/Darkmode";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// CSS
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<Fragment>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
		<Darkmode />
		<Router>
			<Header />
			<Nav />
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/rickandmorty" element={<RickAndMorty />} />
				<Route path="/todoen90dias" element={<TodoEn90Dias />} />
				<Route path="/feriados" element={<Feriados />} />
				<Route path="/crypto" element={<Crypto />} />
				<Route path="/crypto/:id" element={<CryptoDetalle />} />
				<Route path="/color" element={<Color />} />
				<Route path="/usuario" element={<Usuario />} />
				<Route path="/universidades" element={<Universidades />} />
				<Route path="/perritorandom" element={<PerritoRandom />} />
				<Route path="/zoo" element={<Zoo />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="*" element={<Error />} />
			</Routes>
			
			<Footer />
		</Router>
	</Fragment>
);
