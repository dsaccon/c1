import React from "react";
import { TextInput } from "../../components/Form/TextInput";
import { Header } from "../../components/Header/Header";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { GoogleLogin } from "react-google-login";
import { useHistory, useLocation } from "react-router-dom";
import {
  AuthContext,
  refreshTokenSetupGoogle,
} from "../../components/Auth/auth";
import FacebookLogin from "react-facebook-login";
import AppleLogin from "react-apple-login";
import MicrosoftLogin from "react-microsoft-login";
import Button from "@material-ui/core/Button";
import { corrosionClient } from "../../api/corrosionClient";

export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const onFailure = (res) => {
    console.log("LOGIN FAILURE: ", res);
  };

  const redirect = () => {
    const redirectFrom = location.state?.redirectedFrom;
    if (redirectFrom !== undefined && redirectFrom !== null) {
      history.push({ pathname: redirectFrom, state: {} });
    } else {
      history.push("/push-notifications");
    }
  };

  return (
    <AuthContext.Consumer>
      {({ setAuthState }) => (
        <>
          <Header />
          <SubHeader text="YOUR ACCOUNT" />
          <Content centerItems>
            <GoogleLogin
              clientId="591260303822-7bc0jb459rppkuhemoba2qamqhqqm90f.apps.googleusercontent.com"
              buttonText="Login With Google"
              onSuccess={(res) => {
                console.log("RES: ", res);
                setAuthState({
                  setAuthState,
                  authResponse: res,
                  authType: "GOOGLE",
                });
                refreshTokenSetupGoogle(res, setAuthState);
                redirect();
              }}
              onFailure={onFailure}
              cookiePolicy="single_host_origin"
            />
            <FacebookLogin
              appId="214625390144981"
              autoload={false}
              fields="name,email,picture"
              callback={(res) => {
                // TODO need to make call to server for jwt token and refresh timeout but need to solve cors error first
                console.log("SETTING AUTH STATE: ", "FACEBOOK");
                setAuthState({
                  authResponse: res,
                  setAuthState,
                  authType: "FACEBOOK",
                });
                redirect();
              }}
            />
            <MicrosoftLogin
              clientId="1d1ea85d-8393-4740-ad0a-6ca0e32a1c70"
              authCallback={(err, data, msal) => {
                console.log("MSAL: ", msal);
                if (err === null || err === undefined) {
                  setAuthState({
                    authResponse: data,
                    setAuthState,
                    authType: "MICROSOFT",
                    msal: msal,
                  });
                  redirect();
                } else {
                  console.error("FAILED TO LOGIN MICROSOFT: ", err);
                }
              }}
            />
            <AppleLogin
              clientId="corrosionone.com"
              redirectURI={window.location}
              callback={(res) => {
                if (res) {
                  setAuthState({
                    authResponse: res,
                    setAuthState,
                    authType: "APPLE",
                  });
                  redirect();
                } else {
                  console.error("FAILED TO LOGIN APPLE: ");
                }
              }}
            />
            {/*<Button variant='contained' onClick={() => {*/}
            {/*  corrosionClient.post('http://localhost:8001/test', {}, { headers: { Authorization: `Bearer token ${authResponse}` }})*/}
            {/*}}>API TEST</Button>*/}
          </Content>
        </>
      )}
    </AuthContext.Consumer>
  );
};
