import React from "react";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import { IconButton } from "@material-ui/core";
import classNames from "classnames";

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

export const BackButton = ({ className, ...props }) => {
  const classes = useStyles();
  console.log("CLASSNAME: ", className);

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
