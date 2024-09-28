export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg" id="navbar">
      <div className="container-fluid collapse navbar-collapse justify-content-center">
        <ul
          className="navbar-nav p-0 rounded-pill border border-dark"
          style={{ background: "#f4efea" }}
        >
          <li className="nav-item p-1">
            <a className="nav-link btn button-text" href="#home">
              Main
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="nav-link btn button-text" href="#aboutMe">
              About Me
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="nav-link btn button-text" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="nav-link btn button-text" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item p-1">
            <a className="nav-link btn button-text" href="#contacts">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
