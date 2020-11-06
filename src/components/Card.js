import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import LinChartContainer from "../charts/LineChartContainer";
import BarChartContainer from "../charts/BarChartContainer";
import OtherDetails from "./otherDetails";
import John from "../images/john-doe.jpg";

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
// Download PNG
// let handleSaveClick = () => {
//   domtoimage
//     .toBlob(document.getElementById("node-to-convert"))
//     .then(function(blob) {
//       fileDownload(blob, "dom-to-image.png");
//     });
// };
export default function SimpleCard(props) {
  const classes = useStyles();
  let barChart = props.users.moreInformation["barChart"];
  let lineChart = props.users.moreInformation["lineChart"];
  const otherDetails = props.users.otherDetails;
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

        <OtherDetails
          mainPrimaryColor={props.mainPrimaryColor}
          otherDetails={otherDetails}
        />
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
        <div id="node-to-convert">
          <LinChartContainer lineChart={lineChart} />
        </div>

        {/* <button onClick={handleSaveClick} className="download-button">
          Download PNG
        </button> */}
      </CardContent>
    </Card>
  );
}
