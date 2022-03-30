import React from "react";
import { Route, RouteProps } from "react-router-dom";

import AuthContext from "../contexts/Auth";
import Login from "./Login";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const authState = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      element={authState?.authenticatedUser ? Component : Login}
    />
  );
};

export default PrivateRoute;