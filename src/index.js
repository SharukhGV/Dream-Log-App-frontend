// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import AppAuth from './AppAuth'
// // import useAuth0 from '@auth0/auth0-react';
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// // import reportWebVitals from './reportWebVitals';
// //  import { Auth0Provider } from "@auth0/auth0-react"
// // const { user, isAuthenticated, isLoading } = useAuth0();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// //if authenticated, render App.js
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// ) 


// // else, render the AppAuth secure root
// // const root = createRoot(document.getElementById('root'));
// root.render(
//   <Auth0Provider
//       domain="dev-xz06mncmhh2gwqjf.us.auth0.com"
//       clientId="uTLwxJaGb2cSJy9v6mHjLnqdPGdOv5ic"
//       authorizationParams={{
//         redirect_uri: window.location.origin
//       }}
//     >
//       <AppAuth />
//     </Auth0Provider>,)

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();





import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import AppAuth from './AppAuth'; // Authenticated App component
import App from './App'; // Non-authenticated App component

const AuthenticatedApp = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <AppAuth /> : <App />;
};

const AuthenticatedTrueorFalse = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? true : false
}

const rootElement = document.getElementById('root');

// Use the Auth0Provider if user is authenticated, else render the non-authenticated app
if (AuthenticatedTrueorFalse) {
  ReactDOM.render(
     <Auth0Provider
      domain="dev-xz06mncmhh2gwqjf.us.auth0.com"
      clientId="uTLwxJaGb2cSJy9v6mHjLnqdPGdOv5ic"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <AuthenticatedApp />
    </Auth0Provider>,
    rootElement
  );
} else {
  ReactDOM.render(<App />, rootElement);
}
