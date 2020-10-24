import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ScalableTypography } from "../Typography/ScalableTypography";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/styles";
import classNames from "classnames";

const useStyles = makeStyles(({ palette }) => ({
  text: {
    padding: "1.25vh",
  },
  one: {
    color: palette.primary.main,
  },
}));

export const CorrosionOne = ({ className, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <ScalableTypography
      sizing="header"
      fontWeight="bold"
      className={classNames(className, classes.text)}
      {...props}
    >
      <Link
        style={{ textDecoration: "none", color: theme.palette.text.primary }}
        to="/"
      >
        CORROSION<span className={classes.one}>ONE</span>
      </Link>
    </ScalableTypography>
  );
};
