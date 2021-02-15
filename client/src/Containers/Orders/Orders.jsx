import axios from "axios";
import React, {useState, useEffect} from "react";
import AdminNav from "../../Components/AdminNav.jsx/AdminNav";
import OrderCard from "../../Components/OrderCard/OrderCard";
import API from "../../utils/API"
import "../Orders/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    initializeOrders()
    // eslint-disable-next-line

  }, [])

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
        {orders.map((orderItems) => {;
          return (
            <React.Fragment key={orderItems._id}>
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
