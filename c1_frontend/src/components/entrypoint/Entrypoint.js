import React, { Component } from 'react'

import './Entrypoint.css'

import { FooterBtn } from './components/footerBtn/FooterBtn'
import { RootSwiper } from './components/swipeComponents/RootSwiper'
import { Header } from '../header/Header'

export class Entrypoint extends Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
  }

  state = { isBeginning: true, isEnd: false }

  handleSlideSwap = slideState => {
    this.setState(slideState)
  }

  onNextClicked = e => {
    this.child.current.toNextSlide()
  }

  onPrevClicked = e => {
    this.child.current.toPrevSlide()
  }

  render() {
    return (
      <div className="entrypoint">
        <div className="entrypoint__bg">
          <div className="entrypoint__bg__header">
            <Header
              toHideBtn={this.state.isBeginning}
              onClick={this.onPrevClicked}
            />
          </div>
          <div className="entrypoint__bg__main">
            <RootSwiper
              handleSlideSwap={this.handleSlideSwap}
              ref={this.child}
            />
          </div>
        </div>
        <div className="entrypoint__footer">
          {this.state.isEnd ? (
            <FooterBtn btnText={'log in'} />
          ) : (
            <FooterBtn btnText={'next'} onClick={this.onNextClicked} />
          )}
        </div>
      </div>
    )
  }
}
