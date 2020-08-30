import React, { Component } from 'react'
import { SlideConstructor } from '../slideConstructor/SlideConstructor'

export class Certifications extends Component {
  constructor(props) {
    super(props)

    this.description = 'Tell us what certifications you hold.'
    this.MOCK_FIELDS = [
      {
        img: null,
        content: 'NACE1'
      },
      {
        img: null,
        content: 'NACE2'
      },
      {
        img: null,
        content: 'NACE3'
      },
      {
        img: null,
        content: 'SSPC'
      },
      {
        img: null,
        content: 'Six Sigma'
      },
      {
        img: null,
        content: 'Cisco'
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
