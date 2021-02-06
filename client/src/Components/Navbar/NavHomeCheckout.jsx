import React from "react";
import "../Navbar/Nav.css";
import { NavLink, Link } from "react-router-dom";

const NavHomeCheckout = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
      
              <NavLink className="left nav-link" to="/">
              <i class='fas fa-home'></i>
            </NavLink>
            
          <a href="#" className="brand-logo center">
            Poseidon's Catch
          </a>
          <ul id="nav-mobile" className="right nav-link">
          <i className='fas fa-shopping-cart'></i>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavHomeCheckout;