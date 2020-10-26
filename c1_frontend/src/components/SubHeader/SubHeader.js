import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";

const useStyles = makeStyles(({ palette, spacing }) => ({
  subHeader: {
    backgroundColor: palette.secondary.main,
    textAlign: "center",
    padding: spacing(1),
  },
}));

export const SubHeader = ({ text, children, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.subHeader}>
      <ScalableTypography sizing="title">{text}</ScalableTypography>
      {children}
    </div>
  );
};

SubHeader.propTypes = {
  text: PropTypes.string,
};
