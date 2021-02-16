import React from "react";
import "../OrderCard/OrderCard.css";

const OrderCard = ({ title, price, desc, details, _id }) => {
  return (
    <div className="card-content orders-card-wrapper">
      {title.map((newTitle) => {
        return (
          <React.Fragment key={newTitle}>
            <div key={newTitle}>
              <span className="card-title orders-title">
                {newTitle}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OrderCard;
