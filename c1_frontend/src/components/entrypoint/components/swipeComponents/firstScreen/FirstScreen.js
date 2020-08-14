import React, { Component } from 'react'

import { Content } from '../../content/Content'

import './FirstScreen.css'
import ic_hand_with_world from './images/hand_with_world.svg'

export class FirstScreen extends Component {
  title = 'All in the palm of your hand'
  description =
    'With global jobs right on your phone,\n you can easily ' +
    'fill your calendar and\n say goodbye to wasted time.'

  render() {
    return (
      <div className="entrypoint__first-screen">
        <img
          src={ic_hand_with_world}
          alt=""
          className="entrypoint__first-screen__image"
        />
        <Content title={this.title} description={this.description} />
      </div>
    )
  }
}
