import React from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types'
import Slide from "../../components/AutoRotatingCarousel/Slide";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  slideMedia: {
    display: 'block',
  },
  slideTitle: {
    fontSize: '1.125rem',
    fontWeight: 800,
  },
  corrosionTitle: {
    padding: '1.5rem 0',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: 'white',
    '& span': {
      color: '#6DDA43'
    }
  },
});

export const LandingPageSlide = ({ title, subtitle, media }) => {
  const classes = useStyles();

  return (
    <Slide
      backButton
      classes={{
        media: classes.slideMedia,
        title: classes.slideTitle,
      }}
      header={
        <Typography className={classes.corrosionTitle}>CORROSION<span>ONE</span></Typography>
      }
      media={media}
      title={title}
      subtitle={subtitle}
    />
  )
};

LandingPageSlide.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  media: PropTypes.node
}