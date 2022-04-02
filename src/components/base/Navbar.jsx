import React from "react";
import SearchProduct from "../pages/SearchProduct";
import logo from "../assets/stars.png";
import { Link } from "react-router-dom";
import routes from "../../routes";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark border border-dark shadow-lg">
      <div className="col-sm-6 col-md-3">
        <div className="navbar-brand">
          {" "}
          <Link to="/" className="text-decoration-none">
            <img src={logo} alt=" Logo" className="img-widht" />
            <span className="nasa-text text-white">APOD</span>
          </Link>
        </div>
      </div>

      <div className="mobile-links d-md-none">
        <ul class="list-inline">
          <li class="list-inline-item">
            {routes
              .filter((item) => item.isNav)
              .map((item, index) => (
                <Link
                  key={index}
                  className="text-light text-decoration-none px-2"
                  to={item.path}
                >
                  {item.title}
                </Link>
              ))}
          </li>
        </ul>
      </div>

      <div className="col-sm-6 col-md-5">
        <div className="search-product">
          <SearchProduct />
        </div>
      </div>

      <div className=" col-md-3 ms-auto links d-none d-md-block">
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            {routes
              .filter((item) => item.isNav)
              .map((item, index) => (
                <Link
                  key={index}
                  className="nav-item nav-link h4 text-light mx-4"
                  to={item.path}
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
