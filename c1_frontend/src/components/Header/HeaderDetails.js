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

export const HeaderDetails = ({ backTo, text }) => {
  const classes = useStyles();

  return (
    <div className={classes.subHeader}>
      {backTo && (
        <BackButton
          component={Link}
          to={backTo}
          className={classes.backButton}
        />
      )}
      <ScalableTypography sizing="title" className={classes.certificationsText}>
        {text}
      </ScalableTypography>
    </div>
  );
};
