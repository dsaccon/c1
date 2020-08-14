import React, { Component } from 'react'

import backBtn from './images/back_btn.svg'
import logo from './images/logo.svg'

import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className="entrypoint__header">
        {this.props.toHideBtn ? null : (
          <div
            onClick={this.props.onClick}
            className="entrypoint__header__back-btn"
          >
            <img src={backBtn} alt="" />
          </div>
        )}
        <div className="entrypoint__header__logo">
          <img src={logo} alt="" />
        </div>
      </div>
    )
  }
}
