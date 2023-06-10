// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/compat/app";
import { initializeApp } from "firebase/app";
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
  authDomain: "dream-journal-777.firebaseapp.com",
  projectId: "dream-journal-777",
  storageBucket: "dream-journal-777.appspot.com",
  messagingSenderId: "555557571687",
  appId: "1:555557571687:web:4e906ba8013ea9bb6918c2"
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