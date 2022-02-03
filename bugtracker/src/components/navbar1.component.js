import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {AiFillBug, AiFillPlusCircle} from "react-icons/ai";
import {RiArrowDropDownLine} from "react-icons/ri";

import ProjectList from "./projectsList.component";

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
  <nav className="">
     <div className="">
     <AiFillBug className=""/> 
     <Link to="/" className="">   
        BugTracker <small>v0.1</small>
      </Link>
      {isAuthenticated && (
        <div className="">
          <a
            className=""
            href="#"
            data-toggle="dropdown"
          >
            Tus Proyectos
          </a>
          <RiArrowDropDownLine className=""/>
          <div className="">
            <ProjectList />
          </div>
        </div>
      )}
      {isAuthenticated && (
        <Link to="/newProject">
          <AiFillPlusCircle className=""/>
        </Link>
      )}
      </div>

    <div>  
      <ul className=""> 
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
          <li className="">
            <div className="">{user.name}</div>
          </li>
        )}
        {isAuthenticated && (
          <li className="">
            <button
              className=""
              onClick={() => logout()}
            >
              Log out
            </button>
          </li>
        )}
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;
