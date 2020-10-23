import React from "react";
import { CorrosionOneIconSvg } from "../../components/Icons/CorrosionOneIconSvg";
import collectJobs from "../../components/Images/collectJobs.png";
import network from "../../components/Images/network.png";
import palmOfHand from "../../components/Images/palmOfHand.png";
import AutoRotatingCarousel from "../../components/AutoRotatingCarousel/AutoRotatingCarousel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Slide from "../../components/AutoRotatingCarousel/Slide";
import { LandingPageSlide } from "./LandingPageSlide";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

const useStyles = makeStyles(({ palette }) => ({
  content: {
    flexGrow: "1",
    width: "100%",
    margin: 0,
    position: "static",
    maxWidth: "none",
    maxHeight: "none",
    transform: "none",
  },
  carousel: {
    backgroundColor: palette.secondary.dark,
  },
  corrosionIcon: {
    height: "75%",
    width: "75%",
    maxWidth: "40rem",
    maxHeight: "40rem",
    margin: "10% auto 0",
  },
  button: {
    margin: "auto",
  },
  mediaImage: {
    width: "100%",
    maxWidth: "30rem",
    margin: "auto",
  },
}));

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <AutoRotatingCarousel
        classes={{
          content: classes.content,
          carousel: classes.carousel,
        }}
        autoplay={false}
      >
        <Slide
          media={<CorrosionOneIconSvg className={classes.corrosionIcon} />}
        />
        <LandingPageSlide
          media={
            <img
              className={classes.mediaImage}
              src={network}
              alt="Collect Jobs"
            />
          }
          title="All in the palm of your hand."
          subtitle="With global jobs right on your phone, you can easily fill your calendar and say goodbye to wasted time."
        />
        <LandingPageSlide
          media={
            <img
              className={classes.mediaImage}
              src={palmOfHand}
              alt="Collect Jobs"
            />
          }
          title="Networking is like gold"
          subtitle="It’ll never corrode or go out of style. Forge relationships with top coatings specialists and boost your career."
        />
        <LandingPageSlide
          media={
            <img
              className={classes.mediaImage}
              src={collectJobs}
              alt="Collect Jobs"
            />
          }
          title="Let work come to you"
          subtitle="Employers can easily see your qualifications and offer you work. Let your certifications do the talking!"
        />
      </AutoRotatingCarousel>
      <Footer>
        <Button
          className={classes.button}
          color="primary"
          size="large"
          variant="contained"
          component={Link}
          to="/login"
          fullWidth
        >
          LOG IN
        </Button>
      </Footer>
    </>
  );
};
