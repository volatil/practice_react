import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import './index.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Inicio from './components/Inicio';
import Map from './components/Map';
import Libro from './components/Libro';
import PerritoRandom from './components/PerritoRandom';
import Universidades from './components/Universidades';
import Zoo from './components/Zoo';
import ColorRandom from './components/ColorRandom';
import Url from './components/Url';
import Usuario from './components/Usuario';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
  
	<Router>
		
		<Header />
		<Nav />
		
		<div className="contenido">
			<Routes>
				<Route exact path="/" element={<Inicio />} />
				<Route path="/map" element={<Map />} />
				<Route path="/libro" element={<Libro />} />
				<Route path="/libro/:book" element={<Libro />} />
				<Route path="/perritorandom" element={<PerritoRandom />} />
				<Route path="/universidades" element={<Universidades />} />
				<Route path="/zoo" element={<Zoo />} />
				<Route path="/colorrandom" element={<ColorRandom />} />
				<Route path="/url" element={<Url />} />
				<Route path="/usuario" element={<Usuario />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
		
		<Footer />
		
	</Router>

  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
