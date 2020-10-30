import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({}) => ({
  divider: {
    width: "100%",
    height: "1px",
    border: "1px solid #E5E5E5",
  },
}));

export const Divider = ({}) => {
  const classes = useStyles();

  return <hr className={classes.divider} />;
};
