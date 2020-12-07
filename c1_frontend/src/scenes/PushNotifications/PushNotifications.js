import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { FindJobsSvg } from "../../components/Icons/FindJobsSvg";
import { Footer } from "../../components/Footer/Footer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({ palette }) => ({
  content: {
    backgroundColor: palette.secondary.dark,
  },
  findJobs: {
    width: "100%",
    height: "50%",
    maxWidth: "30rem",
    maxHeight: "30rem",
    margin: "auto",
  },
  button: {
    margin: "auto",
  },
}));

export const PushNotifications = ({}) => {
  const classes = useStyles();

  return (
    <Content className={classes.content} padding={false} autoSpacing={false}>
      <Header />
      <SubHeader text="Notifications" />
      <Content centerItems>
        <ScalableTypography sizing="title">Did you know?</ScalableTypography>
        <ScalableTypography>
          Applicants who respond faster get the job more often.
        </ScalableTypography>
        <ScalableTypography>
          We'll let you know about new jobs in your area as they appear!
        </ScalableTypography>
      </Content>
      <FindJobsSvg className={classes.findJobs} />
      <Footer>
        <Button
          className={classes.button}
          size="large"
          color="primary"
          variant="contained"
          fullWidth
          component={Link}
          to="/job-feed"
        >
          Allow Push Notifications
        </Button>
      </Footer>
    </Content>
  );
};
