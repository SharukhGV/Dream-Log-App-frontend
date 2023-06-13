import React from 'react';
import { Route, Navigate } from 'react-router-dom';
// import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { useEffect,useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
// import FirebaseAuthContext from './FirebaseAuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [userShow, setUserShow]=useState(true)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUserShow(true);
        //   setUserShowNAME(`Welcome Back ${user.email}`);
          // ...
          console.log("uid", uid)

        } else {
          // User is signed out
          // ...
          console.log("user is logged out");
          setUserShow(false);
        //   setUserShowNAME(`Sweet Dreams! See You Soon!`);

        }
    })})
    





//   const currentUser = firebase.auth.currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        userShow ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
