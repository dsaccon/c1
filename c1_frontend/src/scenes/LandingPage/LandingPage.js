import React from 'react'
import { CorrosionOneIconSvg } from "../../components/Icons/CorrosionOneIconSvg";
import collectJobs from '../../components/Images/collectJobs.png';
import network from '../../components/Images/network.png';
import palmOfHand from '../../components/Images/palmOfHand.png';
import AutoRotatingCarousel from "../../components/AutoRotatingCarousel/AutoRotatingCarousel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Slide from "../../components/AutoRotatingCarousel/Slide";
import { LandingPageSlide } from "./LandingPageSlide";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  landingPage: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  content: {
    flexGrow: '1',
    width: '100%',
    margin: 0,
    position: 'static',
    maxWidth: 'none',
    maxHeight: 'none',
    transform: 'none',
  },
  carousel: {
    '& div': {
      backgroundColor: '#274253 !important',
      position: 'static'
    },
  },
  corrosionIcon: {
    height: '75%',
    width: '75%'
  },
  footer: {
    display: 'flex',
    height: '10%',
    backgroundColor: '#296D8E'
  },
  button: {
    margin: 'auto',
    width: '75%',
    font: 'Montserrat',
    backgroundColor: '#6DDA43',
    color: 'white',
    '&:hover': {
      backgroundColor: '#6DDA43'
    },
  },
  mediaImage: {
    width: '100%',
  },
});

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.landingPage}>
      <AutoRotatingCarousel
        backButton
        classes={{
          content: classes.content,
          carousel: classes.carousel
        }}
        open
        autoplay={false}
      >
        <Slide media={<CorrosionOneIconSvg className={classes.corrosionIcon}/>}/>
        <LandingPageSlide
          media={
            <div>
              <img className={classes.mediaImage} src={network} alt="Collect Jobs"/>
            </div>
          }
          title='All in the palm of your hand. '
          subtitle='With global jobs right on your phone, you can easily fill your calendar and say goodbye to wasted time.'
        />
        <LandingPageSlide
          media={
            <div>
              <img className={classes.mediaImage} src={palmOfHand} alt="Collect Jobs"/>
            </div>
          }
          title='Networking is like gold'
          subtitle='It’ll never corrode or go out of style. Forge relationships with top coatings specialists and boost your career.'
        />
        <LandingPageSlide
          media={
            <div>
              <img className={classes.mediaImage} src={collectJobs} alt="Collect Jobs"/>
            </div>
          }
          title='Let work come to you'
          subtitle='Employers can easily see your qualifications and offer you work. Let your certifications do the talking!'
        />
      </AutoRotatingCarousel>
      <div className={classes.footer}>
        <Button
          size="large"
          className={classes.button}
          variant='contained'
          component={Link}
          to="/login"
        >
          LOG IN
        </Button>
      </div>
    </div>
  )
}
