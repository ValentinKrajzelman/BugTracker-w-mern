import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/navbar1.component";
import LandingPage from "./components/landingPage.component";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="container-fluid p-0">
        <NavBar />
      </div>
      <Route path="/" component={LandingPage}></Route>
    </Router>
  );
}

export default App;
