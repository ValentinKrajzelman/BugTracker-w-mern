import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import Cosas from "./projectsList.component";

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <nav className="navbar bg-light navbar-expand-sm navbar-light">
      <Link to="/" className="navbar-brand ml-3">
        <img src="favicon.png" height="40"></img>
        BugTracker <small>v0.1</small>
      </Link>
      {isAuthenticated && (
        <div className="nav-item dropdown navbar-text">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            Tus Proyectos
          </a>
          <div className="dropdown-menu">
            <Cosas />
          </div>
        </div>
      )}
      {isAuthenticated && (
        <Link to="newProject">
          <button className="btn-secondary rounded-circle border border-dark">
            +
          </button>
        </Link>
      )}

      <ul className="navbar-nav ml-auto">
        {!isAuthenticated && (
          <li className="nav-item">
            <button
              className="btn btn-outline-primary"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </li>
        )}
        {isAuthenticated && (
          <li className="nav-item mr-3">
            <div className="navbar-text">{user.name}</div>
          </li>
        )}
        {isAuthenticated && (
          <li className="nav-item">
            <button
              className="btn btn-outline-primary"
              onClick={() => logout()}
            >
              Log out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
