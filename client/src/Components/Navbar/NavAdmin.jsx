import React from "react";
import "../Navbar/Nav.css";
import { NavLink} from "react-router-dom";

const NavAdmin = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">

              <NavLink to="/" className="brand-logo admin-logo left">
                Poseidon's Catch
              </NavLink>
      
              <NavLink className="right nav-link" to="/adminmenu">My Menu</NavLink>
          
              <NavLink className="right nav-link" to="/newfood">New Food</NavLink>

              <NavLink className="right nav-link" to="/orders">Orders</NavLink>
          
              <NavLink className="right nav-link" to="/orderdetail">OrderDetails</NavLink>

              <NavLink className="right nav-link" to="/newuser">OrderDetails</NavLink>

        </div>
      </nav>
    </div>
  );
};

export default NavAdmin;