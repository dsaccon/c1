import React, { Component } from 'react'

import './DoubleStarLogo.css'
import grey_star from './images/grey_star.svg'

export class DoubleStarLogo extends Component {
  render() {
    return (
      <div className="double-star-logo">
        <img
          src={grey_star}
          alt=""
          className="double-star-logo__image"
        />
      </div>
    )
  }
}
