import githubImg from "../assets/github-explorer-img.png";
import gameImg from "../assets/tic-tac-game-img.png";
import calculatorImg from "../assets/investment-calculator-img.png";

export default function Portfolio() {
  return (
    <div className="container vh-100 d-flex justify-content-center flex-column text-center">
      <h1 className="paragraph-header">Portfolio</h1>
      <div className="card-group text-alignment d-flex gap-3">
        <div
          className="card rounded-5 border text-bg-light"
          style={{ width: "18rem" }}
        >
          <img
            src={githubImg}
            className="rounded-top-5 img-fluid border-bottom h-50"
            alt="github image"
          />
          <div className="card-body h-50">
            <h5 className="card-title paragraph-header">Github Explorer</h5>
            <p className="card-text paragraph-text">
              Github Explorer is a small web app. It's main function is to
              search for public repositories by username.
            </p>
            <a
              href="https://github-explorer.iamkaraman.com/"
              target="_blank"
              className="btn btn-primary rounded-pill fs-6 button-text p-2 m-1"
              style={{ background: "#375AAB" }}
            >
              Check Web App
            </a>
          </div>
        </div>
        <div
          className="card rounded-5 border text-bg-light"
          style={{ width: "18rem" }}
        >
          <img
            src={gameImg}
            className="rounded-top-5 img-fluid border-bottom h-50"
            alt="github image"
          />
          <div className="card-body h-50">
            <h5 className="card-title paragraph-header">Tic Tac Toe Game</h5>
            <p className="card-text paragraph-text">
              Tic Tac Toe is a well-known simple game for two. Both players can
              input their names and just start the game.
            </p>
            <a
              href="https://tic-tac-game.iamkaraman.com/"
              target="_blank"
              className="btn btn-primary rounded-pill fs-6 button-text p-2 m-1"
              style={{ background: "#375AAB" }}
            >
              Check Web App
            </a>
          </div>
        </div>
        <div
          className="card rounded-5 border text-bg-light"
          style={{ width: "18rem" }}
        >
          <img
            src={calculatorImg}
            className="rounded-top-5 img-fluid border-bottom h-50"
            alt="github image"
          />
          <div className="card-body h-50">
            <h5 className="card-title paragraph-header">
              Investment Calculator
            </h5>
            <p className="card-text paragraph-text">
              This is an investment calculator app that makes the simpliest
              calculations for investors.
            </p>
            <a
              href="https://investment-calculator.iamkaraman.com/"
              target="_blank"
              className="btn btn-primary rounded-pill fs-6 button-text p-2 m-1"
              style={{ background: "#375AAB" }}
            >
              Check Web App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
