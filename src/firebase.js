// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/compat/app";
import { initializeApp } from "firebase/app";
// import { getDxatabase } from "firebase/database";

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import firebase from 'firebase/app';

// import { getAuth } from "firebase/compat/auth";
// import { getAuth } from "firebase/auth";


import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "dream-log-application.firebaseapp.com",
  projectId: "dream-log-application",
  storageBucket: "dream-log-application.appspot.com",
  messagingSenderId: "934924712713",
  appId: "1:934924712713:web:ad37e2d5acb64c713ab1d8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// module.exports = {auth}

// Initialize Firebase
// firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


export default app;