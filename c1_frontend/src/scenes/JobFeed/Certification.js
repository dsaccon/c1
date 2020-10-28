import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({ palette }) => ({
  certificate: {
    backgroundColor: palette.secondary.light,
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  },
}));

export const Certification = ({ certification }) => {
  const classes = useStyles();
  const { name, location, startDate, endDate, type } = certification;

  return (
    <Content className={classes.certificate}>
      <ScalableTypography color="textSecondary">{name}</ScalableTypography>
      <ScalableTypography color="textPrimary">{location}</ScalableTypography>
      <ScalableTypography color="textSecondary">
        {startDate} - {endDate}
      </ScalableTypography>
      <ScalableTypography color="textSecondary">{type}</ScalableTypography>
      <Button
        className={classes.button}
        fullWidth
        variant="contained"
        color="primary"
      >
        Read More and Submit Bid
      </Button>
    </Content>
  );
};
