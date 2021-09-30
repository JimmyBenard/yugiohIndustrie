//MODULES
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'react-use-auth';

interface PrivateRouteProps {
  children: React.ReactNode
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
