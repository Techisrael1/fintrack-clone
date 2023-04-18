import React from "react";
import Footer from "./Components/footer/Footer";
import Nav from "./Components/navbar/Nav";
import Home from "./Components/home/Home";
import Section from "./Components/section/Section";
import Credit from "./Components/credit/Credit";
import Reviews from "./Components/reviews/Reviews";

const App = () => {
	return (
		<div>
			<Nav />
			<Home />
			<Section />
			<Credit />
			<Reviews />
			<Footer />
		</div>
	);
};

export default App;
