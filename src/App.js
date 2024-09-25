import "./App.css";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Greeting />
      <AboutMe />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
