import React from "react";
import "../OrderCard/OrderCard.css";

const OrderCard = ({ menuItem, details, addOns, instructions }) => {
  return (
    <div className="card-content orders-card-wrapper">
      <span className="card-title orders-title">{menuItem.title}</span>
      {addOns.map((addOn) => {
        return (
          <React.Fragment>
            <div>
              <span className="card-title">Add-Ons: {addOn.title}</span>
            </div>
          </React.Fragment>
        );
      })}
      <span className="card-title">Customer Instructions: {instructions}</span>
    </div>
  );
};

export default OrderCard;
