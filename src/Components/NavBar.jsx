import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    //Navingation bar component with links to route to diffrent pages
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/policy">
        Insurance
        <span className="sr-only">(current)</span>
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/customer-form">
              New Customer
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/chart">
              Chart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
