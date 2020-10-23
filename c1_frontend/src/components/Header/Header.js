import React from "react";
import { CorrosionOne } from "../Icons/CorrosionOne";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";

const useStyles = makeStyles(({ palette, spacing }) => ({
  corrosionOne: {
    padding: spacing(2, 0),
  },
  header: {
    backgroundColor: palette.secondary.dark,
    textAlign: "center",
  },
}));

export const Header = ({ className, children, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.header, className)} {...props}>
      <CorrosionOne className={classes.corrosionOne} />
      {children}
    </div>
  );
};
