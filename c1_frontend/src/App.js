import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Entrypoint } from './components/entrypoint/Entrypoint'
import { NotificationScreen } from './components/notificationScreen/NotificationScreen'
import { Qualification } from './components/qualification/Qualification'
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Entrypoint} />
          <Route path="/login" component={Login} />
          <Route path="/notification" component={NotificationScreen} />
          <Route path="/qualification" component={Qualification} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
