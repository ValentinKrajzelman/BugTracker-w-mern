import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// import LoginButton from "./loginBtn.component";

const NavBar1 = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav className="navbar bg-light navbar-expand-sm navbar-light">
      <Link to="/" className="navbar-brand">
        BugTracker <small>v0.1</small>
      </Link>

      <ul className="navbar-nav ml-auto">
        {!isAuthenticated && (
          <li className="nav-item">
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        )}
        {isAuthenticated && (
          <li className="nav-item">
            <button onClick={() => logout()}>Log out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar1;
