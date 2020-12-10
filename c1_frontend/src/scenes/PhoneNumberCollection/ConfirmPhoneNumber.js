import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { HeaderDetails } from "../../components/Header/HeaderDetails";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
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

export const ConfirmPhoneNumber = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <HeaderDetails backTo="/enter-phone-number" text="SETTINGS" />
      </Header>
      <SubHeader text="Confirm Phone Number" centerText={false} />
      <Content centerItems>
        <ScalableTypography sizing="title" color="textSecondary">
          We’ve sent you a text message with a four digit confirmation code.
          Please enter that number below
        </ScalableTypography>
        <TextInput />
        <ScalableTypography sizing="title" color="error">
          Not working? Click here to send us a message!
        </ScalableTypography>
      </Content>
      <div className={classes.footer}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          fullWidth
          component={Link}
          to="/successfully-confirmed-phone-number"
        >
          Submit
        </Button>
      </div>
    </>
  );
};
