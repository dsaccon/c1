import React from "react";
import { makeStyles } from "@material-ui/styles";
import Slide from "../../components/AutoRotatingCarousel/Slide";
import { Content } from "../../components/Content/Content";
import { Header } from "../../components/Header/Header";
import { Subheader } from "../../components/Subheader/Subheader";
import { Footer } from "../../components/Footer/Footer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  slide: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    width: "100%",
  },
  backButton: {
    marginTop: ".55rem",
  },
});

export const RegistrationSlide = ({
  subheaderText,
  media,
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Slide
      classOverrides={{
        backButton: classes.backButton,
      }}
      className={classes.slide}
      backButton
      header={<Header className={classes.header} />}
      media={
        <>
          <Subheader text={subheaderText} />
          <Content>{children}</Content>
          <Footer>
            <Button
              className={classes.button}
              color="primary"
              size="large"
              variant="contained"
              fullWidth
            >
              Next
            </Button>
          </Footer>
        </>
      }
      {...props}
    />
  );
};
