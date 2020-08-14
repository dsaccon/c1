import React, { Component } from 'react'

import styles from './LoginBtn.module.css'

export class LoginBtn extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={`${styles.login_btn} ${styles.login_btn__text}`}
      >
        log in
      </button>
    )
  }
}
