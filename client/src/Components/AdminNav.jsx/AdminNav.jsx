import React from "react";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          POSEIDON'S CATCH
        </NavLink>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab">
            <NavLink to="/admin/menu">My Menu</NavLink>
          </li>
          <li className="tab">
            <NavLink to="/admin/menu/add">Add Menu Item</NavLink>
          </li>
          <li className="tab">
            <NavLink to="/admin/orders">Orders</NavLink>
          </li>
          <li className="tab">
            <NavLink to="/admin/create-user">Create User</NavLink>
          </li>
          <li className="tab">
            <NavLink to="/login">Log Out</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNav;
