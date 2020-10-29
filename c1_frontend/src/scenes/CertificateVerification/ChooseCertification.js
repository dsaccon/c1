import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import { Content } from "../../components/Content/Content";
import { Certification } from "./Certification";
import { HeaderDetails } from "../../components/Header/HeaderDetails";

const useStyles = makeStyles(({ spacing }) => ({
  subHeader: {
    display: "flex",
    alignItems: "center",
    padding: spacing(1),
  },
  certificationsText: {
    margin: "auto",
  },
}));

export const ChooseCertification = () => {
  const classes = useStyles();
  const CERTIFICATONS = [
    {
      name: "NACE1",
    },
    {
      name: "FROSIO",
      status: "Required",
    },
    {
      name: "Six Sigma Black Belt",
      status: "Pending",
    },
  ];

  return (
    <>
      <Header>
        <HeaderDetails text="Certifications" backTo="/job-feed" />
      </Header>
      <Content centerItems>
        <ScalableTypography color="textSecondary">
          Tap on a certification to verify it.
        </ScalableTypography>
        {CERTIFICATONS.map((certification) => (
          <Certification certification={certification} />
        ))}
      </Content>
    </>
  );
};
