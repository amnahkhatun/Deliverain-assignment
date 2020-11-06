import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./style.css";

import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import data from "../data";
import Loading from "./Loading";

const useStyles = makeStyles(theme => ({}));

export default function Index() {
  const [darkState, setDarkState] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? "#A3ABB2" : "#46555F";
  const mainSecondaryColor = darkState ? "#A3ABB2" : "#46555F";

  useEffect(() => {
    setTimeout(() => setisLoading(false), 1000);
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primaryText: {
        main: mainPrimaryColor
      },
      secondaryText: {
        main: mainSecondaryColor
      }
    }
  });
  const classes = useStyles();
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MuiThemeProvider theme={darkTheme}>
            <div>
              <Switch checked={darkState} onChange={handleThemeChange} />
            </div>

            {data.map(item => (
              <div className="card-box">
                <Card mainPrimaryColor={mainPrimaryColor} users={item} />
              </div>
            ))}
          </MuiThemeProvider>
        </>
      )}
    </>
  );
}
