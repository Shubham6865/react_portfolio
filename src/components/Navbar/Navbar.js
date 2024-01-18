
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top  w-100 nav_bg p-0 m-0 ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          PORTFOLIO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactme">
                CONTACT ME
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  );
};

export default Navbar;
