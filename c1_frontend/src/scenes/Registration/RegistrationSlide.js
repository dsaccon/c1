import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Content } from "../../components/Content/Content";
import { Header } from "../../components/Header/Header";
import { SubHeader } from "../../components/SubHeader/SubHeader";
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

  return (
    <Content
      className={classNames(classes.content, className)}
      padding={false}
      autoSpacing={false}
      {...props}
    >
      <Header backButton={backButton} />
      <SubHeader text={subheaderText} />
      {children}
    </Content>
  );
};
