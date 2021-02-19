import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Containers/Menu/Menu";
import OrderDetails from "./Containers/OrderDetails/OrderDetails";
import Orders from "./Containers/Orders/Orders";
import ProductDetails from "./Containers/ProductDetails/ProductDetails";
import AdminMenu from "./Containers/AdminMenu/AdminMenu";
import NewFood from "./Containers/NewFood/NewFood";
import Login from "./Containers/Login/Login";
import UpdateFood from "./Containers/UpdateFood/UpdateFood";
import AlertContext from "./utils/alertContext";
import TokenContext from "./utils/tokenContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Checkout from "./Containers/Checkout/Checkout";
import NewUser from "./Containers/NewUser/NewUser";
import axios from "axios";
import jwt from "jsonwebtoken";

function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJwt = async () => {
      try {
        const response = await axios.post("/api/auth/cookie");
        const token = response.data.token;
        jwt.verify(
          token,
          process.env.REACT_APP_JWT_SIGNATURE,
          (err, decoded) => {
            if (err) {
              throw new Error(err);
            } else {
              setToken(token);
            }
          }
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (!token) {
      getJwt();
    }
  }, [token]);

  const login = (token, cb) => {
    setToken(token);
    cb();
  };

  const logout = (cb) => {
    setToken("");
    cb();
  }

  if (loading) return null;

  return (
    <Router>
      <AlertContext.Provider value={{ ...alert, setAlert: setAlert }}>
        <TokenContext.Provider value={{ token: token, logout: logout }}>
          <Switch>
            <Route exact path="/item/:id" component={ProductDetails} />
            <ProtectedRoute
              exact
              path="/admin/order/:id"
              component={OrderDetails}
            />
            <ProtectedRoute exact path="/admin/orders" component={Orders} />
            <ProtectedRoute exact path="/admin/menu" component={AdminMenu} />
            <ProtectedRoute exact path="/admin/menu/add" component={NewFood} />
            <ProtectedRoute
              exact
              path="/admin/menu/update/:id"
              component={UpdateFood}
            />
            <ProtectedRoute
              exact
              path="/admin/create-user"
              component={NewUser}
            />
            <Route
              exact
              path="/login"
              component={(props) => <Login {...props} login={login} />}
            />
            <Route exact path="/checkout" component={Checkout} />
            <Route component={Menu} />
          </Switch>
        </TokenContext.Provider>
      </AlertContext.Provider>
    </Router>
  );
}

export default App;
