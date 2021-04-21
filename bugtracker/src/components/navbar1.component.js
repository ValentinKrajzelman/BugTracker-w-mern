import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// import LoginButton from "./loginBtn.component";

const NavBar1 = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <nav className="navbar bg-light navbar-expand-sm navbar-light">
      <Link to="/" className="navbar-brand">
        BugTracker <small>v0.1</small>
      </Link>

      <div className="nav-item dropdown navbar-text">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbardrop"
          data-toggle="dropdown"
        >
          Lista De Proyectos
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            Link 1
          </a>
          <a class="dropdown-item" href="#">
            Link 2
          </a>
          <a class="dropdown-item" href="#">
            Link 3
          </a>
        </div>
      </div>

      <ul className="navbar-nav ml-auto">
        {!isAuthenticated && (
          <li className="nav-item">
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        )}
        {isAuthenticated && (
          <li className="nav-item mr-3">
            <div className="navbar-text">{user.name}</div>
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
