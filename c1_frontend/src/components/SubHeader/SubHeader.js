import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import classNames from "classnames";

const useStyles = makeStyles(({ palette, spacing }) => ({
  subHeader: {
    backgroundColor: palette.secondary.main,
    padding: spacing(1),
  },
  centerText: {
    textAlign: "center",
  },
}));

export const SubHeader = ({
  text,
  centerText,
  className,
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.subHeader,
        { [classes.centerText]: centerText },
        className
      )}
      {...props}
    >
      <ScalableTypography sizing="title">{text}</ScalableTypography>
      {children}
    </div>
  );
};

SubHeader.propTypes = {
  text: PropTypes.string,
  centerText: PropTypes.bool,
};

SubHeader.defaultProps = {
  centerText: true,
};
