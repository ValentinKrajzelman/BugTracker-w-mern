// import React from "react";
// import { withAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect } = withAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0;
  return (
    // `this.props.auth0` has all the same properties as the `useAuth0` hook
    <button onClick={() => loginWithRedirect()}>Log In</button>
  );
};

export default LoginButton;
