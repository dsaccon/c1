import React, { Component } from 'react'
import { SecondScreen } from '../secondScreen/SecondScreen'

export class ThirdScreen extends Component {
  title = 'Let work come to you'
  description =
    'Employers can easily see your\n qualifications and ' +
    'offer you work.\nLet your certifications do the talking!'

  render() {
    return <SecondScreen title={this.title} description={this.description} />
  }
}
