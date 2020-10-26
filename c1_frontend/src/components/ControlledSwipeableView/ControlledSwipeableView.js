import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import {
  SwipeableViewContext,
  useSwipeableView,
} from "../../hooks/useSwipeableView";

const useStyles = makeStyles(({}) => ({}));

export const ControlledSwipeableView = ({ children, ...props }) => {
  const classes = useStyles();
  const [
    slideIndex,
    setSlideIndex,
    goToPreviousSlide,
    goToNextSlide,
  ] = useSwipeableView(0);

  return (
    <SwipeableViewContext.Provider
      value={{
        slideIndex,
        setSlideIndex,
        goToPreviousSlide,
        goToNextSlide,
      }}
    >
      <SwipeableViews
        disabled={false}
        index={slideIndex}
        disableLazyLoading={true}
        {...props}
      >
        {children}
      </SwipeableViews>
    </SwipeableViewContext.Provider>
  );
};
