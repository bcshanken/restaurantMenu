import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, description, img, price, category, _id }) => {
  return (
    <div className="card horizontal menu-item-card">
      <img className="menu-item-image" src={img} alt={title} />
      <div className="menu-item-content">
        <div className="line-clamp-4">
          <h1 className="menu-item-title">{title}</h1>
          <br className="inline-spacer" />
          <p className="menu-item-description">{description}</p>
        </div>
        <strong className="menu-item-price">{price}</strong>
      </div>
    </div>
  );
};

export default MenuItem;
