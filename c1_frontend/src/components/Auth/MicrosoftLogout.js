import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "./auth";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({}) => ({}));

export const MicrosoftLogout = ({}) => {
  const classes = useStyles();

  return (
    <AuthContext.Consumer>
      {(authState) => (
        <Button
          onClick={(e) => {
            console.log("LOGOUT MCIROSFT: ", authState);
            e.preventDefault();
            authState.msal.logout();
            authState.setAuthState({
              setAuthState: authState.setAuthState,
              authType: null,
              authResponse: null,
              msal: null,
            });
          }}
        >
          Logout (Microsoft)
        </Button>
      )}
    </AuthContext.Consumer>
  );
};
