import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Content } from "../../components/Content/Content";
import { GoToPreviousPageButton } from "../../components/ControlledSwipeableView/GoToPreviousPageButton";
import { Header } from "../../components/Header/Header";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { CarouselDots } from "../../components/AutoRotatingCarousel/CarouselDots";

const useStyles = makeStyles({
  content: {
    height: "100%",
  },
  textHolder: {
    textAlign: "center",
  },
});

export const LandingPageSlide = ({ media, title, subtitle }) => {
  const classes = useStyles();

  return (
    <Content className={classes.content} padding={false} autoSpacing={false}>
      <Header backButton={<GoToPreviousPageButton />} />
      {media}
      <Content className={classes.textHolder}>
        <ScalableTypography className={classes.title} sizing="title">
          {title}
        </ScalableTypography>
        <ScalableTypography>{subtitle}</ScalableTypography>
        <CarouselDots />
      </Content>
    </Content>
  );
};

LandingPageSlide.propTypes = {};
