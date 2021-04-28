import React from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/navbar1.component";
import LandingPage from "./components/landingPage.component";
import mainUserPage from "./components/mainUserPage.component";
import newProject from "./components/newProject.component";
import userProject from "./components/userProject.component";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="container-fluid p-0">
        <NavBar />
      </div>
      {!isAuthenticated && (
        <Route exact path="/" component={LandingPage}></Route>
      )}
      {isAuthenticated && (
        <Route exact path="/" component={mainUserPage}></Route>
      )}
      {isAuthenticated && (
        <Route path="/newProject" component={newProject}></Route>
      )}
      {isAuthenticated && <Route path="/proj/" component={userProject}></Route>}
      {/* {isAuthenticated && (
        <Route path="/project" component={}
      )} */}
    </Router>
  );
}

export default App;
