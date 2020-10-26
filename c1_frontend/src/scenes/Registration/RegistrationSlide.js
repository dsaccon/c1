import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Content } from "../../components/Content/Content";
import { Header } from "../../components/Header/Header";
import { Subheader } from "../../components/Subheader/Subheader";
import { CarouselBackButton } from "../../components/AutoRotatingCarousel/CarouselBackButton";
import classNames from "classnames";

const useStyles = makeStyles({
  content: {
    height: "100vh",
  },
});

export const RegistrationSlide = ({
  className,
  subheaderText,
  media,
  children,
  backButton,
  ...props
}) => {
  const classes = useStyles();
  // const button = backButton ? <CarouselBackButton /> : null;

  return (
    <Content
      className={classNames(classes.content, className)}
      padding={false}
      autoSpacing={false}
      {...props}
    >
      <Header backButton={<div />} />
      <Subheader text={subheaderText} />
      {children}
    </Content>
  );
};
