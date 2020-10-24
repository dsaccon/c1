import React, { useState } from "react";
import Carousel from "./SwipableCarouselView";
import { modulo } from "./util";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  carousel: {
    height: "100%",
  },
});

export const CarouselContext = React.createContext();

export const AutoRotatingCarousel = ({
  children,
  autoplay,
  interval,
  className,
  ...props
}) => {
  const classes = useStyles();
  const hasMultipleChildren = children.length != null;

  const [slideIndex, setSlideIndex] = useState(0);
  const goToPreviousSlide = () => setSlideIndex(slideIndex - 1);
  const goToNextSlide = () => setSlideIndex(slideIndex + 1);
  const handleContentClick = (e) => e.stopPropagation() || e.preventDefault();

  return (
    <CarouselContext.Provider
      value={{
        goToPreviousSlide,
        goToNextSlide,
        setSlideIndex,
        numSlides: children.length,
        index: modulo(slideIndex, children.length),
      }}
    >
      <div className={className} onClick={handleContentClick}>
        <Carousel
          className={classes.carousel}
          autoplay={autoplay && hasMultipleChildren}
          index={slideIndex}
          interval={interval}
          onChangeIndex={setSlideIndex}
          containerStyle={{ height: "100%" }}
        >
          {children}
        </Carousel>
      </div>
    </CarouselContext.Provider>
  );
};

AutoRotatingCarousel.defaultProps = {
  autoplay: false,
  interval: 3000,
};

AutoRotatingCarousel.propTypes = {};
