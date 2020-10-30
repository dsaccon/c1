import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import ChatIcon from "@material-ui/icons/Chat";
import { Footer } from "./Footer";

const useStyles = makeStyles(({ spacing }) => ({
  iconHolder: {
    display: "flex",
    margin: "auto",
  },
  footerIcon: {
    fontSize: "2rem",
    margin: spacing(0, 2),
  },
}));

export const IconFooter = ({}) => {
  const classes = useStyles();

  return (
    <Footer>
      <div className={classes.iconHolder}>
        <HomeIcon className={classes.footerIcon} color="primary" />
        <PersonIcon className={classes.footerIcon} color="primary" />
        <CardMembershipIcon className={classes.footerIcon} color="primary" />
        <ChatIcon className={classes.footerIcon} color="primary" />
      </div>
    </Footer>
  );
};
