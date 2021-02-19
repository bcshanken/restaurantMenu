import React, { useEffect, useState } from "react";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import UserNav from "../../Components/UserNav.jsx/UserNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/API";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [orderItems, setOrderItems] = useState(
    JSON.parse(localStorage.getItem("order")) || []
  );
  const [orderTotal, setOrderTotal] = useState("");

  const buildOrder = () => {
    const order = {
      price: orderTotal,
      items: [],
    };

    orderItems.forEach((orderItem) => {
      const addOns = [];
      orderItem.addOns.forEach((addOn) => {
        addOns.push(addOn._id);
      });

      order.items.push({
        menuItem: orderItem.menuItem._id,
        instructions: orderItem.specialInstructions,
        addOns: addOns,
      });
    });

    return order;
  };

  const submitOrder = async() => {
    const order = buildOrder();
    try {
      await API.createOrder(order);
      console.log("order made!")
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      orderItems.forEach((orderItem) => {
        total += parseFloat(orderItem.menuItem.price);
        orderItem.addOns.forEach((addOn) => {
          total += parseFloat(addOn.price);
        });
      });
      return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };

    const total = calculateTotal();
    setOrderTotal(total);
  }, [orderItems]);

  return (
    <main id="checkout-wrapper">
      <UserNav />
      {orderItems.length === 0 ? (
        <div id="message-wrapper">
          <div id="circle">
            <FontAwesomeIcon icon={faShoppingCart} size="8x" id="cart-icon" />
          </div>
          <strong id="empty-cart-message">Your cart is empty</strong>
        </div>
      ) : (
        <>
          {orderItems.map((orderItem) => (
            <CheckoutItem {...orderItem} key={orderItem.createdAt} />
          ))}
          <footer id="total-wrapper">
            {/* <Link to="/confirmation"> */}
            <button onClick={submitOrder} id="checkout-submit">
              <span>Place order</span>
              <span>{orderTotal}</span>
            </button>
            {/* </Link> */}
          </footer>
        </>
      )}
    </main>
  );
};

export default Checkout;
