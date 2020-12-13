import React from "react";
import { CorrosionOne } from "../Icons/CorrosionOne";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";
import { GoogleLogout } from "../Auth/GoogleLogout";
import { AuthContext } from "../Auth/auth";
import { FacebookLogout } from "../Auth/FacebookLogout";

const useStyles = makeStyles(({ palette, spacing }) => ({
  header: {
    backgroundColor: palette.secondary.dark,
    display: "flex",
    flexDirection: "column",
  },
  corrosionOne: {
    alignSelf: "center",
  },
}));

export const Header = ({ backButton, className, children, ...props }) => {
  const classes = useStyles();

  return (
    <AuthContext.Consumer>
      {({ authResponse, authType }) => {
        console.log("AUTH TYPE: ", authType);
        return (
          <div className={classNames(classes.header, className)} {...props}>
            {backButton}
            <CorrosionOne className={classes.corrosionOne} />
            {children}
            {authType === "GOOGLE" && <GoogleLogout />}
            {authType === "FACEBOOK" && <FacebookLogout />}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};
