import "./App.css";
import helloImg from "./assets/hello-img.png";

function App() {
  return (
    <div className="container">
      <div className="d-flex vh-100">
        <div className="col my-auto ms-5">
          <h1 class="display-2 fw-normal">
            Hello,
            <br /> I'm Kamila.
          </h1>
          <p className="fw-normal lh-sm fs-5">
            I am a recent graduate with over three years of experience in web
            development, specialising in front-end technologies. If you have an
            exiting project, feel free to connect with me on{" "}
            <a
              class="link-dark link-offset-1"
              href="https://www.linkedin.com/in/kamila-karamanova/"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            or hit me up via{" "}
            <a
              class="link-dark link-offset-1"
              href="mailto:karamanova.2000@gmail.com"
              target="_blank"
            >
              email
            </a>
            !
          </p>
          <a
            href="https://drive.google.com/file/d/1hzkqzpIbDbFFWx8C6hmKOxf71ENBhI8l/view?usp=sharing"
            target="_blank"
            className="btn btn-outline-dark"
          >
            Check my CV
          </a>
        </div>
        <div className="col d-flex my-auto justify-content-center">
          <img src={helloImg} alt="hand-waving memoji" />
        </div>
      </div>
      <div>
        <h1>About me</h1>
      </div>
      <div>
        <h1>My skills</h1>
      </div>
      <div>
        <h1>My portfolio</h1>
      </div>
      <div>
        <h1>My contacts</h1>
      </div>
    </div>
  );
}

export default App;
