import React, { Component } from 'react'
import { SlideConstructor } from '../slideConstructor/SlideConstructor'

export class Languages extends Component {
  constructor(props) {
    super(props)

    this.description = 'Next, select the languages you are fluent in.'
    this.MOCK_FIELDS = [
      {
        img: null,
        content: 'English'
      },
      {
        img: null,
        content: 'French'
      },
      {
        img: null,
        content: 'Spanish'
      },
      {
        img: null,
        content: 'Arabic'
      },
      {
        img: null,
        content: 'Chinese (Mandarin)'
      },
      {
        img: null,
        content: 'Korean'
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
