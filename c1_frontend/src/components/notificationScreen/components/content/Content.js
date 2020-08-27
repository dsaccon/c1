import React, { Component } from 'react'

import styles from './Content.module.css'
import notification_img from './images/push-notifications.svg'

export class Content extends Component {
  title = 'Did you know?'
  description =
    '\u00A0 \nApplicants who respond to postings\nfaster get the job more often.' +
    '\n \u00A0 \nWe’ll let you know about new jobs in\nyour area as they appear!\n\u00A0'

  render() {
    return (
      <div className={styles.containter}>
        <div className={styles.content}>
          <div className={styles.split} />
          <div className={styles.title}>{this.title}</div>
          <div className={styles.description}>
            {this.description.split('\n').map((item, i) => {
              return <div key={i}>{item}</div>
            })}
          </div>
          <img className={styles.image} src={notification_img} alt="" />
        </div>
      </div>
    )
  }
}
