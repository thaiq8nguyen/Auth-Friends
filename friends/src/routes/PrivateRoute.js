import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "../utils/authServices";

const auth = new AuthService();
console.log("Authed ", auth.isAuthenticated());
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          console.log("authenticated");
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
