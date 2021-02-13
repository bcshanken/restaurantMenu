import React from "react";
import "./CheckoutItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const CheckoutItem = ({ menuItem, addOns, specialInstructions, createdAt }) => {
  const calculateTotal = () => {
    let total = parseFloat(menuItem.price);
    addOns.forEach((addOn) => {
      total += parseFloat(addOn.price);
    });
    return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <div className="checkout-item-card">
      <div className="checkout-item-wrapper">
        <span className="checkout-item-title">{menuItem.title}</span>
        <span className="checkout-item-price">{menuItem.price}</span>
      </div>
      {addOns.map((addOn) => (
        <div className="checkout-item-add-on-wrapper" key={addOn._id}>
          <span className="checkout-item-add-on-title">{addOn.title}</span>
          <span className="checkout-item-add-on-price">{addOn.price}</span>
        </div>
      ))}
      <div className="checkout-item-bottom-wrapper">
        <NavLink
          to={{
            pathname: `/item/${menuItem._id}`,
            state: { menuItem, addOns, specialInstructions, createdAt },
          }}
          className="checkout-item-edit"
        >
          <FontAwesomeIcon
            icon={faMinusCircle}
            className="checkout-item-edit-icon"
          />
          Edit
        </NavLink>
        <strong className="checkout-item-total">{calculateTotal()}</strong>
      </div>
    </div>
  );
};

export default CheckoutItem;
