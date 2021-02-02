import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import Menu from './Containers/Menu/Menu';
import OrderDetails from './Containers/OrderDetails/OrderDetails';
import Orders from './Containers/Orders/Orders';
import ProductDetails from './Containers/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/orderdetail" component={OrderDetails} />
        <Route exact path="/orders" component={ Orders} />
        <Route exact path="/product:id" component={ ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
