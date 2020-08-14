import React, { Component } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

// For swiper lib
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

import './RootSwiper.css'

import { FirstScreen } from './firstScreen/FirstScreen'
import { SecondScreen } from './secondScreen/SecondScreen'
import { ThirdScreen } from './thirdScreen/ThirdScreen'

// install Swiper components
SwiperCore.use([Pagination])

export class RootSwiper extends Component {
  toNextSlide = () => this.swiper.slideNext()
  toPrevSlide = () => this.swiper.slidePrev()

  onSlideChange = swiper => {
    let slideState = {
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd
    }
    this.props.handleSlideSwap(slideState)
  }

  render() {
    return (
      <Swiper
        onSwiper={swiper => (this.swiper = swiper)}
        slidesPerView={1}
        onSlideChange={swiper => this.onSlideChange(swiper)}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <FirstScreen />
        </SwiperSlide>
        <SwiperSlide>
          <SecondScreen />
        </SwiperSlide>
        <SwiperSlide>
          <ThirdScreen />
        </SwiperSlide>
      </Swiper>
    )
  }
}
