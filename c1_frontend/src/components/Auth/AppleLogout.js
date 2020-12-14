import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthContext } from "./auth";

const useStyles = makeStyles(({}) => ({}));

export const AppleLogout = ({}) => {
  const classes = useStyles();

  return (
    <AuthContext.Consumer>
      {(authState) => (
        <Button
          onClick={(e) => {
            e.preventDefault();
            authState.setAuthState({
              setAuthState: authState.setAuthState,
              authType: null,
              authResponse: null,
            });
          }}
        >
          Logout (Apple)
        </Button>
      )}
    </AuthContext.Consumer>
  );
};
