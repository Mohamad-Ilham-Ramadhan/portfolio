import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import triangleBlue from "../images/triangle-blue.svg";
import trianglePinkSmall from "../images/triangle-pink-small.svg";
import arrowScrollDown from "../images/arrow-scroll-down.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    paddingTop: 56,
    positon: "relative",
  },
  gridContianer: {
    height: "100%",
  },
  hello: {
    color: "white",
    fontSize: 171,
    fontWeight: 600,
    lineHeight: 1,
    "& .dot": {
      display: "inline-block",
      borderRadius: "50%",
      height: 40,
      width: 40,
      backgroundColor: theme.palette.primary.main,
      marginLeft: 8,
    },
  },
  triangles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    "& .wrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      height: 350,
    },
    "& .MuiTypography-root": {
      color: "white",
      fontSize: 36,
      fontWeight: 300,
      lineHeight: 1.25,
      zIndex: 3,
    },
    "& .triangle-blue": {
      position: "absolute",
      zIndex: 2,
      opacity: 0.25,
    },
    "& .triangle-pink": {
      position: "absolute",
      width: 32,
      "&.first": {
        left: -14,
        top: 100,
        transform: "rotate(35deg)",
      },
      "&.second": {
        top: -31,
        right: "35%",
        transform: "rotate(45deg)",
      },
      "&.third": {
        bottom: 0,
        right: "35%",
        transform: "rotate(27deg)",
      },
    },
  },
  scrollDown: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    position: "absolute",
    bottom: 22,
    left: 0,
    width: "100%",
    color: "white",

    "& .text": {
      display: "block",
      width: "100%",
      textAlign: "center",
      marginBottom: 16,
      fontWeight: 200,
    },
  },
}));

export default function Home() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <Grid container className={styles.gridContianer}>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
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
