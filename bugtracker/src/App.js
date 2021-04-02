import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar1 from "./components/navbar1.component";
import NavBar2 from "./components/navbar2.component";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <NavBar1 />
        {/* <NavBar2 /> */}
      </div>
    </Router>
  );
}

export default App;
