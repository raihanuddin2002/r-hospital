import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();

  //  if((user.email === '' || user.email === undefined) && isLoading === true){
  //    return "Loading..";
  //  }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />     
    );
};

export default PrivateRoute;