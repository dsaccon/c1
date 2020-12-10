import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { HeaderDetails } from "../../components/Header/HeaderDetails";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { IconFooter } from "../../components/Footer/IconFooter";
import { JobAcceptedSvg } from "../../components/Icons/JobAcceptedSvg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ palette }) => ({
  content: {
    backgroundColor: palette.secondary.dark,
  },
  jobAccepted: {
    width: "100%",
    height: "75%",
    maxWidth: "30rem",
    maxHeight: "24rem",
  },
}));

export const BidSubmissionSuccess = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <HeaderDetails>Submit Bid</HeaderDetails>
      </Header>
      <SubHeader text="Bid Submitted" centerText={false} />
      <Content centerItems className={classes.content}>
        <ScalableTypography sizing="title">
          Congrats Your Bid for JOBTITLE has been submitted!
        </ScalableTypography>
        <JobAcceptedSvg className={classes.jobAccepted} />
        <ScalableTypography>
          A confirmation email has been sent to EMAIL.
        </ScalableTypography>
      </Content>
      <div className={classes.footer}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          fullWidth
          component={Link}
          to="/bid-submission-success"
        >
          Submit Bid
        </Button>
      </div>
    </>
  );
};
