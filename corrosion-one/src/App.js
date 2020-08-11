import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Entrypoint } from "./components/entrypoint/Entrypoint"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Entrypoint} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
