import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light container-fluid">
        <div className="container-fluid">
          <Link className="navbar-brand text-body" to="/">
            Lime Cell
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-body" to="/products">
                  Products
                </Link>
              </li>
            </ul>
            <div>
              <Link className="nav-link text-body" to="/cart">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
