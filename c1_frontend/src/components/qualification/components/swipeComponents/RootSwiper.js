import React, { Component } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// For swiper lib
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

import { Skills } from './components/skills/Skills'
import { EquipmentExperience } from './components/equipmentExperience/EquipmentExperience'
import { Location } from './components/location/Location'
import { WorkEligibility } from './components/workEligibility/WorkEligibility'
import { Languages } from './components/languages/Languages'
import { Certifications } from './components/certifications/Certifications'
import { IndustryExperience } from './components/industryExperience copy/IndustryExperience'

export class RootSwiper extends Component {
  toNextSlide = () => this.swiper.slideNext()
  toPrevSlide = () => this.swiper.slidePrev()

  onSlideChange = swiper => {
    const slidesState = {
      slideIndex: swiper.activeIndex,
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd
    }
    this.props.handleSwipe(slidesState)
  }

  render() {
    return (
      <Swiper
        style={{ height: '100%' }}
        onSwiper={swiper => (this.swiper = swiper)}
        slidesPerView={1}
        onSlideChange={swiper => this.onSlideChange(swiper)}
      >
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <EquipmentExperience />
        </SwiperSlide>
        <SwiperSlide>
          <Location />
        </SwiperSlide>
        <SwiperSlide>
          <WorkEligibility />
        </SwiperSlide>
        <SwiperSlide>
          <Languages />
        </SwiperSlide>
        <SwiperSlide>
          <Certifications />
        </SwiperSlide>
        <SwiperSlide>
          <IndustryExperience />
        </SwiperSlide>
      </Swiper>
    )
  }
}
