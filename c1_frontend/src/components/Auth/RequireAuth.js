import React from "react";
import { Redirect } from "react-router-dom";

export const RequireAuth = ({ children, authState }) => {
  return authState?.authResponse === null ||
    authState?.authResponse === undefined ? (
    <Redirect to="/login" />
  ) : (
    children
  );
};
