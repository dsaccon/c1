import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { CarouselContext } from "../../components/AutoRotatingCarousel/AutoRotatingCarousel";

const useStyles = makeStyles({
  button: {
    margin: "auto",
  },
});

export const GoToNextPageButton = () => {
  const classes = useStyles();

  return (
    <CarouselContext.Consumer>
      {({ goToNextSlide }) => (
        <Button
          fullWidth
          className={classes.button}
          variant="contained"
          onClick={goToNextSlide}
          color="primary"
        >
          NEXT
        </Button>
      )}
    </CarouselContext.Consumer>
  );
};
