import React from "react";
import "../Navbar/Nav.css";
import { NavLink, Link } from "react-router-dom";

const NavAdmin = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
      
              <NavLink className="left" to="/adminmenu">My Menu</NavLink>
            
          <a href="#" className="brand-logo center">
            Poseidon's Catch
          </a>
          <NavLink className="right" to="/newfood">New Food</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavAdmin;