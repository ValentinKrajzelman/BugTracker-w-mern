import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar1 from "./components/navbar1.component";
// import NavBar2 from "./components/navbar2.component";

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <NavBar1 />
        {/* <NavBar2 />  */}
      </div>
    </Router>
  );
}

export default App;
