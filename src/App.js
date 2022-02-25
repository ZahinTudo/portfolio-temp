import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import BackToSchool from "./Components/BackToSchool/BackToSchool";
import Footer from "./Components/Footer/Footer";
import Gallary from "./Components/Gallary/Gallary";
import Header from "./Components/Header/Header";
import InTheMedia from "./Components/InTheMedia/InTheMedia";

function App() {
	return (
		<>
			<Header />
			<Banner />
			<BackToSchool />
			<Gallary />
			<InTheMedia />
			<Footer />
		</>
	);
}

export default App;
