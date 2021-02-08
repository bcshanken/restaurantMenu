import React from "react";
import "../Navbar/Nav.css";
import { NavLink, Link } from "react-router-dom";

const NavAdmin = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
      
              <NavLink className="left nav-link" to="/adminmenu">My Menu</NavLink>
            
              <NavLink to="/" className="brand-logo center">
                Poseidon's Catch
              </NavLink>

              <NavLink className="right nav-link" to="/newfood">New Food</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavAdmin;