import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
    <div>
    <NavBar />
    <Jumbotron />
    <Cards />
    <Footer />
  </div>
	);
};

export default Home;
