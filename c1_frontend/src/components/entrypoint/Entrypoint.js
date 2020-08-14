import React, { Component } from 'react'

import styles from './Entrypoint.module.css'

import { FooterBtn } from './components/footerBtn/FooterBtn'
import { RootSwiper } from './components/swipeComponents/RootSwiper'
import { Header } from '../header/Header'

export class Entrypoint extends Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
  }

  state = { isBeginning: true, isEnd: false }

  handleSlideSwap = (slideState) => {
    this.setState(slideState)
  }

  onNextClicked = () => {
    this.child.current.toNextSlide()
  }

  onPrevClicked = () => {
    this.child.current.toPrevSlide()
  }

  onLoginClicked = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className={styles.entrypoint}>
        <div className={styles.entrypoint__bg}>
          <div className={styles.entrypoint__bg__header}>
            <Header
              toHideBtn={this.state.isBeginning}
              onClick={this.onPrevClicked}
            />
          </div>
          <div className={styles.entrypoint__bg__main}>
            <RootSwiper
              handleSlideSwap={this.handleSlideSwap}
              ref={this.child}
            />
          </div>
        </div>
        <div className={styles.entrypoint__footer}>
          {this.state.isEnd ? (
            <FooterBtn btnText={'log in'} onClick={this.onLoginClicked} />
          ) : (
            <FooterBtn btnText={'next'} onClick={this.onNextClicked} />
          )}
        </div>
      </div>
    )
  }
}
