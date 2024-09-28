export default function Footer() {
  return (
    <footer className="text-center bg-body-transparent">
      <div className="row text-center fw-medium p-3 bg-body-transparent paragraph-text border-1 border-top border-secondary">
        <div className="col d-flex align-items-center">
          Copyright © 2024 Kamila Karamanova
        </div>
        <div className="col d-flex justify-content-end">
          <a
            className="link-dark link-offset-1 m-1"
            href="https://www.linkedin.com/in/kamila-karamanova/"
            target="_blank"
          >
            <i className="bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
            className="link-dark link-offset-1 m-1"
            href="https://github.com/iamkaraman"
            target="_blank"
          >
            <i className="bi-github" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
