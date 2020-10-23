import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ palette, spacing }) => ({
  footer: {
    display: "flex",
    height: "10%",
    backgroundColor: palette.secondary.main,
    flexDirection: "column",
    padding: spacing(1, 3),
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
