import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import classNames from "classnames";

const useStyles = makeStyles(({ palette, spacing }) => ({
  footer: {
    display: "flex",
    backgroundColor: palette.secondary.main,
    flexDirection: "column",
    padding: spacing(2),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Footer = ({ className, centerItems, children, ...props }) => {
  const classes = useStyles();
  return (
    <div
      className={classNames(
        classes.footer,
        { [classes.center]: centerItems },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Footer.propTypes = {
  centerItems: PropTypes.bool,
};

Footer.defaultProps = {
  centerItems: true,
};
