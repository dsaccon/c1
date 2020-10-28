import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Content } from "../../components/Content/Content";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({}) => ({}));

export const ChooseCertificationType = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <ScalableTypography sizing="title">Certifications</ScalableTypography>
      </Header>
      <Content centerItems>
        <ScalableTypography color="textSecondary">
          Tap on a certification to verify it.
        </ScalableTypography>
        <Button fullWidth variant="contained">
          NACE1
        </Button>
        <Button fullWidth variant="contained">
          FROSIO
        </Button>
        <Button fullWidth variant="contained">
          Six Sigma Black Belt
        </Button>
        <Button fullWidth variant="contained">
          SSPC
        </Button>
        <Button fullWidth variant="contained">
          NACE1
        </Button>
        <Button fullWidth variant="contained">
          NACE2
        </Button>
        <Button fullWidth variant="contained">
          FROSIA-1
        </Button>
      </Content>
    </>
  );
};
