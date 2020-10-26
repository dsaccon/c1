import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Footer } from "../../components/Footer/Footer";
import { GoToNextPageButton } from "./GoToNextPageButton";
import { RegistrationSlide } from "./RegistrationSlide";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({}) => ({}));

export const CertificationsSlide = ({}) => {
  const classes = useStyles();

  return (
    <RegistrationSlide backButton subheaderText="Certifications">
      <Content>
        <ScalableTypography color="textSecondary">
          Tell us what certifications you hold.
        </ScalableTypography>
        <Content centerItems padding={false}>
          <Button variant="contained" fullWidth>
            NACE1
          </Button>
          <Button variant="contained" fullWidth>
            NACE2
          </Button>
          <Button variant="contained" fullWidth>
            NACE3
          </Button>
          <Button variant="contained" fullWidth>
            SSPC
          </Button>
          <Button variant="contained" fullWidth>
            Six Sigma
          </Button>
          <Button variant="contained" fullWidth>
            Cisco
          </Button>
        </Content>
      </Content>
      <Footer>
        <GoToNextPageButton />
      </Footer>
    </RegistrationSlide>
  );
};
