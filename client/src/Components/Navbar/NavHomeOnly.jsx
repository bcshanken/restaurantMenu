import React from "react";
import "../Navbar/Nav.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavHomeOnly = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
      
              <NavLink className="left nav-link" to="/">
              <FontAwesomeIcon icon={faHome} />
              </NavLink>
            
          <a href="#" className="brand-logo center">
            Poseidon's Catch
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavHomeOnly;
