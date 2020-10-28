import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ palette }) => ({
  required: {
    color: palette.error.main,
  },
  pending: {
    color: palette.warning.main,
  },
  buttonText: {
    textAlign: "center",
  },
}));

export const Certification = ({ certification }) => {
  const classes = useStyles();
  const { name, status } = certification;

  return (
    <Button
      fullWidth
      variant="contained"
      component={Link}
      to="/take-photo-certification"
    >
      <div className={classes.buttonText}>
        <div>{name}</div>
        {status === "Required" && (
          <div className={classes.required}>
            Proof of certification required
          </div>
        )}
        {status === "Pending" && <div className={classes.pending}>Pending</div>}
      </div>
    </Button>
  );
};
