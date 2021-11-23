import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className='sidenav'>
    <NavLink  
      to="/"
      exact
    >
      Home
    </NavLink>
    <NavLink
      to="/peppers"
      exact
    >
      Pepper List
    </NavLink>
    <NavLink to='/sign-up' exact>
      Newsletter Sign Up
    </NavLink>
  </div>;
}

export default NavBar;
