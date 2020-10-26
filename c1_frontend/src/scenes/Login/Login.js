import React from "react";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "@material-ui/core";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Header } from "../../components/Header/Header";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Link } from "react-router-dom";
import { Content } from "../../components/Content/Content";

export const Login = () => {
  return (
    <>
      <Header />
      <SubHeader text="YOUR ACCOUNT" />
      <Content centerItems>
        <TextInput fullWidth placeholder="username" />
        <TextInput fullWidth placeholder="password" />
        <Button
          component={Link}
          to="/push-notifications"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          LOG IN
        </Button>
        <ScalableTypography sizing="title" color="textSecondary">
          OR
        </ScalableTypography>
        <Button
          variant="contained"
          size="large"
          fullWidth
          to="/registration"
          component={Link}
        >
          Sign up with Google
        </Button>
      </Content>
      >
    </>
  );
};
