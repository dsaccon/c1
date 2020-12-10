import React from "react";
import { Redirect, useLocation } from "react-router-dom";

export const RequireAuth = ({ children, authState }) => {
  const location = useLocation();

  return authState?.authResponse === null ||
    authState?.authResponse === undefined ? (
    <Redirect
      push
      to={{
        pathname: "/login",
        state: {
          redirectedFrom: location.pathname,
        },
      }}
      from={location.pathname}
    />
  ) : (
    children
  );
};
