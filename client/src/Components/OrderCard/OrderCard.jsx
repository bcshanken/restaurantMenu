import React from "react";

const OrderCard = ({title, price}) => {
  return (
    <div className="card-content">
      <span className="card-title">{title}</span>
      <strong>{price}</strong>
    </div>
  );
};

export default OrderCard;
