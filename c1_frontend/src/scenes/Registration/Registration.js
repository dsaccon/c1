import React from "react";
import { makeStyles } from "@material-ui/styles";
import { YourLocationSlide } from "./YourLocationSlide";
import { WorkEligibilitySlide } from "./WorkEligibilitySlide";
import { CertificationsSlide } from "./CertificationsSlide";
import { LanguagesSlide } from "./LanguagesSlide";
import { IndustryExperienceSlide } from "./IndustryExperienceSlide";
import { ControlledSwipeableView } from "../../components/ControlledSwipeableView/ControlledSwipeableView";

const useStyles = makeStyles({});

export const Registration = ({ ...props }) => {
  const classes = useStyles();

  return (
    <ControlledSwipeableView disabled={false} disableLazyLoading={true}>
      <YourLocationSlide />
      <WorkEligibilitySlide />
      <LanguagesSlide />
      <CertificationsSlide />
      <IndustryExperienceSlide />
    </ControlledSwipeableView>
  );
};
