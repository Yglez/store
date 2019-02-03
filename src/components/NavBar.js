import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar sticky-top navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#drop"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#action">
                    Action
                  </a>
                  <a className="dropdown-item" href="#another">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#somthing">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Link to="/cart" className="nav-link">
                <button className="btn btn-outline-info my-2 my-sm-0">
                  <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                  </span>
                  Cart
                </button>
              </Link>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
