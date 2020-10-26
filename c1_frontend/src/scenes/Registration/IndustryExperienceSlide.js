import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Footer } from "../../components/Footer/Footer";
import { RegistrationSlide } from "./RegistrationSlide";
import Button from "@material-ui/core/Button";
import { GoToPreviousPageButton } from "../../components/ControlledSwipeableView/GoToPreviousPageButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    margin: "auto",
  },
});

export const IndustryExperienceSlide = ({}) => {
  const classes = useStyles();

  return (
    <RegistrationSlide
      backButton={<GoToPreviousPageButton />}
      subheaderText="Industry Experience"
    >
      <Content>
        <ScalableTypography color="textSecondary">
          Select the industries you are experienced in.
        </ScalableTypography>
        <Content centerItems padding={false}>
          <Button variant="contained" fullWidth>
            Marine
          </Button>
          <Button variant="contained" fullWidth>
            Deep Water
          </Button>
          <Button variant="contained" fullWidth>
            Pipelines
          </Button>
          <Button variant="contained" fullWidth>
            Terminals
          </Button>
          <Button variant="contained" fullWidth>
            Petroleum
          </Button>
          <Button variant="contained" fullWidth>
            Food & Beverages
          </Button>
        </Content>
      </Content>
      <Footer>
        <Button
          fullWidth
          className={classes.button}
          variant="contained"
          component={Link}
          to="/push-notifications"
          color="primary"
        >
          Submit
        </Button>
      </Footer>
    </RegistrationSlide>
  );
};
