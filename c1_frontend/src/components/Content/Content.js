import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import classNames from "classnames";

const contentStyling = {
  display: "flex",
  flexDirection: "column",
  padding: "10%",
  flexGrow: 1,
};

const useStyles = makeStyles(({ spacing }) => ({
  content: contentStyling,
  contentAutoSpacing: {
    ...contentStyling,
    "& > *": {
      marginBottom: spacing(3),
    },
  },
}));

export const Content = ({ className, autoSpacing, children, ...props }) => {
  const classes = useStyles();
  const contentClass = autoSpacing
    ? classes.contentAutoSpacing
    : classes.content;

  return (
    <div className={classNames(contentClass, className)} {...props}>
      {children}
    </div>
  );
};

Content.propTypes = {
  autoSpacing: PropTypes.bool,
};

Content.defaultProps = {
  autoSpacing: true,
};
