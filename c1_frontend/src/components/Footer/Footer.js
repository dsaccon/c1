import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ palette, spacing }) => ({
  footer: {
    display: "flex",
    backgroundColor: palette.secondary.main,
    flexDirection: "column",
    padding: spacing(2),
  },
}));

export const Footer = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.footer} {...props}>
      {children}
    </div>
  );
};
