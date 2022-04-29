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
import Publications from "./Components/Publications/Publications";
import AboutMe from "./Components/AboutMe/AboutMe";
import UseScrolleffect from "./customHooks/UseScrolleffect";

function App() {
	UseScrolleffect();
	return (
		<>
			{/* <div className="home">
				
			</div> */}
			<Header />
			<Banner />
			<AboutMe />
			<BackToSchool />
			<EnvironmentInitiative />
			<ResearchWork />
			<Publications />
			<Gallary />
			<InTheMedia />
			<Footer />
		</>
	);
}

export default App;
