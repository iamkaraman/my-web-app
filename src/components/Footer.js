export default function Footer() {
  return (
    <footer className="text-center bg-body-transparent">
      <div className="container pt-4">
        <section className="">
          <a
            className="link-dark link-offset-1 m-1"
            href="https://www.linkedin.com/in/kamila-karamanova/"
            target="_blank"
          >
            <i className="bi-linkedin" style={{ fontSize: "2rem" }}></i>
          </a>
          <a
            className="link-dark link-offset-1 m-1"
            href="https://github.com/iamkaraman"
            target="_blank"
          >
            <i className="bi-github" style={{ fontSize: "2rem" }}></i>
          </a>
        </section>
      </div>

      {/* Copyright  */}
      <div className="text-center p-3 bg-body-transparent paragraph-text">
        Copyright © 2024 Kamila Karamanova
      </div>
    </footer>
  );
}
