import React from "react";

const MenuItem = ({ title, description, img, price, category }) => {
  return (
    <div className="card horizontal">
      <div className="card-image">
        <img src={img} alt={title} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{description}</p>
          <strong>{price}</strong>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
