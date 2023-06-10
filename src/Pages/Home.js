import React, {  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import {  signOut } from "firebase/auth";
// import { Navigate } from 'react-router-dom';

 
const Home = () => {
    const navigate = useNavigate();
const [userShow, setUserShow]=useState(false)
const [userShowNAME, setUserShowNAME]=useState('')

    const pixstyle= {
        fontSize:"12px"
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setUserShow(true);
              setUserShowNAME(`Welcome Back ${user.email}`);
              // ...
              console.log("uid", uid)

            } else {
              // User is signed out
              // ...
              console.log("user is logged out");
              setUserShow(false);
              setUserShowNAME(`Sweet Dreams! See You Soon!`);

            }
          });
         
    }, [])

    function navigateLoginMENU() {
        navigate('/login')
      }

      function navigateSignUpMENU() {
        navigate('/signup')
      }
 
 

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    
    return(
    <div className="homePAge">
    <h1>Welcome to Dream Journal!</h1>
    <p>A Full-Stack Application that uses PostgreSQL database. </p>
    <p style={pixstyle}>Images not sourced from API can be found at <a href="https://www.pixabay.com" alt="pixabay site">pixabay's website</a>. This site provides free images for personal and commercial use.
    </p>
    <p style={pixstyle}>Images sourced from pixabay have been edited by the <a href="https://www.gimp.org" alt="GIMP site">GIMP software</a></p>
    
    <div className="cardContact">
    <h3 >About the Developer</h3>
    
    <p><strong>Name:</strong> Sharukh G. Velupillai</p>
    <p><strong>Organization:</strong> PURSUIT</p>
    <p>
            <strong>GitHub:</strong>
            <a href="https://github.com/SharukhGV">
    Sharukh's GitHub Portfolio        </a>
          </p>


    {userShow ? <p><button onClick={handleLogout}>Logout</button></p> : <p> <button onClick={navigateLoginMENU}>Login</button><button onClick={navigateSignUpMENU}>Sign Up</button>
</p>}

    {userShow ? <p>{userShowNAME}</p> : <p>{userShowNAME}</p>}
    </div>
    
  </div>
    
    
    )}
    
    export default Home