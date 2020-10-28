import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({}) => ({
  job: {
    width: "100%",
    maxWidth: "30rem",
    backgroundColor: "",
  },
}));

export const Job = ({
  location,
  dateStart,
  dateEnd,
  certificationRequired,
}) => {
  const classes = useStyles();

  return <div className={classes.job}></div>;
};
