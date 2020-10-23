import React from "react";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  backButton: {
    position: "absolute",
    margin: 0,
    padding: ".2rem .5rem",
  },
  arrowLeft: {
    height: "3rem",
    width: "3rem",
  },
});

export const BackButton = ({ ...props }) => {
  const classes = useStyles();

  return (
    <IconButton
      color="primary"
      size="medium"
      className={classes.backButton}
      {...props}
    >
      <ArrowLeft className={classes.arrowLeft} />
    </IconButton>
  );
};
