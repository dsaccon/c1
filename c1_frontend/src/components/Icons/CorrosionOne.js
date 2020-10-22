import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ScalableTypography } from "../Typography/ScalableTypography";

const useStyles = makeStyles(({ palette }) => ({
  one: {
    color: palette.primary.main,
  },
}));

export const CorrosionOne = ({ ...props }) => {
  const classes = useStyles();

  return (
    <ScalableTypography
      color="textPrimary"
      sizing="header"
      fontWeight="bold"
      {...props}
    >
      CORROSION<span className={classes.one}>ONE</span>
    </ScalableTypography>
  );
};
