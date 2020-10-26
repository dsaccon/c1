import React from "react";
import { LandingPageSvg } from "../../components/Icons/LandingPageSvg";
import { AutoRotatingCarousel } from "../../components/AutoRotatingCarousel/AutoRotatingCarousel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { LandingPageSlide } from "./LandingPageSlide";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { NetworkSvg } from "../../components/Icons/NetworkSvg";
import { PalmOfHandSvg } from "../../components/Icons/PalmOfHandSvg";
import { CollectJobsSvg } from "../../components/Icons/CollectJobsSvg";
import { Content } from "../../components/Content/Content";

const useStyles = makeStyles(({ palette }) => ({
  content: {
    height: "100%",
  },
  carousel: {
    backgroundColor: palette.secondary.dark,
    flexGrow: "1",
  },
  corrosionIcon: {
    height: "75%",
    width: "75%",
    maxWidth: "40rem",
    maxHeight: "40rem",
    margin: "auto",
  },
  button: {
    margin: "auto",
  },
  mediaImage: {
    height: "50%",
    width: "100%",
    maxWidth: "30rem",
    maxHeight: "30rem",
    margin: "auto",
  },
}));

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <AutoRotatingCarousel autoplay className={classes.carousel}>
        <Content padding={false} className={classes.content}>
          <LandingPageSvg className={classes.corrosionIcon} />
        </Content>
        <LandingPageSlide
          media={<NetworkSvg className={classes.mediaImage} />}
          title="All in the palm of your hand."
          subtitle="With global jobs right on your phone, you can easily fill your calendar and say goodbye to wasted time."
        />
        <LandingPageSlide
          media={<PalmOfHandSvg className={classes.mediaImage} />}
          title="Networking is like gold"
          subtitle="It’ll never corrode or go out of style. Forge relationships with top coatings specialists and boost your career."
        />
        <LandingPageSlide
          media={<CollectJobsSvg className={classes.mediaImage} />}
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
