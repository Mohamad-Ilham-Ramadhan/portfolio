import React, { useState, useEffect, useRef } from "react";
import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavbarMobile from "./NavbarMobile";

import triangleBlue from "../images/triangle-blue.svg";
import trianglePinkSmall from "../images/triangle-pink-small.svg";
import arrowScrollDown from "../images/arrow-scroll-down.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    [theme.breakpoints.up("md")]: {
      paddingTop: 56,
      height: "100vh",
    },
  },
  gridContianer: {
    height: "100%",
  },
  wrapperHello: {
    display: "flex",
    justifyContent: "center",
    // marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  hello: {
    color: "white",
    fontSize: 72,
    fontWeight: 600,
    lineHeight: 1,
    "& .dot": {
      display: "inline-block",
      borderRadius: "50%",
      height: 20,
      width: 20,
      backgroundColor: theme.palette.primary.main,
      marginLeft: 8,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 100,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 171,
      textAlign: "left",
      "& .dot": {
        height: 40,
        width: 40,
      },
    },
  },
  triangles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
    "& .wrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      height: 250,
    },
    "& .MuiTypography-root": {
      color: "white",
      fontSize: 24,
      fontWeight: 300,
      lineHeight: 1.25,
      zIndex: 3,
    },
    "& .triangle-blue": {
      position: "absolute",
      width: "70%",
      zIndex: 2,
      opacity: 0.15,
    },
    "& .triangle-pink": {
      position: "absolute",
      width: 32,
      opacity: 0.25,
      "&.first": {
        left: -14,
        top: 100,
        transform: "rotate(35deg)",
      },
      "&.second": {
        top: 32,
        right: "24%",
        transform: "rotate(45deg)",
      },
      "&.third": {
        right: "20%",
        bottom: 32,
        transform: "rotate(27deg)",
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& .wrapper": {
        height: 300,
      },
      "& .MuiTypography-root": {
        fontSize: 30,
      },
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      "& .wrapper": {
        height: 350,
      },
      "& .triangle-blue": {
        width: "100%",
      },
      "& .MuiTypography-root": {
        fontSize: 36,
      },
      "&.second": {
        top: -31,
        right: "35%",
      },
      "&.third": {
        bottom: 0,
        right: "35%",
      },
    },
  },
  scrollDown: {
    display: "none",
    width: "100%",
    color: "white",

    "& .text": {
      display: "block",
      width: "100%",
      textAlign: "center",
      marginBottom: 16,
      fontWeight: 200,
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      position: "absolute",
      bottom: 22,
      left: 0,
    },
  },
}));

export default function Home() {
  const styles = useStyles();
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <section className={styles.root}>
      {!upMd && <NavbarMobile />}
      <Grid container className={styles.gridContianer}>
        <Grid item xs={12} md={6}>
          <div className={styles.wrapperHello}>
            <Typography className={styles.hello} variant="h1">
              <span>H</span>
              <span>e</span>
              <span>l</span>
              <span>l</span>
              <span>o</span>
              <span className="dot"></span>
              <br />
              <span>I</span>
              <span>&nbsp;</span>
              <span>a</span>
              <span>m</span>
              <br />
              <span>I</span>
              <span>l</span>
              <span>h</span>
              <span>a</span>
              <span>m</span>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.triangles}>
            <div className="wrapper">
              <Typography component="p">
                Front-end web developer.
                <br /> Turn design into code into <br /> great UI fueled by
                coffee.
              </Typography>
              <img className="triangle-blue" src={triangleBlue} alt="" />
              <img
                className="triangle-pink first"
                src={trianglePinkSmall}
                alt=""
              />
              <img
                className="triangle-pink second"
                src={trianglePinkSmall}
                alt=""
              />
              <img
                className="triangle-pink third"
                src={trianglePinkSmall}
                alt=""
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.scrollDown}>
        <span className="text">Scroll down</span>
        <img src={arrowScrollDown} alt="" />
      </div>
    </section>
  );
}
