import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import classNames from "classnames";

const useStyles = makeStyles(({ spacing }) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  autoSpacing: {
    "& > *": {
      marginBottom: spacing(2),
    },
  },
  padding: {
    padding: spacing(2),
  },
  centerItems: {
    alignItems: "center",
  },
}));

export const Content = ({
  className,
  autoSpacing,
  padding,
  centerItems,
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.content,
        {
          [classes.autoSpacing]: autoSpacing,
          [classes.padding]: padding,
          [classes.centerItems]: centerItems,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Content.propTypes = {
  autoSpacing: PropTypes.bool,
  padding: PropTypes.bool,
  centerItems: PropTypes.bool,
};

Content.defaultProps = {
  autoSpacing: true,
  padding: true,
  centerItems: false,
};
