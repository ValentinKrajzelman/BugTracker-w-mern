import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {AiFillBug} from "react-icons/ai";

import ProjectList from "./projectsList.component";

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <nav className="">
     <AiFillBug/> 
     <Link to="/" className="">   
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
            <ProjectList />
          </div>
        </div>
      )}
      {isAuthenticated && (
        <Link to="/newProject">
          <button className="btn-secondary rounded-circle border border-dark">
            +
          </button>
        </Link>
      )}

      <ul className="float-right"> 
        {!isAuthenticated && (
          <li className=""> 
            <button
              className=""
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
