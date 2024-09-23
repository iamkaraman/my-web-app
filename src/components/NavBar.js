export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid collapse navbar-collapse justify-content-center">
        <ul
          className="navbar-nav p-0 rounded-pill border border-dark"
          style={{ background: "#f4efea" }}
        >
          <li className="nav-item p-1">
            <a className="btn btn-dark rounded-pill button-text" href="#">
              Main
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn button-text" href="#aboutMe">
              About Me
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn button-text" href="#">
              Skills
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn button-text" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="btn button-text" href="#">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
