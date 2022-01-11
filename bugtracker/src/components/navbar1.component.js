import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {AiFillBug, AiFillPlusCircle} from "react-icons/ai";
import {RiArrowDropDownLine} from "react-icons/ri";

import ProjectList from "./projectsList.component";

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
  <nav className="flex justify-between w-full h-16 bg-blue-400 items-center text-xl">
     <div className="flex items-center">
     <AiFillBug className="ml-5"/> 
     <Link to="/" className="mr-6">   
        BugTracker <small>v0.1</small>
      </Link>
      {isAuthenticated && (
        <div className="flex pl-2">
          <a
            className=""
            href="#"
            data-toggle="dropdown"
          >
            Tus Proyectos
          </a>
          <RiArrowDropDownLine className="text-3xl"/>
          <div className="">
            <ProjectList />
          </div>
        </div>
      )}
      {isAuthenticated && (
        <Link to="/newProject">
          <AiFillPlusCircle className="ml-2 text-2xl"/>
        </Link>
      )}
      </div>

    <div>  
      <ul className="flex"> 
        {!isAuthenticated && (
          <li className=""> 
            <button
              className="mr-5"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </li>
        )}
        {isAuthenticated && (
          <li className="mr-5 ">
            <div className="">{user.name}</div>
          </li>
        )}
        {isAuthenticated && (
          <li className="">
            <button
              className="mr-5"
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
