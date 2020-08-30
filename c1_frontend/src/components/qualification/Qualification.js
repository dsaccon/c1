import React, { Component } from 'react'

import { Header } from '../headerLogoOnly/Header'
import { SecondaryHeader } from '../secondaryHeader/SecondaryHeader'

import { Footer } from './components/footer/Footer'
import { RootSwiper } from './components/swipeComponents/RootSwiper'

import styles from './Qualification.module.css'

export class Qualification extends Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()

    this.SECONDATY_HEADERS = [
      'Additional Skills',
      'Equipment Experience',
      'Your Location',
      'Work Eligibility',
      'Languages',
      'Certifications',
      'Industry Experience'
    ]

    this.state = { slideIndex: 0, isBeginning: true, isEnd: false }
  }

  getHeader = () => {
    return this.SECONDATY_HEADERS[this.state.slideIndex]
  }

  onNextClicked = () => {
    if (this.state.isEnd) {
      this.props.history.push('/notification')
    } else {
      this.child.current.toNextSlide()
    }
  }

  /**
   * @todo add route to first screen
   */
  onBackClicked = () => {
    if (this.state.isBeginning) {
      // TODO: GO TO SOME ROUTE
      console.log('beginning')
    } else {
      this.child.current.toPrevSlide()
    }
  }

  /**
   * swipe handler
   * @param {{slideIndex: number, isBegining: Boolean, isEnd: Boolean}} slidesState
   */
  handleSwipe = slidesState => {
    this.setState(slidesState)
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <SecondaryHeader description={this.getHeader()} />
        <div className={styles.content}>
          <RootSwiper handleSwipe={this.handleSwipe} ref={this.child} />
        </div>
        <Footer
          onNextClick={this.onNextClicked}
          onBackClicked={this.onBackClicked}
        />
      </div>
    )
  }
}
