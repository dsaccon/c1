import React, { Component } from 'react'

import logo from './images/logo.svg'

import styles from './Header.module.css'

export class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <img src={logo} alt="" />
        </div>
      </div>
    )
  }
}
