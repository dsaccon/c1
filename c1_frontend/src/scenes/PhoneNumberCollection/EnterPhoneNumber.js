import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { HeaderDetails } from "../../components/Header/HeaderDetails";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import MailIcon from "@material-ui/icons/Mail";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Divider } from "../../components/Divider/Divider";
import { IconFooter } from "../../components/Footer/IconFooter";

const useStyles = makeStyles(({}) => ({}));

export const EnterPhoneNumber = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <HeaderDetails text="SETTINGS" />
      </Header>
      <SubHeader text="Enter Phone Number" centerText={false} />
      <Content centerItems>
        <ScalableTypography sizing="title" color="secondary">
          We use your phone number in order to send you notifications on jobs
          and will provide your contact information when you submit a bid,
          including your phone number.
        </ScalableTypography>
      </Content>
      <IconFooter />
    </>
  );
};
