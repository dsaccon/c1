import React from "react";
import { CorrosionOne } from "../Icons/CorrosionOne";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(({ palette, spacing }) => ({
  corrosionOne: {
    padding: spacing(2, 0),
  },
  header: {
    backgroundColor: palette.secondary.dark,
    textAlign: "center",
  },
}));

export const Header = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.header} {...props}>
      <CorrosionOne className={classes.corrosionOne} />
      {children}
    </div>
  );
};
