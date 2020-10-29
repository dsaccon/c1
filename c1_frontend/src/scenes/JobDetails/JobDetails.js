import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components/Header/Header";
import { HeaderDetails } from "../../components/Header/HeaderDetails";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import { Content } from "../../components/Content/Content";
import { ScalableTypography } from "../../components/Typography/ScalableTypography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(({}) => ({}));

export const JobDetails = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Header>
        <HeaderDetails text="Job Details" backTo="/job-feed" />
      </Header>
      <SubHeader centerText={false}>Shipyard Inspection</SubHeader>
      <Content>
        <ScalableTypography color="textSecondary">
          Duluth, Minnesota, USA
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          Shipyards/Marine
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          July 1, 2020
        </ScalableTypography>
        <ScalableTypography color="textSecondary">
          September 3, 2020
        </ScalableTypography>
        <ScalableTypography color="primary">
          28 billable days
        </ScalableTypography>
        <Card elevation={0}>
          <CardContent>
            <ScalableTypography color="textSecondary">
              Requirements
            </ScalableTypography>
            <ScalableTypography color="textSecondary">
              NACE 3 Certification
            </ScalableTypography>
            <ScalableTypography color="textSecondary">
              US Work Authorization
            </ScalableTypography>
          </CardContent>
        </Card>
        <ScalableTypography color="secondary">Description</ScalableTypography>
        <ScalableTypography color="textSecondary">
          All high performance coatings used on our project in Section 09960
          High Performance Coatings, must use an NACE 3 qualified inspector to
          monitor surface preparation and coating application, to include
          keeping of all records.
        </ScalableTypography>
      </Content>
    </>
  );
};
