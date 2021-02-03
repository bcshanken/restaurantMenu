import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, description, img, price, category, _id }) => {
  return (
    <div className="card horizontal menu-item-card">
      <img className="menu-item-image" src={img} alt={title} />
      <div className="card-stacked">
        <div className="card-content menu-item-content">
          <span className="card-title menu-item-title">{title}</span>
          <p className="menu-item-description">{description}</p>
          <strong className="menu-item-price">{price}</strong>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
