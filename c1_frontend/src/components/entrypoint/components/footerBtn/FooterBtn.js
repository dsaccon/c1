import React, { Component } from 'react'
import styles from './FooterBtn.module.css'

export class FooterBtn extends Component {
  onClick = e => {
    e.preventDefault()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <button className={styles.footerBtn} onClick={this.onClick}>
        <div className={styles.footerBtn__text}>{this.props.btnText}</div>
      </button>
    )
  }
}
