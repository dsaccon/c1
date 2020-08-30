import React, { Component } from 'react'
import { SlideConstructor } from '../slideConstructor/SlideConstructor'

export class Skills extends Component {
  constructor(props) {
    super(props)

    this.description = 'Please select the items you have experience in.'
    this.MOCK_FIELDS = [
      {
        img: null,
        content: 'Experior steel'
      },
      {
        img: null,
        content: 'Underground pipeline'
      },
      {
        img: null,
        content: 'Tank linings'
      },
      {
        img: null,
        content: 'Flooring'
      },

      {
        img: null,
        content: 'Fireproofing'
      },

      {
        img: null,
        content: 'Insulation'
      },
      {
        img: null,
        content: 'Cathodic protection'
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
