import React from "react";
import { TextInput } from "../../components/Form/TextInput";
import { Header } from "../../components/Header/Header";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { AuthContext, refreshTokenSetup } from "../../components/Auth/auth";
import Button from "@material-ui/core/Button";
import { corrosionClient } from "../../api/corrosionClient";

export const Login = () => {
  const history = useHistory();
  const onFailure = (res) => {
    console.log("LOGIN FAILURE: ", res);
  };
  return (
    <AuthContext.Consumer>
      {({ setAuthState, authResponse }) => (
        <>
          <Header />
          <SubHeader text="YOUR ACCOUNT" />
          <Content centerItems>
            <GoogleLogin
              clientId="591260303822-7bc0jb459rppkuhemoba2qamqhqqm90f.apps.googleusercontent.com"
              buttonText="Login With Google"
              onSuccess={(res) => {
                console.log("LOGIN SUCCESS: ", res);
                setAuthState({ setAuthState, authResponse: res });
                refreshTokenSetup(res, setAuthState);
                history.push("/push-notifications");
              }}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
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
