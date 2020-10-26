import React, { useState } from "react";

export const useSwipeableView = (initialIndex) => {
  const [slideIndex, setSlideIndex] = useState(initialIndex);
  const goToPreviousSlide = () => setSlideIndex(slideIndex - 1);
  const goToNextSlide = () => setSlideIndex(slideIndex + 1);
  return [slideIndex, setSlideIndex, goToPreviousSlide, goToNextSlide];
};

export const SwipeableViewContext = React.createContext({
  slideIndex: 0,
});
