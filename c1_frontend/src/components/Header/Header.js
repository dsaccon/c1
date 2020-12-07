import React from "react";
import { CorrosionOne } from "../Icons/CorrosionOne";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";
import { GoogleLogout } from "../Auth/GoogleLogout";

const useStyles = makeStyles(({ palette, spacing }) => ({
  header: {
    backgroundColor: palette.secondary.dark,
    display: "flex",
    flexDirection: "column",
  },
  corrosionOne: {
    alignSelf: "center",
  },
}));

export const Header = ({ backButton, className, children, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.header, className)} {...props}>
      {backButton}
      <CorrosionOne className={classes.corrosionOne} />
      {children}
      <GoogleLogout />
    </div>
  );
};
