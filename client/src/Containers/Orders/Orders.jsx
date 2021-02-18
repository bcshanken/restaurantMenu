import React, { useState, useEffect } from "react";
import AdminNav from "../../Components/AdminNav.jsx/AdminNav";
import OrderCard from "../../Components/OrderCard/OrderCard";
import API from "../../utils/API";
import "../Orders/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    initializeOrders();
    // eslint-disable-next-line
  }, []);

  const initializeOrders = async () => {
    try {
      const response = await API.getOrders();
      setOrders(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="order-wrapper">
        {orders.map((orderItems) => {
          return (
            <React.Fragment>
              <div className="card horizontal order-category-wrapper order-card" key={orderItems._id}>
                <div className="card-stacked">
                  <div className="col s6 input-field">
                    <select
                      className="browser-default"
                      name="category"
                      // value={category}
                      // onChange={(e) => {
                      //   setCategory(e.target.value);
                      // }}
                    >
                      <option defaultValue={"Pending"}>Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Cooking">Cooking</option>
                      <option value="Finished">Finished</option>
                      <option value="Sent">Sent</option>
                    </select>
                  </div>
                  {orderItems.items.map((order) => {
                    return (
                      <React.Fragment key={order.orderID}>
                        <OrderCard {...order} {...orderItems}/>
                      </React.Fragment>
                    );
                  })}
                  <strong className="card-title orders-text">Subtotoal: $28.99</strong>
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
