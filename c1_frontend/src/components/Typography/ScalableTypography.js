import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  header: {
    fontSize: "3.5vh",
    fontWeight: 800,
  },
  title: {
    fontSize: "2.5vh",
    fontWeight: 600,
  },
  normal: {
    fontSize: "2vh",
    fontWeight: 400,
  },
  small: {
    fonSize: "1vh",
    fontWeight: 300,
  },
});

export const ScalableTypography = ({
  sizing,
  className,
  children,
  ...other
}) => {
  const classes = useStyles();

  return (
    <Typography
      className={classNames(className, {
        [classes[sizing]]: sizing,
      })}
      {...other}
    >
      {children}
    </Typography>
  );
};

ScalableTypography.propTypes = {
  sizing: PropTypes.string,
  fontWeight: PropTypes.string,
};

ScalableTypography.defaultProps = {
  sizing: "normal",
};
