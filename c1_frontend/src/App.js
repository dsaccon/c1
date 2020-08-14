import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Entrypoint } from "./components/entrypoint/Entrypoint"
import Login from "./components/login/Login"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Entrypoint} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
