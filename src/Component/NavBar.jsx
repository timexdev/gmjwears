import React from "react";
import "./NavBar.css";
import logo from "../Assets/Logo/Logo.png";
import search from "../Assets/Icons/search.png";
import cart from "../Assets/Icons/cart.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div div className="fixed-top">
      <div className="bannerwrapper">
        <p className="bannerP">
          Get 30% Off this Summer Sale. Grab It Fast!!!{" "}
          <span className="bannerSp">15H:32M:38S</span>
        </p>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/"><img src={logo} alt="logo" style={{ cursor: "pointer" }} /></Link>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active me-3"
                  aria-current="page"
                  href="#"
                >
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New and Featured
                </a>
              </li>
            </ul>
            <section class="" role="search">
              <img
                src={search}
                alt="search"
                style={{ cursor: "pointer", marginRight: "30px" }}
              />
              <Link to="cart">
              <img
                src={cart}
                alt="cart"
                style={{ cursor: "pointer", marginRight: "30px" }}
              />
              </Link>
              <button className="loginBtn" type="submit">
                Search
              </button>
            </section>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
