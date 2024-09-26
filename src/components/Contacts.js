import linkedImg from "../assets/linkedIn-logo.png";
import githubImg from "../assets/github-logo-removebg-preview.png";
import emailImg from "../assets/email-logo-removebg-preview.png";

export default function Contacts() {
  return (
    <div
      className="container d-flex justify-content-center flex-column text-center me-auto"
      style={{ height: "50vh" }}
    >
      <h1 className="paragraph-header">Contacts</h1>
      <div className=" d-flex gap-3 justify-content-center">
        <a
          className="link-dark link-offset-1"
          href="https://www.linkedin.com/in/kamila-karamanova/"
          target="_blank"
        >
          <img src={linkedImg} alt="linkedIn logo" style={{ width: "50px" }} />
        </a>
        <a
          className="link-dark link-offset-1"
          href="https://github.com/iamkaraman"
          target="_blank"
        >
          <img src={githubImg} alt="linkedIn logo" style={{ width: "50px" }} />
        </a>
        <a
          className="link-dark link-offset-1"
          href="mailto:karamanova.2000@gmail.com"
          target="_blank"
        >
          <img src={emailImg} alt="linkedIn logo" style={{ width: "50px" }} />
        </a>
      </div>
    </div>
  );
}
