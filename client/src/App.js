import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './Containers/Menu/Menu';
import OrderDetails from './Containers/OrderDetails/OrderDetails';
import Orders from './Containers/Orders/Orders';
import ProductDetails from './Containers/ProductDetails/ProductDetails';
import AdminMenu from './Containers/AdminMenu/AdminMenu';
import NewFood from './Containers/NewFood/NewFood';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login'
import AlertContext from './utils/alertContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [token, setToken] = useState("");
  
  return (
    <Router>
      <AlertContext.Provider value={{ ...alert, setAlert: setAlert }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/orderdetail" component={OrderDetails} />
          <Route exact path="/orders" component={ Orders} />
          <Route exact path="/product:id" component={ProductDetails}/>
          <ProtectedRoute exact path="/adminmenu" component={ AdminMenu} token={token}/>
          <ProtectedRoute exact path="/newfood" component={ NewFood} token={token}/>
          <Route exact path="/adminlogin" component={(props) => <Login {...props} setToken={setToken} />}/>
        </Switch>
      </AlertContext.Provider>
    </Router>
  );
}

export default App;
