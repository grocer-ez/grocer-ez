import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="row">
          <li className="col align-self-center justify-content-around mx-1 center">
            <Link to="/singleList">
              Single List 
            </Link>
          </li>
          <li className="col align-self-center justify-content-around mx-1 center">
            <Link to="/home">
              Stores
            </Link>
          </li>
          <li className="col align-self-center justify-content-around mx-1 center">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
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
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="container-fluid">
      <div className="row">
      <h2 className="col justify-content-center center">
        <Link to="/">
          Grocer-EZ
        </Link>
      </h2>
      </div>
      <nav>
        {showNavigation()}
      </nav>
     
    </header>
  );
}

export default Nav;
