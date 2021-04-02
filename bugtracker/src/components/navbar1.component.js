import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar1 extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <Link to="/" className="navbar-brand">
          BugTracker <small>v0.1</small>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav pull-right">
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
