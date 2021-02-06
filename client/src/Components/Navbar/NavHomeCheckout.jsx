import React from "react";
import "../Navbar/Nav.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const NavHomeCheckout = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
      
            <NavLink className="left nav-link" to="/adminlogin">
                <FontAwesomeIcon icon={faUserAlt} />
            </NavLink>
            
            <NavLink to="/" className="brand-logo center">
                Poseidon's Catch
            </NavLink>

            <ul id="nav-mobile" className="right nav-link">
                <FontAwesomeIcon icon={faShoppingCart} />
            </ul>
            
        </div>
      </nav>
    </div>
  );
};

export default NavHomeCheckout;