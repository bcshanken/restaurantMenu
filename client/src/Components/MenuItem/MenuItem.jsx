import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = ({ title, description, img, price, _id }) => {
  return (
    <NavLink to={`/item/${_id}`} className="card horizontal menu-item-card">
      <img className="menu-item-image" src={img} alt={title} />
      <div className="menu-item-content">
        <div className="line-clamp-4">
          <h1 className="menu-item-title">{title}</h1>
          <br className="inline-spacer" />
          <p className="menu-item-description">{description}</p>
        </div>
        <strong className="menu-item-price">{price}</strong>
      </div>
    </NavLink>
  );
};

export default MenuItem;
