import React from "react";
import { LandingPage } from "./scenes/LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";
import { Login } from "./scenes/Login/Login";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Registration } from "./scenes/Registration/Registration";
import { PushNotifications } from "./scenes/PushNotifications/PushNotifications";
import { JobFeed } from "./scenes/JobFeed/JobFeed";

const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/landing-page">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/push-notifications">
          <PushNotifications />
        </Route>
        <Route path="/job-feed">
          <JobFeed />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
