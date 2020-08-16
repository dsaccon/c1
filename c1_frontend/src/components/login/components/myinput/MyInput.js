import React, { Component } from 'react'

import styles from './MyInput.module.css'

export class MyInput extends Component {
  render() {
    return (
      <input
        className={styles.container}
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    )
  }
}
