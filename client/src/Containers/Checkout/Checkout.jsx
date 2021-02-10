import React, { useState } from "react";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import NavHomeOnly from "../../Components/Navbar/NavHomeOnly";

const Checkout = () => {
  const [orderItems, setOrderItems] = useState(
    JSON.parse(localStorage.getItem("order")) || []
  );

  return (
    <div>
      <NavHomeOnly />
      {orderItems.map((orderItem) => (
        <CheckoutItem {...orderItem} key={orderItem.createdAt}/>
      ))}
    </div>
  );
};

export default Checkout;
