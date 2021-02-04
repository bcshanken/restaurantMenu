import React from "react";
import "../Navbar/Nav.css"

const Nav = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="sass.html">Home</a>
            </li>
          </ul>
          <a href="#" className="brand-logo center">
            Poseidon's Catch
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
