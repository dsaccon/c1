import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthContext } from "./auth";

const useStyles = makeStyles(({}) => ({}));

export const FacebookLogout = ({}) => {
  const classes = useStyles();

  return (
    <AuthContext.Consumer>
      {({ setAuthState }) => (
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.FB?.logout();
            setAuthState({ setAuthState, authType: null, authResponse: null });
          }}
        >
          Logout (Facebook)
        </Button>
      )}
    </AuthContext.Consumer>
  );
};
