import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import ChatIcon from "@material-ui/icons/Chat";
import { Tabs } from "../../components/Tabs/Tabs";
import { Tab } from "../../components/Tabs/Tab";
import { Available } from "./Available";
import { Content } from "../../components/Content/Content";

const useStyles = makeStyles(({ palette, spacing }) => ({
  subHeader: {
    display: "flex",
    alignItems: "center",
    margin: spacing(1),
    justifyContent: "center",
  },
  icon: {
    marginRight: spacing(1),
  },
  tabs: {
    backgroundColor: palette.secondary.main,
    "& .Mui-selected": {
      backgroundColor: palette.primary.main,
    },
  },
  indicator: {
    backgroundColor: palette.primary.main,
  },
  tab: {
    fontSize: "1.75vh",
    fontWeight: 800,
    flexGrow: 1,
  },
  iconHolder: {
    display: "flex",
    margin: "auto",
  },
  footerIcon: {
    fontSize: "2rem",
    margin: spacing(0, 2),
  },
}));

export const JobFeed = ({}) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState("Available");

  const CERTIFICATIONS = [
    // {
    //   location: 'Duluth, Minnesota USA',
    //   startDate: 'July 1, 2020',
    //   endDate: 'September 3, 2020',
    //   type: 'NACE 3 Certification'
    // },
    // {
    //   location: 'Duluth, Minnesota USA',
    //   startDate: 'July 1, 2020',
    //   endDate: 'September 3, 2020',
    //   type: 'NACE 3 Certification'
    // },
    // {
    //   location: 'Duluth, Minnesota USA',
    //   startDate: 'July 1, 2020',
    //   endDate: 'September 3, 2020',
    //   type: 'NACE 3 Certification'
    // },
  ];

  return (
    <>
      <Header>
        <div className={classes.subHeader}>
          <AccountCircleIcon className={classes.icon} color="primary" />
          <ScalableTypography sizing="title">Your Job Feed</ScalableTypography>
        </div>
      </Header>
      <Tabs value={tabValue} onChange={setTabValue}>
        <Tab value="Available" />
        <Tab value="Upcoming" />
        <Tab value="History" />
      </Tabs>
      {tabValue === "Available" && (
        <Available certifications={CERTIFICATIONS} />
      )}
      {tabValue === "Upcoming" && <Content />}
      {tabValue === "History" && <Content />}
      <Footer>
        <div className={classes.iconHolder}>
          <HomeIcon className={classes.footerIcon} color="primary" />
          <PersonIcon className={classes.footerIcon} color="primary" />
          <CardMembershipIcon className={classes.footerIcon} color="primary" />
          <ChatIcon className={classes.footerIcon} color="primary" />
        </div>
      </Footer>
    </>
  );
};
