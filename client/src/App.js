import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './Containers/Menu/Menu';
import OrderDetails from './Containers/OrderDetails/OrderDetails';
import Orders from './Containers/Orders/Orders';
import ProductDetails from './Containers/ProductDetails/ProductDetails';
import AdminMenu from './Containers/AdminMenu/AdminMenu';
import NewFood from './Containers/NewFood/NewFood';
import Login from './Containers/Login/Login'
import UpdateFood from './Containers/UpdateFood/UpdateFood';
import AlertContext from './utils/alertContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Checkout from './Containers/Checkout/Checkout';
import NewUser from './Containers/NewUser/NewUser';
import axios from 'axios';
import jwt from "jsonwebtoken";

function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [token, setToken] = useState("");
  
  useEffect(() => {
    
    const getJwt = async() => {
      await axios
      .get("/api/auth/cookie", { token })
      .then((response) => {
        console.log(response.data.token);
        jwt.verify(
          response.data.token,
          process.env.REACT_APP_JWT_SIGNATURE,
          setToken(response.data.token)
        );
      })
      .catch((err) => {
        console.log(err);
      });
    };

     getJwt();
 
  },[setToken]);

    
  
  return (
    <Router>
      <AlertContext.Provider value={{ ...alert, setAlert: setAlert }}>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/item/:id" component={ProductDetails}/>
          <ProtectedRoute exact path="/admin/order/:id" component={OrderDetails} token={token}/>
          <Route exact path="/admin/orders" component={ Orders} token={token}/>
          <ProtectedRoute exact path="/admin/menu" component={ AdminMenu} token={token}/>
          <ProtectedRoute exact path="/admin/menu/add" component={ NewFood} token={token}/>
          <ProtectedRoute exact path="/admin/menu/update/:id" component={UpdateFood} token={token}/>
          <ProtectedRoute exact path="/admin/create-user" component={NewUser} token={token}/>
          <Route exact path="/login" component={(props) => <Login {...props} setToken={setToken} />}/>
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </AlertContext.Provider>
    </Router>
  );
}

export default App;
