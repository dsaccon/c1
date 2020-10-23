import React from "react";
import { makeStyles } from "@material-ui/styles";
import AutoRotatingCarousel from "../../components/AutoRotatingCarousel/AutoRotatingCarousel";
import { RegistrationSlide } from "./RegistrationSlide";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";

const useStyles = makeStyles({
  content: {
    flexGrow: "1",
    width: "100%",
    margin: 0,
    position: "static",
    maxWidth: "none",
    maxHeight: "none",
    transform: "none",
  },
});

export const Registration = ({ ...props }) => {
  const classes = useStyles();

  return (
    <AutoRotatingCarousel
      classes={{ content: classes.content }}
      autoplay={false}
    >
      <RegistrationSlide subheaderText="YOUR LOCATION">
        <ScalableTypography color="textSecondary">
          To make a CorrosionOne profile, you need to answer a few questions
          about yourself.
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          First tell us where you’re located.
        </ScalableTypography>
      </RegistrationSlide>
      <RegistrationSlide subheaderText="WORK ELIGIBILITY">
        <ScalableTypography color="textSecondary">
          Now, tell us in which country or countries you are eligible to work.
        </ScalableTypography>
      </RegistrationSlide>
      <RegistrationSlide subheaderText="LANGUAGES">
        <ScalableTypography color="textSecondary">
          Next, select the languages you are fluent in.
        </ScalableTypography>
      </RegistrationSlide>
      <RegistrationSlide subheaderText="CERTIFICATIONS">
        <ScalableTypography color="textSecondary">
          Tell us what certifications you hold.
        </ScalableTypography>
      </RegistrationSlide>
      <RegistrationSlide subheaderText="INDUSTRY EXPERIENCE">
        <ScalableTypography color="textSecondary">
          Select the industries you are experienced in.
        </ScalableTypography>
      </RegistrationSlide>
    </AutoRotatingCarousel>
  );
};
