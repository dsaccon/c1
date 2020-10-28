import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BackButton } from "../../components/BackButton/BackButton";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ spacing }) => ({
  subHeader: {
    display: "flex",
    alignItems: "center",
    padding: spacing(1),
  },
  certificationsText: {
    margin: "auto",
  },
}));

export const CertificationSubHeader = ({ backTo }) => {
  const classes = useStyles();

  return (
    <div className={classes.subHeader}>
      <BackButton component={Link} to={backTo} className={classes.backButton} />
      <ScalableTypography sizing="title" className={classes.certificationsText}>
        CERTIFICATIONS
      </ScalableTypography>
    </div>
  );
};
