import React from "react";
import "../OrderCard/OrderCard.css"

const OrderCard = ({ title, price, desc, details }) => {
  return (
    <div className="card-content orders-card-wrapper">
      <div className="col s6 input-field">
        <select
          className="browser-default"
          name="category"
          // value={category}
          // onChange={(e) => {
          //   setCategory(e.target.value);
          // }}
        >
          <option value="" selected>
            Status
          </option>
          <option value="Pending">Pending</option>
          <option value="Cooking">Cooking</option>
          <option value="Finished">Finished</option>
          <option value="Sent">Sent</option>
        </select>
      </div>
      {title.map((newTitle) => {
        return (
          <>
            <span className="card-title orders-title">{newTitle}</span>
            <span className="card-title orders-detail">{details}</span>
          </>
        );
      })}

      <strong className="card-title orders-text">Subtotoal: $28.99</strong>
    </div>
  );
};

export default OrderCard;
