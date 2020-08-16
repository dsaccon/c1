import React, { Component } from 'react'
import styles from './Footer.module.css'

export class Footer extends Component {
  onClick = e => {
    e.preventDefault()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <div className={styles.footer}>
        <button className={styles.footer__btn} onClick={this.onClick}>
          <div className={styles.footer__btn__text}>{this.props.btnText}</div>
        </button>
      </div>
    )
  }
}
