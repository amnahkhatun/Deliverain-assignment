import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function index(props) {
  return (
    <div className="other-details">
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ color: props.mainPrimaryColor }}>Quality</div>
          <div>80</div>
        </div>
        <CircularProgress
          variant="static"
          color="secondary"
          value={75}
          size={30}
          style={{ padding: "6px 4px 2px 5px" }}
        />
      </div>
      <div className="vertical-line"></div>
      <div>
        <div style={{ color: props.mainPrimaryColor }}>Handicap</div>
        <div>PRO</div>
      </div>
      <div className="vertical-line"></div>
      <div>
        <div style={{ color: props.mainPrimaryColor }}>SG TOTAL</div>
        <div>4.14</div>
      </div>
    </div>
  );
}
