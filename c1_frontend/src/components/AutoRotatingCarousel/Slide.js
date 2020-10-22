import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { IconButton } from "@material-ui/core";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import { ScalableTypography } from "../Typography/ScalableTypography";

const styles = {
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
  },
  backButton: {
    position: "absolute",
    margin: 0,
    padding: ".2rem .5rem",
  },
  textHolder: {
    textAlign: "center",
    margin: "auto",
    padding: "0 2rem",
  },
  title: {
    marginBottom: "1.5rem",
  },
  arrowLeft: {
    height: "3rem",
    width: "3rem",
  },
};

const Slide = (props) => {
  const {
    classes,
    media,
    mediaBackgroundStyle,
    subtitle,
    title,
    mobile,
    landscape,
    backButton,
    goToPreviousSlide,
    header,
    decreaseIndex,
    ...other
  } = props;

  return (
    <div className={classes.root} {...other}>
      <div className={classes.header}>
        {backButton && (
          <IconButton
            color="primary"
            size="medium"
            onClick={decreaseIndex}
            className={classes.backButton}
          >
            <ArrowLeft className={classes.arrowLeft} />
          </IconButton>
        )}
        {header}
      </div>
      {media}
      <div className={classes.textHolder}>
        <ScalableTypography className={classes.title} sizing="title">
          {title}
        </ScalableTypography>
        <ScalableTypography>{subtitle}</ScalableTypography>
      </div>
    </div>
  );
};

Slide.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Object to display in the upper half.
   */
  media: PropTypes.node.isRequired,
  /**
   * Override the inline-styles of the media container.
   */
  mediaBackgroundStyle: PropTypes.object,
  /**
   * Subtitle of the slide.
   */
  subtitle: PropTypes.string,
  /**
   * Title of the slide.
   */
  title: PropTypes.string,
  /**
   * If `true`, the screen width and height is filled.
   * @ignore
   */
  mobile: PropTypes.bool,
  /**
   * If `true`, slide will adjust content for wide mobile screens.
   * @ignore
   */
  landscape: PropTypes.bool,
  /**
   * Back button
   * @ignore
   */
  backButton: PropTypes.bool,
  /**
   * Function to go to previous slide
   * @ignore
   */
  goToPreviousSlide: PropTypes.func,
  /**
   *
   * @ignore
   */
  header: PropTypes.node,
};

export default withStyles(styles)(Slide);
