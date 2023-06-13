import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
// import FirebaseAuthContext from './FirebaseAuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = firebase.auth.currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
