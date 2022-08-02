import React from 'react';

function Contacto () {

	var imagen = "https://ouch-cdn2.icons8.com/SruncGKER90PhFvNhq7jsF43rLENGAEiQqZ_UYwlv4Q/rs:fit:256:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTUw/LzY3MmEyMjI1LTM5/NGItNDg1MS04ZjY1/LWJjY2NjYTM2ZTUz/My5zdmc.png";

	return (
		<section className="contacto">
			<h2>CONTACTO</h2>
			<img style={{display: 'block' , margin: '0 auto' }} src={ imagen } alt="Contacto" />
		</section>
	);
}

export default Contacto;