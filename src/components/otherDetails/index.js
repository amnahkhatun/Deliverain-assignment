import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function index(props) {
  return (
    <div className="other-details">
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ color: props.mainPrimaryColor }}>
            {Object.keys(props.otherDetails)[0]}
          </div>
          <div>{Object.values(props.otherDetails)[0]}</div>
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
        <div style={{ color: props.mainPrimaryColor }}>
          {Object.keys(props.otherDetails)[1]}
        </div>
        <div>{Object.values(props.otherDetails)[1]}</div>
      </div>
      <div className="vertical-line"></div>
      <div>
        <div style={{ color: props.mainPrimaryColor }}>
          {Object.keys(props.otherDetails)[2]}
        </div>
        <div>{Object.values(props.otherDetails)[2]}</div>
      </div>
    </div>
  );
}
