import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { RegistrationSlide } from "./RegistrationSlide";
import { Footer } from "../../components/Footer/Footer";
import { GoToNextPageButton } from "./GoToNextPageButton";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({}) => ({}));

export const YourLocationSlide = ({}) => {
  const classes = useStyles();

  const [active, setActive] = useState(true);

  return (
    <RegistrationSlide backButton={false} subheaderText="YOUR LOCATION">
      <Content>
        <ScalableTypography color="textSecondary">
          To make a CorrosionOne profile, you need to answer a few questions
          about yourself.
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          First tell us where you’re located.
        </ScalableTypography>
        <Content centerItems padding={false}>
          <Button
            onClick={() => setActive(!active)}
            disabled={!active}
            variant="contained"
            fullWidth
          >
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
      </Content>
      <Footer>
        <GoToNextPageButton />
      </Footer>
    </RegistrationSlide>
  );
};
