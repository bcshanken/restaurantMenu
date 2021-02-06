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
      
            <NavLink className="left nav-link" to="/menu">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            
            <NavLink to="/" className="brand-logo center">
                Poseidon's Catch
            </NavLink>
            
        </div>
      </nav>
    </div>
  );
};

export default NavHomeOnly;
