import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";

//include images into your bundle
import htmlImage from "../../img/html.jpg";

//create your first component
const Home = () => {
	return (
    <div>
    <NavBar />
    <Jumbotron />
    <Cards />
  </div>
	);
};

export default Home;
