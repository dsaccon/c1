import React, { Component } from 'react'

import { Footer } from './components/footer/Footer'
import { Header } from './components/headerLogoOnly/Header'
import { Content } from './components/content/Content'
import { SecondaryHeader } from './components/secondaryHeader/SecondaryHeader'

import styles from './NotificationScreen.module.css'

export class NotificationScreen extends Component {
  onAskNotificationClicked() {
    console.log("a")
    console.log(Notification.requestPermission())
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <SecondaryHeader description={'Notification'} />
        <div className={styles.content}>
          <Content />
        </div>
        <Footer onAskNotificationClicked={this.onAskNotificationClicked} />
      </div>
    )
  }
}
