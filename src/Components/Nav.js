import { NavLink } from "react-router-dom";
// import { useEffect,useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase';

function Nav() {

  // const [userShow, setUserShow]=useState(false)
// const [userShowNAME, setUserShowNAME]=useState('')

  let activeStyle = {
    textDecoration: "underline",
    color: "white",
  };

  let nonactiveStyle = {
    color: "limegreen",
  };


  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // User is signed in, see docs for a list of available properties
  //         // https://firebase.google.com/docs/reference/js/firebase.User
  //         const uid = user.uid;
  //         setUserShow(true);
  //         setUserShowNAME(`Welcome Back ${user.email}`);
  //         // ...
  //         console.log("uid", uid)

  //       } else {
  //         // User is signed out
  //         // ...
  //         console.log("user is logged out");
  //         setUserShow(false);
  //         setUserShowNAME(`Sweet Dreams! See You Soon!`);

  //       }
  //     });
     
// }, [])

    return (
        <nav>
         
          <ul className="no-bullets">
           <li> <NavLink
              className="links"
              to="/"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle
            }
            >
              Home
            </NavLink></li>
            <li><NavLink
              className="links"
              to="/dreams"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              All Dreams
            </NavLink></li>
           <li> <NavLink
              className="links"
              to="/dreams/new"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              New Form
            </NavLink></li>


            <li> <NavLink
              className="links"
              to="/about"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              About
            </NavLink></li>

            {/* <li> <NavLink
              className="links"
              to="/login"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              Login
            </NavLink></li> */}

            {/* <li> <NavLink
              className="links"
              to="/signup"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              Sign Up
            </NavLink></li> */}
  
          </ul>
        </nav>
      );
    }
    



export default Nav;