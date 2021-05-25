import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="row center">

          <li className="col center">
            <Link to="/Home">
              Stores
            </Link>
          </li>
          <li className="col center">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/home" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="row">
          <li className="col align-self-center justify-content-around mx-1 center">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="col align-self-center justify-content-around mx-1 center">
            <Link to="/">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="container">
    <nav className="navbar fixed-top row grey">
      <div className="row">
      <h1 className="center">
        <Link to="/Home">
          <span  style={{fontFamily: "Lucida Handwriting", color: "rgba(219, 107, 33, 0.61)"}}>Grocer<span style={{color: "white"}}>-EZ</span></span>
        </Link>
      </h1>
      </div>
      <div>
        {showNavigation()}
      </div>
     </nav>
    </header>
  );
}

export default Nav;
