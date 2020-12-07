import React from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./auth";
import { GoogleLogout as ReactGoogleLogout } from "react-google-login";

export const GoogleLogout = () => {
  const history = useHistory();

  return (
    <AuthContext.Consumer>
      {({ setAuthState }) => (
        <ReactGoogleLogout
          clientId="591260303822-7bc0jb459rppkuhemoba2qamqhqqm90f.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={() => {
            setAuthState({ setAuthState, authResponse: null });
            history.push("/login");
          }}
        />
      )}
    </AuthContext.Consumer>
  );
};
