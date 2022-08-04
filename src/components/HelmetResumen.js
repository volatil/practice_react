import {Helmet} from "react-helmet";

function HelmetResumen( props ) {
	return (
		<Helmet>
			<title>PRACTICE {`{ REACT }`} - { props.title }</title>
			{/* <meta charSet="utf-8" /> */}
			{/* <link rel="canonical" href="http://mysite.com/example" /> */}
		</Helmet>
	);
}

export default HelmetResumen;