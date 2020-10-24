import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Footer } from "../../components/Footer/Footer";
import { RegistrationSlide } from "./RegistrationSlide";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    margin: "auto",
  },
});

export const IndustryExperienceSlide = ({}) => {
  const classes = useStyles();

  return (
    <RegistrationSlide backButton subheaderText="Languages">
      <Content>
        <ScalableTypography color="textSecondary">
          Select the industries you are experienced in.
        </ScalableTypography>
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
      <Footer>
        <Button
          fullWidth
          className={classes.button}
          variant="contained"
          onClick={() => console.log("GO TO THING TODO")}
          color="primary"
        >
          NEXT
        </Button>
      </Footer>
    </RegistrationSlide>
  );
};
