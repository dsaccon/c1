import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "@material-ui/core";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Header } from "../../components/Header/Header";
import { Subheader } from "../../components/Subheader/Subheader";
import { Link } from "react-router-dom";
import { Content } from "../../components/Content/Content";

const useStyles = makeStyles(({ palette, spacing }) => ({
  or: {
    alignSelf: "center",
  },
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Subheader text="YOUR ACCOUNT" />
      <Content>
        <TextInput fullWidth placeholder="username" />
        <TextInput fullWidth placeholder="password" />
        <Button variant="contained" color="primary" size="large" fullWidth>
          LOG IN
        </Button>
        <ScalableTypography
          className={classes.or}
          sizing="title"
          color="textSecondary"
        >
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
