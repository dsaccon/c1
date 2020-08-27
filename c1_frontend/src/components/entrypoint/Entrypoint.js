import React, { Component } from 'react'

import styles from './Entrypoint.module.css'

import { Footer } from './components/footerBtn/Footer'
import { RootSwiper } from './components/swipeComponents/RootSwiper'
import { Header } from './components/header/Header'

export class Entrypoint extends Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
  }

  state = { isBeginning: true, isEnd: false }

  handleSlideSwap = slideState => {
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
        <Footer
          btnText={this.state.isEnd ? 'log in' : 'next'}
          onClick={this.state.isEnd ? this.onLoginClicked : this.onNextClicked}
        />
      </div>
    )
  }
}
