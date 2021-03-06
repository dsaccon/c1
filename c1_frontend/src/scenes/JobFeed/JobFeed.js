import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Tabs } from "../../components/Tabs/Tabs";
import { Tab } from "../../components/Tabs/Tab";
import { Available } from "./Available";
import { Content } from "../../components/Content/Content";
import { IconFooter } from "../../components/Footer/IconFooter";

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
      <IconFooter />
    </>
  );
};
