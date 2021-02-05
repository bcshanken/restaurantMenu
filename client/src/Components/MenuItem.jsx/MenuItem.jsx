import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, description, img, price, _id }) => {
  return (
    <a href={"/product" + _id} className="card horizontal menu-item-card">
      <img className="menu-item-image" src={img} alt={title} />
      <div className="card-stacked">
        <div className="card-content menu-item-content">
          <p className="menu-item-description">
            <span className="card-title menu-item-title">{title}</span>
            {description}
          </p>
          <strong className="menu-item-price">{price}</strong>
        </div>
      </div>
    </a>
  );
};

export default MenuItem;
