import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ScalableTypography } from "../Typography/ScalableTypography";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/styles";
import PropTypes from "prop-types";
import classNames from "classnames";

const useStyles = makeStyles(({ palette }) => ({
  text: {
    padding: "1.25vh",
  },
  one: {
    color: palette.primary.main,
  },
}));

export const CorrosionOne = ({ link, className, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();

  const corrosionOne = (
    <>
      CORROSION<span className={classes.one}>ONE</span>
    </>
  );

  return (
    <ScalableTypography
      sizing="header"
      fontWeight="bold"
      className={classNames(className, classes.text)}
      {...props}
    >
      {link ? (
        <Link
          style={{ textDecoration: "none", color: theme.palette.text.primary }}
          to="/"
        >
          {corrosionOne}
        </Link>
      ) : (
        corrosionOne
      )}
    </ScalableTypography>
  );
};

CorrosionOne.propTypes = {
  link: PropTypes.bool,
};

CorrosionOne.defaultProps = {
  link: false,
};
