import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Caja from "./caja.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar titulo="" />

			<Caja />

			<div className="row justify-content-center">
				<Card
					class="col"
					img="https://images.ecestaticos.com/DioK-LrnFNTMMJk4tpSagHbnTPk=/0x115:2265x1390/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg"></Card>
				<Card
					class="col"
					img="https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg.webp"></Card>
				<Card
					class="col"
					img="https://as01.epimg.net/diarioas/imagenes/2021/11/07/actualidad/1636307686_778477_1636307902_noticia_normal_recorte1.jpg"></Card>
				<Card
					class="col"
					img="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/purina-que-sabes-de-los-perros-poodle_0.jpg?itok=ZrgMduIR"></Card>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
