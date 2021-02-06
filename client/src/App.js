import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './Containers/Menu/Menu';
import OrderDetails from './Containers/OrderDetails/OrderDetails';
import Orders from './Containers/Orders/Orders';
import ProductDetails from './Containers/ProductDetails/ProductDetails';
import Nav from "./Components/Navbar/Nav"
import AdminMenu from './Containers/AdminMenu/AdminMenu';
import NewFood from './Containers/NewFood/NewFood';
import Login from './Containers/Login/Login'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/orderdetail" component={OrderDetails} />
        <Route exact path="/orders" component={ Orders} />
        <Route exact path="/product:id" component={ ProductDetails} />
        <Route exact path="/adminmenu" component={ AdminMenu} />
        <Route exact path="/newfood" component={ NewFood} />
        <Route exact path="/adminlogin" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
