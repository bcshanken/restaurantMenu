import React from "react";
import "../Navbar/Nav.css";
import { NavLink, Link } from "react-router-dom";

const NavHomeOnly = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
      
              <NavLink className="left" to="/">Home</NavLink>
            
          <a href="#" className="brand-logo center">
            Poseidon's Catch
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavHomeOnly;
