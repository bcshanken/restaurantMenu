import React from "react";
import NavAdmin from "../../Components/Navbar/NavAdmin";
import OrderCard from "../../Components/OrderCard/OrderCard"
import "../Orders/Orders.css"

const Orders = () => {
  const orders = [
    {
      title: "#001",
      content: [
        {
          imageUrl: "http://placehold.it/300x300",
          title: "Salmon",
          price: 19.99,
        },
        {
          imageUrl: "http://placehold.it/300x300",
          title: "Jerk Chicken Pasta",
          price: 19.99,
        },
      ],
    },
  ];

  return (
    <>
    <NavAdmin/>
    <div className="order-wrapper">
      {orders.map((orderItems, index) => {
          <h1>{orderItems.title}</h1>
        return (
          <div className="card horizontal order-category-wrapper order-card">
              <div className="card-stacked">
            {orderItems.content.map((order) => {
              return (
                <>
                    <OrderCard {...order}/>
                </>
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Orders;
