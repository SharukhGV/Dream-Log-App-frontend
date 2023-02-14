import { NavLink } from "react-router-dom";


function Nav() {

    return (
        <nav>
         
          <ul className="no-bullets">
           <li> <NavLink
              className="links"
              to="/"
              exact="true"
              activestyle={{ color: "white" }}
            >
              Home
            </NavLink></li>
            <li><NavLink
              className="links"
              to="/dreams"
              exact="true"
              activestyle={{ color: "white" }}
            >
              All Dreams
            </NavLink></li>
           <li> <NavLink
              className="links"
              to="/dreams/new"
              exact="true"
              activestyle={{ color: "white" }}
            >
              New Form
            </NavLink></li>
  
          </ul>
        </nav>
      );
    }
    



export default Nav;