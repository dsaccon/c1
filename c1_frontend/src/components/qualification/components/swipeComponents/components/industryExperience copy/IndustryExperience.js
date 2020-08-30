import React, { Component } from 'react'
import { SlideConstructor } from '../slideConstructor/SlideConstructor'

export class IndustryExperience extends Component {
  constructor(props) {
    super(props)

    this.description =
      'Select the industries you are experienced in.'
    this.MOCK_FIELDS = [
      {
        img: null,
        content: 'Marine'
      },
      {
        img: null,
        content: 'Deep Water'
      },
      {
        img: null,
        content: 'Pipelines'
      },
      {
        img: null,
        content: 'Terminals'
      },
      {
        img: null,
        content: 'Petroleum'
      },
      {
        img: null,
        content: 'Food & Beverage'
      },
      {
        img: null,
        content: 'Roller (power)'
      }
    ]
  }

  render() {
    return (
      <SlideConstructor
        description={this.description}
        fields={this.MOCK_FIELDS}
      />
    )
  }
}
