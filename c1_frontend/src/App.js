import React from "react";
import { LandingPage } from "./scenes/LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";
import { Login } from "./scenes/Login/Login";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Registration } from "./scenes/Registration/Registration";
import { PushNotifications } from "./scenes/PushNotifications/PushNotifications";
import { JobFeed } from "./scenes/JobFeed/JobFeed";
import { ChooseCertification } from "./scenes/CertificateVerification/ChooseCertification";
import { TakePhotoCertification } from "./scenes/CertificateVerification/TakePhotoCertification";
import { PhotoPreviewCertification } from "./scenes/CertificateVerification/PhotoPreviewCertification";
import { JobDetails } from "./scenes/JobDetails/JobDetails";
import { SubmitBid } from "./scenes/JobDetails/SubmitBid";
import { BidSubmissionSuccess } from "./scenes/JobDetails/BidSubmissionSuccess";
import { Messages } from "./scenes/Messages/Messages";
import { AuthContext, useAuth } from "./components/Auth/auth";
import { RequireAuth } from "./components/Auth/RequireAuth";
import { EnterPhoneNumber } from "./scenes/PhoneNumberCollection/EnterPhoneNumber";

const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
});

const App = () => {
  const classes = useStyles();
  const [authState, setAuthState] = useAuth();
  console.log("AUTH STATE: ", authState);

  return (
    <AuthContext.Provider value={{ authResponse: null, setAuthState }}>
      <div className={classes.app}>
        <Switch>
          <Route path="/landing-page">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <RequireAuth authState={authState}>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/push-notifications">
              <PushNotifications />
            </Route>
            <Route path="/job-feed">
              <JobFeed />
            </Route>
            <Route path="/choose-certification-type">
              <ChooseCertification />
            </Route>
            <Route path="/take-photo-certification">
              <TakePhotoCertification />
            </Route>
            <Route path="/photo-preview-certification">
              <PhotoPreviewCertification />
            </Route>
            <Route path="/job-details">
              <JobDetails />
            </Route>
            <Route path="/submit-bid">
              <SubmitBid />
            </Route>
            <Route path="/bid-submission-success">
              <BidSubmissionSuccess />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/enter-phone-number">
              <EnterPhoneNumber />
            </Route>
          </RequireAuth>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
