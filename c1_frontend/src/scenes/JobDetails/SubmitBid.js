import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { HeaderDetails } from "../../components/Header/HeaderDetails";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import { Select } from "../../components/Form/Select";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ palette, spacing }) => ({
  textContainer: {
    display: "flex",
    alignItems: "center",
  },
  cost: {
    backgroundColor: palette.primary.main,
    marginRight: spacing(1),
    borderRadius: spacing(1),
    padding: spacing(0.5),
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: spacing(2),
  },
}));

export const SubmitBid = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <HeaderDetails text="SUBMIT BID" backTo="/job-details" />
      </Header>
      <SubHeader text="Shipyard Inspections" centerText={false} />
      <Content>
        <ScalableTypography color="textSecondary">
          Price Per Day
        </ScalableTypography>
        <div className={classes.textContainer}>
          <ScalableTypography sizing="header" className={classes.cost}>
            $1200.00
          </ScalableTypography>
          <ScalableTypography sizing="header" color="secondary">
            USD
          </ScalableTypography>
        </div>
        <ScalableTypography color="secondary">
          Professional Indemnity Insurance
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          If you have professional indemnity insurance, please select amount:
        </ScalableTypography>
        <ScalableTypography color="secondary">
          Confirm Availablity
        </ScalableTypography>
        <Select>
          <option value="no-insurance">No Insurance Carried</option>
        </Select>
        <ScalableTypography color="textSecondary">
          Duluth, Minnesota, USA
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          July 1, 2020
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          September 3, 2020
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          By submitting this bid, I certify that I am able to work at the
          location and dates shown above.
        </ScalableTypography>
      </Content>
      <div className={classes.footer}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          fullWidth
          component={Link}
          to="/bid-submission-success"
        >
          Submit Bid
        </Button>
      </div>
    </>
  );
};
