import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles(({ palette, spacing }) => ({
  select: {
    padding: spacing(2),
    backgroundColor: palette.secondary.light,
    color: palette.text.secondary,
    borderRadius: spacing(1),
  },
}));

export const Select = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <NativeSelect className={classes.select} {...props}>
      {children}
    </NativeSelect>
  );
};
