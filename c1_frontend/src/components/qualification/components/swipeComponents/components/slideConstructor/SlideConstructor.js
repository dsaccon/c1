import React, { Component } from 'react'

import styles from './SlideConstructor.module.css'
import { Item } from './components/Item'

export class SlideConstructor extends Component {
  constructor(props) {
    super(props)
    this.description = props.description
    this.fields = props.fields
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.description}>
          {this.description.split('\n').map((item, i) => {
            return <div key={i}>{item}</div>
          })}
        </div>
        <div className={styles.items}>
          {this.fields.map((value, index) => {
            return <Item key={index} content={value.content} img={value.img} />
          })}
        </div>
      </div>
    )
  }
}
