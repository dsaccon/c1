import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "@material-ui/core";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { CorrosionOne } from "../../components/Icons/CorrosionOne";

const useStyles = makeStyles(({ palette, spacing }) => ({
  corrosionOne: {
    padding: spacing(2, 0),
  },
  header: {
    backgroundColor: palette.secondary.dark,
    textAlign: "center",
  },
  subHeader: {
    backgroundColor: palette.secondary.main,
    textAlign: "center",
    padding: spacing(1),
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    padding: spacing(4),
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
      <div className={classes.header}>
        <CorrosionOne className={classes.corrosionOne} />
      </div>
      <div className={classes.subHeader}>
        <ScalableTypography sizing="title">YOUR ACCOUNT</ScalableTypography>
      </div>
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
