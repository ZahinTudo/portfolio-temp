import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import BackToSchool from "./Components/BackToSchool/BackToSchool";
import Footer from "./Components/Footer/Footer";
import Gallary from "./Components/Gallary/Gallary";
import Header from "./Components/Header/Header";
import InTheMedia from "./Components/InTheMedia/InTheMedia";
import EnvironmentInitiative from "./Components/EnvironmentInitiative/EnvironmentInitiative";
import ResearchWork from "./Components/ResearchWork/ResearchWork";

function App() {
	return (
		<>
			<Header />
			<Banner />
			<BackToSchool />
			{/* <ResearchWork /> */}
			<EnvironmentInitiative />
			<Gallary />
			<InTheMedia />
			<Footer />
		</>
	);
}

export default App;
