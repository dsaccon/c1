import React, { Component } from 'react'

import './SecondScreen.css'
import { DoubleStarLogo } from '../../../../doubleStarLogo/DoubleStarLogo'
import { Content } from '../../content/Content'

export class SecondScreen extends Component {
  constructor(props) {
    super(props)

    if (props.title && props.description) {
      this.title = props.title
      this.description = props.description
    } else {
      this.title = 'Networking is like gold'
      this.description =
        'It’ll never corrode or go out of style.\n Forge relationships ' +
        'with top coatings\n specialists and boost your career.'
    }
  }

  render() {
    return (
      <div className="entrypoint__second-screen">
        <div>
          <DoubleStarLogo />
        </div>
        <Content title={this.title} description={this.description} />
      </div>
    )
  }
}
