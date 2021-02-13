import './App.css';
import React, { useState } from "react";
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

function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [token, setToken] = useState("");
  
  return (
    <Router>
      <AlertContext.Provider value={{ ...alert, setAlert: setAlert }}>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/item/:id" component={ProductDetails}/>
          <ProtectedRoute exact path="/admin/order/:id" component={OrderDetails} token={token}/>
          <ProtectedRoute exact path="/admin/orders" component={ Orders} token={token}/>
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
