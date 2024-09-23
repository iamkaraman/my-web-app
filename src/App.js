import "./App.css";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Greeting />
      <AboutMe />
    </div>
  );
}

export default App;
