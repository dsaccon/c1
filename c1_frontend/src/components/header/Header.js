import React, { Component } from 'react'

import backBtn from './images/back_btn.svg'
import logo from './images/logo.svg'

import styles from './Header.module.css'

export class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        {this.props.toHideBtn ? null : (
          <div
            onClick={this.props.onClick}
            className={styles.header__back_btn}
          >
            <img src={backBtn} alt="" />
          </div>
        )}
        <div className={styles.header__logo}>
          <img src={logo} alt="" />
        </div>
      </div>
    )
  }
}
