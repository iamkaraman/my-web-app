import "./App.css";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Greeting />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
