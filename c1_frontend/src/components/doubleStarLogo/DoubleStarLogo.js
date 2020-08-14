import React, { Component } from 'react'

import './DoubleStarLogo.css'
import styles from './DoubleStarLogo.module.css'
import grey_star from './images/grey_star.svg'

export class DoubleStarLogo extends Component {
  render() {
    return (
      <div className={styles.logo}>
        <img src={grey_star} alt="" className={styles.logo__grey_star} />
      </div>
    )
  }
}
