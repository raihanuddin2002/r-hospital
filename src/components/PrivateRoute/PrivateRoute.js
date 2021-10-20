import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();

    if(isLoading){
      return (
        <div className="text-center my-5">
            <div className="spinner-grow text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
            <div className="spinner-grow text-secondary" role="status"></div>
            <div className="spinner-grow text-success" role="status"> </div>
            <div className="spinner-grow text-danger" role="status"></div>
            <div className="spinner-grow text-warning" role="status"></div>
            <div className="spinner-grow text-info" role="status"></div>
            <div className="spinner-grow text-dark" role="status"></div>
        </div>
      )
    }
    
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