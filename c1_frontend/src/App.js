import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Entrypoint } from './components/entrypoint/Entrypoint'
import { NotificationScreen } from './components/notificationScreen/NotificationScreen'
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Entrypoint} />
          <Route path="/login" component={Login} />
          <Route path="/ask_notification" component={NotificationScreen} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
