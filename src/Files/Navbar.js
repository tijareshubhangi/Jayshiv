import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-0">
        <div className="row g-0 d-none d-lg-flex bg-primary">
          <div className="col-lg-6 ps-5 text-start bg-primary">
            <div className="h-100 d-inline-flex align-items-center text-white bg-primary">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href="https://www.facebook.com/profile.php?id=61559071919481">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-link text-light" href="https://twitter.com">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-link text-light" href="https://linkedin.com">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-link text-light" href="https://www.instagram.com/jay_shiv_associates/">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
              <span className="call">
                <i className="fa fa-phone-alt me-2" /> Call Us:
              </span>
              <span className="call">+91 82087 10419</span>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <NavLink to="/" className="navbar-brand ps-5 me-0">
          <img src="img/logo.png" alt="Logo" className="text-white1" />
        </NavLink>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink exact to="/" className="nav-item nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/services" className="nav-item nav-link" activeClassName="active">
              Services
            </NavLink>
            <div className="nav-item dropdown">
              <NavLink
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </NavLink>
              <div className="dropdown-menu bg-light m-0">
                <NavLink to="/completed" className="dropdown-item" activeClassName="active">
                  Completed
                </NavLink>
                <NavLink to="/ongoing" className="dropdown-item" activeClassName="active">
                  OnGoing
                </NavLink>
                <NavLink to="/testimonial" className="dropdown-item" activeClassName="active">
                  Testimonial
                </NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
}
