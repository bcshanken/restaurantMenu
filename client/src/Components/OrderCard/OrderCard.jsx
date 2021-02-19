import React from "react";
import "../OrderCard/OrderCard.css";

const OrderCard = ({ menuItem, details, addOns, instructions,  }) => {
  return (
    <div className="card-content orders-card-wrapper">
<dl>
  <dt><span className="card-title orders-title"> - {menuItem.title}</span></dt>
  <span className="card-title orders-title">Add-Ons:</span>
      {addOns.map((addOn) => {
        return (
          <React.Fragment>
                <dd className="card-title orders-title">
                  - {addOn.title}
                </dd>
          </React.Fragment>
        );
      })}
</dl>
      <span className="card-title orders-title">Customer Instructions: {instructions}</span>
    </div>
  );
};

export default OrderCard;
