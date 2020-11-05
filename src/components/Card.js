import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import LinChartContainer from "../charts/LineChartContainer";
import BarChartContainer from "../charts/BarChartContainer";
import OtherDetails from "./otherDetails";
import John from "../images/john-doe.jpg";
import data from "../data";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  let barChart = props.users.moreInformation["barChart"];
  let lineChart = props.users.moreInformation["lineChart"];
  return (
    <Card className={classes.root}>
      <CardContent>
        <div style={{ display: "flex" }}>
          <Avatar src={John}></Avatar>
          <div style={{ display: "grid", marginLeft: "10px" }}>
            <span style={{ fontSize: "x-large" }}>{props.users.name}</span>
            <span style={{ color: props.mainPrimaryColor }}>
              {props.users.location}
            </span>
          </div>
        </div>

        <OtherDetails mainPrimaryColor={props.mainPrimaryColor} />
        <hr className="horizontal-line"></hr>
        <BarChartContainer barChart={barChart} />
        <hr className="horizontal-line"></hr>
        <div>
          <span style={{ color: props.mainPrimaryColor }}>
            Latest Activity :{" "}
          </span>
          <span>68(-4), The Shire UK</span>
        </div>
        <hr className="horizontal-line"></hr>

        <LinChartContainer lineChart={lineChart} />
      </CardContent>
    </Card>
  );
}
