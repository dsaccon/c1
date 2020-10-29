import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Footer } from "../../components/Footer/Footer";
import Button from "@material-ui/core/Button";
import { HandCertificate } from "../../components/Icons/HandCertificate";
import { Link } from "react-router-dom";
import { HeaderDetails } from "../../components/Header/HeaderDetails";

const useStyles = makeStyles(({ palette, spacing }) => ({
  content: {
    backgroundColor: palette.secondary.dark,
  },
  button: {
    marginBottom: spacing(2),
  },
  handCertificate: {
    marginTop: "auto",
    marginBottom: 0,
    height: "66%",
    width: "66%",
    maxHeight: "30rem",
    maxWidth: "30rem",
  },
}));

export const TakePhotoCertification = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <HeaderDetails
          text="Certifications"
          backTo="/choose-certification-type"
        />
      </Header>
      <SubHeader text="<<Cert Name>>" />
      <Content className={classes.content} centerItems>
        <ScalableTypography>
          Please take a photo of your CERTNAME certification card or
          certificate. You can also take a photo of a website on a screen. The
          image must show your certification number and expiration date.
        </ScalableTypography>
        <HandCertificate className={classes.handCertificate} />
      </Content>
      <Footer>
        <Button
          component={Link}
          to="/photo-preview-certification"
          className={classes.button}
          fullWidth
          color="primary"
          variant="contained"
        >
          OPEN CAMERA
        </Button>
        <ScalableTypography>
          We will retain confirmation of certifications in accordance with our
          Privacy Policy and will not share them without your prior consent.
        </ScalableTypography>
      </Footer>
    </>
  );
};
