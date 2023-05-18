import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  return (
    <div className="navComp">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              class="d-inline-block align-text-top logo col-1"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  {" "}
                  Flats and Appartments
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
