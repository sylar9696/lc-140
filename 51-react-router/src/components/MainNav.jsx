import { Link, NavLink } from 'react-router-dom';

export default function MainNav() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>

                {/* <a className="nav-link active" href="#" aria-current="page">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a> */}
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" aria-current="page">
                  Contatti
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/products" className="nav-link" aria-current="page">
                  Prodotti
                </NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>

  );
}
