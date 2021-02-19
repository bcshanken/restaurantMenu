import React, { useState, useEffect } from "react";
import AdminNav from "../../Components/AdminNav.jsx/AdminNav";
import OrderCard from "../../Components/OrderCard/OrderCard";
import API from "../../utils/API";
import "../Orders/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const[status, setStatus] = useState("")

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

  // const handleChange = ({status}, id) => {
  //   API.updateOrder( {status}, id).then((response) => {
  //   })
  // }

  return (
    <>
      <AdminNav />
      <div className="order-wrapper">
        {orders.map((orderItems) => {
          return (
            <React.Fragment>
              <div
                className="card horizontal order-category-wrapper order-card"
                key={orderItems._id}
              >
                <div className="card-stacked">
                  <span className="card-title">Order Number: {orderItems._id}</span>
                  <div className="col s6 input-field">
                    <select
                      className="browser-default"
                      name="status"
                      value={orderItems.status}
                      onChange={(e) => {
                        setStatus(e.currentTarget.value)
                      }}
                    >
                      <option defaultValue={"Pending"}>{orderItems.status}</option>
                      <option value="Pending">Pending</option>
                      <option value="Cooking">Cooking</option>
                      <option value="Finished">Finished</option>
                      <option value="Sent">Sent</option>
                    </select>
                  </div>
                  {orderItems.items.map((order) => {
                    return (
                      <React.Fragment key={order.orderID}>
                        <OrderCard {...order} {...orderItems} />
                      </React.Fragment>
                    );
                  })}
                  <strong className="card-title orders-text">
                    Subtotoal: {orderItems.price}
                  </strong>
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
