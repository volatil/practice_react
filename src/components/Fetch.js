import React from 'react';
import { Route , NavLink } from "react-router-dom";
import FetchChow from './FetchChow';

function Fetch () {
	
	return ( 
		<section className="fetch">
			<h2>Fetch</h2>
			{/* <NavLink to="/fetch">Chow Chow</NavLink> */}
			{/* <Route path="/fetch" element={<FetchChow />} /> */}
			{/* <Route path="/fetch" element={<Fetch />} /> */}
		</section>
	)
};

export default Fetch;