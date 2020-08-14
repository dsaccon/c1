import React, { Component } from 'react'

import { Content } from '../../content/Content'

import styles from './FirstScreen.module.css'
import ic_hand_with_world from './images/hand_with_world.svg'

export class FirstScreen extends Component {
  title = 'All in the palm of your hand'
  description =
    'With global jobs right on your phone,\n you can easily ' +
    'fill your calendar and\n say goodbye to wasted time.'

  render() {
    return (
      <div className={styles.entrypoint__first_screen}>
        <img
          src={ic_hand_with_world}
          alt=""
          className={styles.entrypoint__first_screen__image}
        />
        <Content title={this.title} description={this.description} />
      </div>
    )
  }
}
