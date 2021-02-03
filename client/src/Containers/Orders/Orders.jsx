import React from "react";
import MenuItem from "../../Components/Navbar/MenuItem.jsx/MenuItem";

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
    <div>
      {orders.map((orderItems, index) => {
          <h1>{orderItems.title}</h1>
        return (
          <div className="card horizontal">
              <div className="card-stacked">
            {orderItems.content.map((order) => {
              return (
                <>
                    <div className="card-content">
                      <span className="card-title">{order.title}</span>
                      <strong>{order.price}</strong>
                    </div>
                </>
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
