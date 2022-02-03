import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';

import App from "./App";

let DOMAIN = process.env.domain;
let CLIENTID = process.env.clientId;

ReactDOM.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENTID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
