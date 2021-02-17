import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import TokenContext from "../../utils/tokenContext";

const ProtectedRoute = ({ component, ...rest }) => {
  const { token } = useContext(TokenContext);
  const Component = component;
  console.log("Protected route token: ", token);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
