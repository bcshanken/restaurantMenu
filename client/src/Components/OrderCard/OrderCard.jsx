import React from "react";

const OrderCard = ({ title, price, desc, details }) => {


  return (
    <div className="card-content">
      {title.map((newTitle) => (
        <span className="card-title">{newTitle}</span>
      ))}
      <strong className="card-title orders-strong">{price}</strong>
    </div>
  );
};

export default OrderCard;
