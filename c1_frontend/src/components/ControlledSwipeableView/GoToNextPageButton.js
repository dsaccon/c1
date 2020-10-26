import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { SwipeableViewContext } from "../../hooks/useSwipeableView";

const useStyles = makeStyles({
  button: {
    margin: "auto",
  },
});

export const GoToNextPageButton = () => {
  const classes = useStyles();

  return (
    <SwipeableViewContext.Consumer>
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
    </SwipeableViewContext.Consumer>
  );
};
