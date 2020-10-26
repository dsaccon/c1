import React from "react";
import { makeStyles } from "@material-ui/styles";
import { AutoRotatingCarousel } from "../../components/AutoRotatingCarousel/AutoRotatingCarousel";
import { YourLocationSlide } from "./YourLocationSlide";
import { WorkEligibilitySlide } from "./WorkEligibilitySlide";
import { CertificationsSlide } from "./CertificationsSlide";
import { LanguagesSlide } from "./LanguagesSlide";
import { IndustryExperienceSlide } from "./IndustryExperienceSlide";
import SwipeableViews from "react-swipeable-views";

const useStyles = makeStyles({});

export const Registration = ({ ...props }) => {
  const classes = useStyles();

  return (
    <SwipeableViews
      disabled={false}
      // index={1}
      disableLazyLoading={true}
    >
      <YourLocationSlide />
      <WorkEligibilitySlide />
      <LanguagesSlide />
      <CertificationsSlide />
      <IndustryExperienceSlide />
    </SwipeableViews>
  );
};
