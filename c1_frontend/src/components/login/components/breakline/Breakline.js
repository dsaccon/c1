import React, { Component } from 'react'

import styles from './Breakline.module.css'

export class Breakline extends Component {
  render() {
    return (
      <div className={styles.breakline}>
        <div className={styles.breakline__line} />
        <div className={styles.breakline__text}>or</div>
        <div className={styles.breakline__line} />
      </div>
    )
  }
}
