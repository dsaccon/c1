import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Footer } from "../../components/Footer/Footer";
import { GoToNextPageButton } from "../../components/ControlledSwipeableView/GoToNextPageButton";
import { RegistrationSlide } from "./RegistrationSlide";
import Button from "@material-ui/core/Button";
import { GoToPreviousPageButton } from "../../components/ControlledSwipeableView/GoToPreviousPageButton";

const useStyles = makeStyles(({}) => ({}));

export const LanguagesSlide = ({}) => {
  const classes = useStyles();

  return (
    <RegistrationSlide
      backButton={<GoToPreviousPageButton />}
      subheaderText="Languages"
    >
      <Content>
        <ScalableTypography color="textSecondary">
          Next, select the languages you are fluent in.
        </ScalableTypography>
        <Content centerItems padding={false}>
          <Button variant="contained" fullWidth>
            English
          </Button>
          <Button variant="contained" fullWidth>
            French
          </Button>
          <Button variant="contained" fullWidth>
            Spanish
          </Button>
          <Button variant="contained" fullWidth>
            Arabic
          </Button>
          <Button variant="contained" fullWidth>
            Chinese (Mandarin)
          </Button>
          <Button variant="contained" fullWidth>
            Korean
          </Button>
        </Content>
      </Content>
      <Footer>
        <GoToNextPageButton />
      </Footer>
    </RegistrationSlide>
  );
};
