import { NavLink } from "react-router-dom";


function Nav() {

  let activeStyle = {
    textDecoration: "underline",
    color: "white",
  };

  let nonactiveStyle = {
    color: "limegreen",
  };

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
  
          </ul>
        </nav>
      );
    }
    



export default Nav;