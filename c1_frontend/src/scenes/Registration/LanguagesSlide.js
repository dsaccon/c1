import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Footer } from "../../components/Footer/Footer";
import { GoToNextPageButton } from "./GoToNextPageButton";
import { RegistrationSlide } from "./RegistrationSlide";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({}) => ({}));

export const LanguagesSlide = ({}) => {
  const classes = useStyles();

  return (
    <RegistrationSlide backButton subheaderText="Languages">
      <Content>
        <ScalableTypography color="textSecondary">
          Next, select the languages you are fluent in.
        </ScalableTypography>
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
      <Footer>
        <GoToNextPageButton />
      </Footer>
    </RegistrationSlide>
  );
};
