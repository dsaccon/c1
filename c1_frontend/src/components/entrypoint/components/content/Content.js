import React, { Component } from 'react'

import styles from './Content.module.css'

export class Content extends Component {
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.content__title}>
          {this.props.title}
        </div>
        <div className={styles.content__description}>
          <br />
          {this.props.description.split('\n').map((item, i) => {
            return <div key={i}>{item}</div>
          })}
        </div>
      </div>
    )
  }
}
