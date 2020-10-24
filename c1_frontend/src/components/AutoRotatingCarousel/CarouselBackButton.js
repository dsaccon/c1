import React from "react";
import { BackButton } from "../BackButton/BackButton";
import { CarouselContext } from "./AutoRotatingCarousel";

export const CarouselBackButton = ({ ...props }) => {
  return (
    <CarouselContext.Consumer>
      {({ goToPreviousSlide }) => (
        <BackButton onClick={goToPreviousSlide} {...props} />
      )}
    </CarouselContext.Consumer>
  );
};
