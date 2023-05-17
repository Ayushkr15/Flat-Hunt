import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              width="30"
              height="30"
              class="d-inline-block align-text-top logo col-1"
            ></img>
            {/* <span>Flat & PG Hunt</span> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  {" "}
                  All Place
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/contact">
                  {" "}
                  Contact Us{" "}
                </Link>{" "}
              </li>

              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/about">
                  {" "}
                  About Us{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
