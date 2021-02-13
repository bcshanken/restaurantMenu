import React, { useState } from "react";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import UserNav from "../../Components/Navbar/UserNav";

const Checkout = () => {
  const [orderItems, setOrderItems] = useState(
    JSON.parse(localStorage.getItem("order")) || []
  );

  return (
    <div>
      <UserNav />
      {orderItems.map((orderItem) => (
        <CheckoutItem {...orderItem} key={orderItem.createdAt} />
      ))}
    </div>
  );
};

export default Checkout;
