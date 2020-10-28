import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TabContext } from "./Tabs";
import classNames from "classnames";

const useStyles = makeStyles(({ palette, spacing }) => ({
  active: {
    backgroundColor: palette.primary.main,
  },
  tab: {
    flexGrow: 1,
    textAlign: "center",
    padding: spacing(1.5),
  },
}));

export const Tab = ({ value }) => {
  const classes = useStyles();

  return (
    <TabContext.Consumer>
      {({ selected, onChange }) => (
        <div
          className={classNames(classes.tab, {
            [classes.active]: selected === value,
          })}
          onClick={() => onChange(value)}
        >
          {value}
        </div>
      )}
    </TabContext.Consumer>
  );
};
