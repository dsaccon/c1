import React from "react";
import { makeStyles } from "@material-ui/styles";
import { AutoRotatingCarousel } from "../../components/AutoRotatingCarousel/AutoRotatingCarousel";
import { YourLocationSlide } from "./YourLocationSlide";
import { WorkEligibilitySlide } from "./WorkEligibilitySlide";
import { CertificationsSlide } from "./CertificationsSlide";
import { LanguagesSlide } from "./LanguagesSlide";
import { IndustryExperienceSlide } from "./IndustryExperienceSlide";

const useStyles = makeStyles({});

export const Registration = ({ ...props }) => {
  const classes = useStyles();

  return (
    <AutoRotatingCarousel autoplay={false}>
      <YourLocationSlide />
      <WorkEligibilitySlide />
      <LanguagesSlide />
      <CertificationsSlide />
      <IndustryExperienceSlide />
    </AutoRotatingCarousel>
  );
};
