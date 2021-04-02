import react, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar2 extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <Link to="/" className="navbar-brand">
          BugTracker <small>v0.1</small>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a
                href="/"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="btn"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="/">HTML</a>
                </li>
                <li>
                  <a href="/">CSS</a>
                </li>
                <li>
                  <a href="/">JavaScript</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
