import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { CertificationSubHeader } from "./CertificationSubHeader";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Footer } from "../../components/Footer/Footer";
import Button from "@material-ui/core/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ spacing }) => ({
  button: {
    marginBottom: spacing(2),
  },
  tryAgain: {
    display: "flex",
  },
  photoCameraIcon: {
    marginRight: spacing(1),
  },
  link: {},
}));

export const PhotoPreviewCertification = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <CertificationSubHeader backTo="/take-photo-certification" />
      </Header>
      <SubHeader text="<<Cert Name>>" />
      <Content centerItems>
        <ScalableTypography color="textSecondary">
          Please confirm that this image captures your name, certification name,
          and certification expiration date.
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          PHOTO HERE
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          When you tap submit, your photo will immediately be passed on for our
          approval process. You will receive an email at EMAILHERE when it is
          accepted or denied.
        </ScalableTypography>
      </Content>
      <Footer>
        <Button
          component={Link}
          to="/job-feed"
          className={classes.button}
          fullWidth
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
        <Link to="/take-photo-certification" className={classes.link}>
          <div className={classes.tryAgain}>
            <PhotoCameraIcon
              className={classes.photoCameraIcon}
              color="error"
            />
            <ScalableTypography>Try Again</ScalableTypography>
          </div>
        </Link>
      </Footer>
    </>
  );
};
