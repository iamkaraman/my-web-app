export default function Contacts() {
  return (
    <div
      className="container d-flex justify-content-center flex-column text-center me-auto"
      style={{ height: "40vh" }}
    >
      <h1 className="paragraph-header">Interested in collaboration?</h1>
      <div className=" d-flex gap-3 justify-content-center">
        <a
          href="mailto:karamanova.2000@gmail.com"
          target="_blank"
          className="btn btn-lg btn-outline-dark rounded-pill button-text"
        >
          Hit me up!
        </a>
      </div>
    </div>
  );
}
