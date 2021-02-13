import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const UserNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          {pathname === "/menu" ? (
            <NavLink to="/adminlogin" className="left nav-link">
              <FontAwesomeIcon icon={faUserAlt} size="lg" />
            </NavLink>
          ) : (
            <NavLink to="/menu" className="left nav-link">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </NavLink>
          )}

          <span className="brand-logo center">POSEIDON'S CATCH</span>
          {pathname.includes("/product") || pathname === "/menu" ? (
            <NavLink to="/checkout" className="right nav-link">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </NavLink>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default UserNav;
