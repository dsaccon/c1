import InputBase from "@material-ui/core/InputBase";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(({ palette }) => ({
  textInput: {
    backgroundColor: "rgba(41, 109, 142, 0.2)",
    borderRadius: "10px",
    padding: ".75rem",
    color: palette.text.secondary,
  },
}));

export const TextInput = ({ ...props }) => {
  const classes = useStyles();

  return <InputBase className={classes.textInput} {...props} />;
};
