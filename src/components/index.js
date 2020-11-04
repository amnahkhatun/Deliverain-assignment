import React, { useState } from "react";
import Card from "./Card";
import "./style.css";

import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({}));

export default function Index() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? "#A3ABB2" : "#46555F";
  const mainSecondaryColor = darkState ? "#A3ABB2" : "#46555F";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  const classes = useStyles();
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
    <MuiThemeProvider theme={darkTheme}>
      <div className="card-box">
        <Switch checked={darkState} onChange={handleThemeChange} />
        <Card mainPrimaryColor={mainPrimaryColor} />
      </div>
    </MuiThemeProvider>
  );
}
