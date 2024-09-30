import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div
        data-bs-spy="scroll"
        data-bs-target="#customNavbar"
        data-bs-offset="0"
        tabIndex="0"
        style={{ position: "relative" }}
      >
        <Greeting />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
