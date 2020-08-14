import React, { Component } from 'react'
import './FooterBtn.css'

export class FooterBtn extends Component {
  onClick = e => {
    e.preventDefault()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <button className="footerBtn" onClick={this.onClick}>
        <div className="footerBtn__text">{this.props.btnText}</div>
      </button>
    )
  }
}
