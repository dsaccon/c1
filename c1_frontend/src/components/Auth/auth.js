import React, { useState } from "react";
import { MsalAuthProvider, LoginType } from "react-aad-msal";

export const refreshTokenSetupGoogle = (res, setAuthState) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    try {
      const newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      console.log("newAuthRes: ", newAuthRes);
      console.log("new auth Token", newAuthRes.id_token);
      setTimeout(refreshToken, refreshTiming);
    } catch (e) {
      setAuthState({ setAuthState, authResponse: null });
      console.error("ERROR REFRESHING GOOGLE LOGIN: ", e);
    }
  };

  setTimeout(refreshToken, refreshTiming);
};

export const AuthContext = React.createContext();

export const useAuth = () => {
  const [authState, setAuthState] = useState({
    authResponse: null,
    setAuthState: () => {},
    authType: null,
    // For microsoft
    msal: null,
  });
  return [authState, setAuthState];
};
