import React, { Component } from 'react'

import Button from '@material-ui/core/Button'

import styles from './Footer.module.css'

export class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.ask_perm}>
          <Button
            onClick={this.props.onAskNotificationClicked}
            classes={{
              root: styles.ask_perm__btn,
              label: styles.ask_perm_btn__text
            }}
            style={{
              backgroundColor: '#e3e3e3',
              borderRadius: 6,
              borderColor: '4d4d4d',
              border: '1px solid'
            }}
          >
            Allow Push Notifications
          </Button>
        </div>
        <div className={styles.skip_btn}>not now</div>
      </div>
    )
  }
}
