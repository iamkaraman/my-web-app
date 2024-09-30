export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg" id="customNavbar">
      <div className="container-fluid collapse navbar-collapse justify-content-center">
        <ul
          className="navbar-nav p-0 rounded-pill border border-dark"
          style={{ background: "#f4efea" }}
        >
          <li className="nav-item p-1">
            <a
              className="button-text btn btn-outline-dark border-0 rounded-pill"
              href="#home"
            >
              Main
            </a>
          </li>
          <li className="nav-item p-1">
            <a
              className="button-text btn btn-outline-dark border-0 rounded-pill"
              href="#aboutMe"
            >
              About Me
            </a>
          </li>
          <li className="nav-item p-1">
            <a
              className="button-text btn btn-outline-dark border-0 rounded-pill"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item p-1">
            <a
              className="button-text btn btn-outline-dark border-0 rounded-pill"
              href="#contacts"
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
