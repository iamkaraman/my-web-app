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
      <Greeting />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
