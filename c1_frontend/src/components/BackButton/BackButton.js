import React from "react";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import { IconButton } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(({ spacing }) => ({
  backButton: {
    position: "absolute",
    padding: 0,
  },
  arrowLeft: {
    height: "7.5vh",
    width: "7.5vh",
  },
}));

export const BackButton = ({ className, ...props }) => {
  const classes = useStyles();

  return (
    <IconButton
      color="primary"
      size="medium"
      className={classNames(classes.backButton, className)}
      {...props}
    >
      <ArrowLeft className={classes.arrowLeft} />
    </IconButton>
  );
};
