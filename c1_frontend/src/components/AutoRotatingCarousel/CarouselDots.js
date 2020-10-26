import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { modulo } from "./util";
import { SwipeableViewContext } from "../../hooks/useSwipeableView";
import Dots from "material-ui-dots";

const useStyles = makeStyles({
  dots: {
    margin: "0 auto",
  },
});

export const CarouselDots = ({ ...props }) => {
  const classes = useStyles();

  return (
    <SwipeableViewContext.Consumer>
      {({ setSlideIndex, numSlides, index }) =>
        numSlides > 1 && (
          <Dots
            count={numSlides}
            index={modulo(index, numSlides)}
            className={classes.dots}
            onDotClick={setSlideIndex}
            {...props}
          />
        )
      }
    </SwipeableViewContext.Consumer>
  );
};
