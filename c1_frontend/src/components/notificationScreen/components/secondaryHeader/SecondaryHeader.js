import React, { Component } from 'react'

import styles from './SecondaryHeader.module.css'

export class SecondaryHeader extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.description}>{this.props.description}</div>
      </div>
    )
  }
}
