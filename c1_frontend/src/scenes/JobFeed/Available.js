import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Certification } from "./Certification";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { CertificateSingle } from "../../components/Icons/CertificateSingle";

const useStyles = makeStyles(({ palette }) => ({
  noCertifications: {
    backgroundColor: palette.secondary.dark,
  },
  certificateSingle: {
    margin: "auto",
    width: "50%",
    height: "50%",
    maxWidth: "30rem",
    maxHeight: "30rem",
  },
}));

export const Available = ({ certifications }) => {
  const classes = useStyles();

  return (
    <Content
      className={classNames({
        [classes.noCertifications]: certifications.length === 0,
      })}
    >
      {certifications.length > 0 ? (
        certifications.map((certification) => (
          <Certification certification={certification} />
        ))
      ) : (
        <>
          <ScalableTypography sizing="title" color="textPrimary">
            Verify your certifications to access the best jobs
          </ScalableTypography>
          <CertificateSingle className={classes.certificateSingle} />
          <ScalableTypography sizing="small" color="textPrimary">
            Use your hard-earned certifications to impress job posters and score
            high-quality work.
          </ScalableTypography>
          <Button fullWidth color="primary" variant="contained">
            Upload Certifications
          </Button>
        </>
      )}
    </Content>
  );
};
