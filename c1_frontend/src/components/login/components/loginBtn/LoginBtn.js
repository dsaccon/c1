import React, { Component } from 'react'

import Button from '@material-ui/core/Button'

import styles from './LoginBtn.module.css'

export class LoginBtn extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Button
          onClick={this.props.onClick}
          classes={{
            root: styles.login_btn,
            label: styles.login_btn__text
          }}
          style={{ backgroundColor: '#b6b6b6' }}
        >
          log in
        </Button>
      </div>
    )
  }
}
