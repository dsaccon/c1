import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { HeaderDetails } from "../../components/Header/HeaderDetails";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Select } from "../../components/Form/Select";
import { TextInput } from "../../components/Form/TextInput";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ spacing }) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: spacing(2),
  },
}));

export const EnterPhoneNumber = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <HeaderDetails text="SETTINGS" />
      </Header>
      <SubHeader text="Enter Phone Number" centerText={false} />
      <Content centerItems>
        <ScalableTypography sizing="title" color="textSecondary">
          We use your phone number in order to send you notifications on jobs
          and will provide your contact information when you submit a bid,
          including your phone number.
        </ScalableTypography>
        <Select>
          <option value="United States">United States (+1)</option>
        </Select>
        <TextInput />
      </Content>
      <div className={classes.footer}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          fullWidth
          component={Link}
          to="/confirm-phone-number"
        >
          Submit
        </Button>
      </div>
    </>
  );
};
