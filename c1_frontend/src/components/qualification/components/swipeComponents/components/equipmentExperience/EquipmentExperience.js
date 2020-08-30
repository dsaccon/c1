import React, { Component } from 'react'
import { SlideConstructor } from '../slideConstructor/SlideConstructor'

export class EquipmentExperience extends Component {
  constructor(props) {
    super(props)

    this.description =
      'Please select the equipment that you are experienced in using.'
    this.MOCK_FIELDS = [
      {
        img: null,
        content: 'Air sprayer'
      },
      {
        img: null,
        content: 'Airless sprayer'
      },
      {
        img: null,
        content: 'Air assisted airless sprayer'
      },
      {
        img: null,
        content: 'Plural component sprayer'
      },
      {
        img: null,
        content: 'Brush'
      },
      {
        img: null,
        content: 'Roller (hand)'
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
