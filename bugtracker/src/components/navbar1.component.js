import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  function constructorBarra() {
    axios
      .get("http://localhost:5000/project/get/")
      .then((res) => {
        let listaProyectos = "";
        for (let x = 0; x < Object.keys(res.data).length; x++) {
          listaProyectos +=
            "<Link to='/" +
            res.data[x]._id +
            "' className='dropdown-item'>" +
            res.data[x].nombre +
            "</Link> ";
        }
        console.log(listaProyectos);
        return listaProyectos;
      })
      .catch((error) => console.log(error));
  }

  let barraProyectos = constructorBarra().then(console.log(barraProyectos));

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
          <div className="dropdown-menu">{constructorBarra()}</div>
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
