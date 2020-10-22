import React from "react";
import PropTypes from "prop-types";
import Slide from "../../components/AutoRotatingCarousel/Slide";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CorrosionOne } from "../../components/Icons/CorrosionOne";

const useStyles = makeStyles({
  corrosionOne: {
    margin: ".75rem auto",
  },
});

export const LandingPageSlide = ({ title, subtitle, media, decreaseIndex }) => {
  const classes = useStyles();

  return (
    <Slide
      decreaseIndex={decreaseIndex}
      backButton
      header={<CorrosionOne className={classes.corrosionOne} />}
      media={media}
      title={title}
      subtitle={subtitle}
    />
  );
};

LandingPageSlide.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  media: PropTypes.node,
};
