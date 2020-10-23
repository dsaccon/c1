import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "@material-ui/core";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Header } from "../../components/Header/Header";
import { Subheader } from "../../components/Subheader/Subheader";

const useStyles = makeStyles(({ palette, spacing }) => ({
  formContent: {
    display: "flex",
    flexDirection: "column",
    padding: "10%",
    flexGrow: 1,
    "& > *": {
      marginBottom: spacing(3),
    },
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: palette.secondary.light,
    color: palette.secondary.dark,
  },
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Subheader text="YOUR ACCOUNT" />
      <div className={classes.formContent}>
        <TextInput fullWidth placeholder="username" />
        <TextInput fullWidth placeholder="password" />
        <Button variant="contained" color="primary" size="large" fullWidth>
          LOG IN
        </Button>
        <ScalableTypography sizing="title" color="textSecondary">
          OR
        </ScalableTypography>
        <Button
          className={classes.signUpButton}
          variant="contained"
          size="large"
          fullWidth
        >
          Sign up with Google
        </Button>
      </div>
    </>
  );
};
