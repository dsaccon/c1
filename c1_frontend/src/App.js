import React from 'react'
import { LandingPage } from "./scenes/LandingPage/LandingPage"
import {
  Switch,
  Route
} from "react-router-dom";
import { Login } from "./scenes/Login/Login";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/landing-page'>
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
