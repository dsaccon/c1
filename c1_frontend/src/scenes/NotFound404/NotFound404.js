import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({}) => ({}));

export const NotFound404 = () => {
  const classes = useStyles();
  console.log("NOT FOUND 404");

  return <div style={{ color: "red" }}>404 Not Found</div>;
};
