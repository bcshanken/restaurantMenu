import React from "react";
import AdminNav from "../../Components/AdminNav.jsx/AdminNav";
import OrderCard from "../../Components/OrderCard/OrderCard";
import "../Orders/Orders.css";

const Orders = () => {
  const orders = [
    {
      orderID: "001",
      _id: "0001",
      items: [
        {
          title: ["Fish", " Tacos"],
          description: ["fish", "tacos"],
          details: ["Good", " pretty good"],
          price: ["3.99", " 25.00"],
        },
      ],
      status: "Cooking",
    },

    {
      orderID: "002",
      _id: "0002",
      items: [
        {
          title: ["Pizza", "Hamburger"],
          description: "fish",
          details: ["pizzaDeets", " HamburgerDeets"],
          price: ["25.00", " 3.99"],
        },
      ],
      status: "Cooking",
    },
  ];

  return (
    <>
      <AdminNav />
      <div className="order-wrapper">
        {orders.map((orderItems) => {;
          return (
            <React.Fragment key={orderItems._id}>
            <h3>#{orderItems.orderID}</h3>
            <div className="card horizontal order-category-wrapper order-card">
              <div className="card-stacked">
                {orderItems.items.map((order) => {
                  return (
                    <React.Fragment key={orderItems.orderID}>
                      <OrderCard {...order}/>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Orders;
