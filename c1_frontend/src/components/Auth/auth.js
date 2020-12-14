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

// Config for microsoft azure
// Msal Configurations
const config = {
  auth: {
    authority:
      "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a",
    clientId: "950d9bbf-3ab2-4fba-a1c6-bd1f270c80d1",
    postLogoutRedirectUri: window.location.origin,
    redirectUri: window.location.origin,
    validateAuthority: true,
    // After being redirected to the "redirectUri" page, should user
    // be redirected back to the Url where their login originated from?
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

// Authentication Parameters
export const authenticationParameters = {
  scopes: [`950d9bbf-3ab2-4fba-a1c6-bd1f270c80d1.default`],
};
export const authenticationParametersGraph = {
  scopes: ["openid"],
};

// Options
export const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin,
};
export const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options
);
