import React from "react";
import { BackButton } from "../BackButton/BackButton";
import { SwipeableViewContext } from "../../hooks/useSwipeableView";

export const GoToPreviousPageButton = ({ ...props }) => {
  return (
    <SwipeableViewContext.Consumer>
      {({ goToPreviousSlide }) => (
        <BackButton onClick={goToPreviousSlide} {...props} />
      )}
    </SwipeableViewContext.Consumer>
  );
};
