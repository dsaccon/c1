import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Footer } from "../../components/Footer/Footer";
import { GoToNextPageButton } from "./GoToNextPageButton";
import { RegistrationSlide } from "./RegistrationSlide";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({}) => ({}));

export const WorkEligibilitySlide = ({}) => {
  const classes = useStyles();

  return (
    <RegistrationSlide backButton subheaderText="WORK ELIGIBILITY">
      <Content>
        <ScalableTypography color="textSecondary">
          Now, tell us in which country or countries you are eligible to work.
        </ScalableTypography>
        <Button variant="contained" fullWidth>
          United States
        </Button>
        <Button variant="contained" fullWidth>
          Canada
        </Button>
        <Button variant="contained" fullWidth>
          United Kingdom
        </Button>
        <Button variant="contained" fullWidth>
          Saudi Arabia
        </Button>
        <Button variant="contained" fullWidth>
          European Union
        </Button>
      </Content>
      <Footer>
        <GoToNextPageButton />
      </Footer>
    </RegistrationSlide>
  );
};
