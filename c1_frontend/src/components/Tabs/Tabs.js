import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette }) => ({
  tabs: {
    backgroundColor: palette.secondary.main,
    display: "flex",
    fontSize: "1.75vh",
    fontWeight: 800,
  },
}));

export const TabContext = React.createContext();

export const Tabs = ({ value, onChange, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.tabs}>
      <TabContext.Provider value={{ selected: value, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};
