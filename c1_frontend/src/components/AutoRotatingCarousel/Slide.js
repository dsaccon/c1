import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { ScalableTypography } from "../Typography/ScalableTypography";
import { CarouselContext } from "./AutoRotatingCarousel";
import { BackButton } from "../BackButton/BackButton";

const styles = {
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
  },
  textHolder: {
    textAlign: "center",
    margin: "auto",
    padding: "0 2rem",
  },
  title: {
    marginBottom: "1.5rem",
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
    classOverrides,
    ...other
  } = props;

  return (
    <CarouselContext.Consumer>
      {({ goToPreviousSlide }) => (
        <div className={classes.root} {...other}>
          <div className={classes.header}>
            {backButton && (
              <BackButton
                className={classOverrides.backButton}
                onClick={goToPreviousSlide}
              />
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
      )}
    </CarouselContext.Consumer>
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
   *
   * @ignore
   */
  header: PropTypes.node,
};

Slide.defaultProps = {
  classOverrides: {},
};

export default withStyles(styles)(Slide);
