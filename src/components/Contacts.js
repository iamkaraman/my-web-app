export default function Contacts() {
  return (
    <div
      className="container d-flex justify-content-center flex-column text-center me-auto"
      style={{ height: "50vh" }}
    >
      <h1 className="paragraph-header">Contacts</h1>
      <div className="row">
        <div className="col">
          <p className="fw-normal lh-base fs-5 paragraph-text">
            <a
              className="link-dark link-offset-1"
              href="https://www.linkedin.com/in/kamila-karamanova/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="col">
          <p className="fw-normal lh-base fs-5 paragraph-text">
            <a
              className="link-dark link-offset-1"
              href="https://github.com/iamkaraman"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="col">
          <p className="fw-normal lh-base fs-5 paragraph-text">
            <a
              className="link-dark link-offset-1"
              href="mailto:karamanova.2000@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
