import React from "react";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid d-flex">
        <a className="navbar-brand" href="#">
          Company
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-nav d-flex">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </div>
        </div>

        <div className="navbar-nav">
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={() => navigate("/signup")}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
