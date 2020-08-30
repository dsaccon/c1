import React, { Component } from 'react'
import { SlideConstructor } from '../slideConstructor/SlideConstructor'

import us_ic from '../flags/us.svg'
import ca_ic from '../flags/ca.svg'
import uk_ic from '../flags/uk.svg'
import sa_ic from '../flags/sa.svg'
import eu_ic from '../flags/eu.svg'

export class Location extends Component {
  constructor(props) {
    super(props)

    this.description =
      'To make a CorrosionOne profile, you need to answer a few questions about yourself.' +
      '\n \u00A0 \nFirst, tell us where you’re located.'
    this.MOCK_FIELDS = [
      {
        img: us_ic,
        content: 'United States'
      },
      {
        img: ca_ic,
        content: 'Canada'
      },
      {
        img: uk_ic,
        content: 'United Kingdom'
      },
      {
        img: sa_ic,
        content: 'Saudi Arabia'
      },
      {
        img: eu_ic,
        content: 'European Union'
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
