import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/orderdetail">Order Details</NavLink>
            </li>
            <li>
              <NavLink to="/product/:id">Product Details</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
          </ul>
          <a href="/" className="brand-logo center">
            Poseidon's Catch
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Checkout link goes here</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
