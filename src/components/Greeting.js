import helloImg from "../assets/hello-img.png";

export default function Greeting() {
  return (
    <div className="d-flex vh-100" id="home">
      <div className="col my-auto ms-5">
        <h2 className="display-2 fw-normal paragraph-header">
          Hello,
          <br /> I'm Kamila.
        </h2>
        <p className="fw-normal lh-base fs-5 paragraph-text">
          I am a recent graduate with over three years of experience in web
          development, specializing in front-end technologies. If you have an
          exciting project, feel free to connect with me on{" "}
          <a
            className="link-dark link-offset-1"
            href="https://www.linkedin.com/in/kamila-karamanova/"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          or hit me up via{" "}
          <a
            className="link-dark link-offset-1"
            href="mailto:karamanova.2000@gmail.com"
            target="_blank"
          >
            email
          </a>
          !
        </p>
        <a
          href="https://drive.google.com/file/d/1yFRQBFwCA9feMkNwLRCcm4UJrjlIBzTg/view?usp=sharing"
          target="_blank"
          className="btn btn-lg btn-outline-dark rounded-pill button-text"
        >
          Check my CV
        </a>
      </div>
      <div className="col d-flex my-auto justify-content-center">
        <img src={helloImg} alt="hand-waving memoji" />
      </div>
    </div>
  );
}
