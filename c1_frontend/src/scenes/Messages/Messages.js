import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Header } from "../../components/Header/Header";
import { HeaderDetails } from "../../components/Header/HeaderDetails";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { IconFooter } from "../../components/Footer/IconFooter";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Divider } from "../../components/Divider/Divider";

const useStyles = makeStyles(({ spacing }) => ({
  noMailIcon: {
    fontSize: "10rem",
  },
  mailIcon: {
    marginRight: spacing(1),
  },
  textHolder: {
    display: "flex",
  },
  date: {
    marginLeft: "auto",
  },
}));

export const Messages = ({}) => {
  const classes = useStyles();
  const MESSAGES = [
    {
      title: "Shipyard Inspection",
      opened: true,
      date: "August 23",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...",
    },
    {
      title: "Powerplant Inspector",
      opened: false,
      date: "July 30",
      text:
        "Yeah, the start date is the 23rd of September. We can’t do any earlier!",
    },
  ];

  return (
    <>
      <Header>
        <HeaderDetails backTo="/job-feed" text="MESSAGES" />
      </Header>
      <SubHeader text="Your Inbox" centerText={false} />
      <Content centerItems>
        {MESSAGES.length === 0 ? (
          <>
            <ScalableTypography sizing="title" color="secondary">
              No Messages!
            </ScalableTypography>
            <MailIcon color="primary" className={classes.noMailIcon} />
            <ScalableTypography color="secondary">
              CorrosionOne is home to innovative coatings experts and employers.
            </ScalableTypography>
            <ScalableTypography color="secondary">
              No Reach out to other inspectors using our search function, or
              submit a proposal on a job posting!
            </ScalableTypography>
          </>
        ) : (
          MESSAGES.map((message) => (
            <>
              <div>
                <div className={classes.textHolder}>
                  {message.opened ? (
                    <DraftsIcon className={classes.mailIcon} color="primary" />
                  ) : (
                    <MailIcon className={classes.mailIcon} color="secondary" />
                  )}
                  <ScalableTypography sizing="title" color="secondary">
                    {message.title}
                  </ScalableTypography>
                  <ScalableTypography
                    className={classes.date}
                    sizing="title"
                    color="secondary"
                  >
                    {message.date}
                  </ScalableTypography>
                </div>
                <ScalableTypography color="textSecondary">
                  {message.text}
                </ScalableTypography>
              </div>
              <Divider />
            </>
          ))
        )}
      </Content>
      <IconFooter />
    </>
  );
};
