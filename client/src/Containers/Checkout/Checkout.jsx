import React, { useState } from "react";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import UserNav from "../../Components/UserNav.jsx/UserNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";

const Checkout = () => {
  const [orderItems, setOrderItems] = useState(
    JSON.parse(localStorage.getItem("order")) || []
  );

  return (
    <div className="checkout-wrapper">
      <UserNav />
      {orderItems.length === 0 ? (
        <div id="message-wrapper">
          <div id="circle">
            <FontAwesomeIcon icon={faShoppingCart} size="8x" id="cart-icon" />
          </div>
          <strong id="empty-cart-message">Your cart is empty</strong>
        </div>
      ) : (
        orderItems.map((orderItem) => (
          <CheckoutItem {...orderItem} key={orderItem.createdAt} />
        ))
      )}
    </div>
  );
};

export default Checkout;
