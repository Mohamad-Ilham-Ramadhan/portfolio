import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, darken, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CSSTransition } from "react-transition-group";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Heading from "./Heading";
// images
import htmlImg from "../images/html.svg";
import cssImg from "../images/css.svg";
import javascriptImg from "../images/javascript.svg";
import sassImg from "../images/sass.svg";
import reactImg from "../images/react.svg";
import reduxImg from "../images/redux.svg";
import materialUIImg from "../images/material-ui.svg";
import bootstrapImg from "../images/bootstrap.svg";
import animejsImg from "../images/animejs.svg";
import terminalImg from "../images/terminal.svg";
import webpackImg from "../images/webpack.svg";
import gitImg from "../images/git-logo.svg";
import npmImg from "../images/npm.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    padding: [40, 32],
    overflow: "scroll",
    [theme.breakpoints.up("md")]: {
      padding: 40,
    },
    [theme.breakpoints.up("mlg")]: {
      padding: [80, 100, 0, 100],
    },
    "& .heading": {
      marginBottom: 72,
      paddingRight: 40,
      [theme.breakpoints.up("sm")]: {},
    },
    "& .close": {
      position: "absolute",
      top: 30,
      right: 30,
      backgroundColor: theme.palette.neutral.darkBlueGrayish,
      color: "white",
      [theme.breakpoints.up("md")]: {
        top: 67,
        right: 60,
      },
      [theme.breakpoints.up("lg")]: {
        top: 80,
        right: 100,
      },
    },
    "& .powers-wrapper": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      [theme.breakpoints.up("lg")]: {
        justifyContent: "center",
      },
    },
  },
  power: {
    width: 80,
    height: 80,
    backgroundColor: theme.palette.neutral.darkBlueGrayish,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    margin: 16,
    position: "relative",
    transition: "300ms",
    [theme.breakpoints.up("md")]: {
      width: 160,
      height: 160,
    },
    "& img": {
      width: 40,
      [theme.breakpoints.up("md")]: {
        width: 80,
      },
    },
    "& .power-name": {
      fontSize: 28,
      fontWeight: 700,
      position: "absolute",
      zIndex: 10,
      width: "max-content",
      opacity: 0,
      transition: "300ms",
      [theme.breakpoints.up("md")]: {
        fontSize: 56,
      },
    },
    "&:hover": {
      backgroundColor: darken(theme.palette.neutral.darkBlueGrayish, 0.5),
      "& img": {
        filter: "brightness(.5)",
      },
      "& .power-name": {
        opacity: 1,
      },
    },
  },

  animation: {
    "&-enter": {
      opacity: 0,
    },
    "&-enter-active": {
      opacity: 1,
      transition: "opacity 300ms",
    },
    "&-exit": {
      opacity: 1,
    },
    "&-exit-active": {
      opacity: 0,
      transition: "opacity 300ms",
    },
  },
}));

const fundamentalImgs = [
  { img: htmlImg, name: "HTML5" },
  { img: cssImg, name: "CSS3" },
  { img: javascriptImg, name: "JavaScript" },
  { img: sassImg, width: 100, mobileWidth: 55, name: "Sass" },
];
const frameworkImgs = [
  { img: reactImg, width: 100, mobileWidth: 50, name: "React" },
  { img: reduxImg, name: "Redux" },
  { img: bootstrapImg, name: "Bootstrap" },
  { img: materialUIImg, name: "Material-UI" },
  { img: animejsImg, width: 100, mobileWidth: 60, name: "Animejs" },
];
const toolImgs = [
  { img: gitImg, name: "Git" },
  { img: webpackImg, name: "Webpack" },
  { img: terminalImg, name: "Terminal" },
  { img: npmImg, name: "NPM" },
];

function renderPowers(imgs, styles, isMobile) {
  return (
    <>
      {imgs.map((item) => (
        <div className={styles.power}>
          <img
            src={item.img}
            alt={item.name}
            style={{ width: isMobile ? item.mobileWidth : item.width }}
          />
          <div className="power-name">{item.name}</div>
        </div>
      ))}
    </>
  );
}
export default function PowersDetail({
  className,
  open,
  onClose,
  heading,
  type,
}) {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <CSSTransition
        in={open}
        timeout={300}
        classNames={styles.animation}
        unmountOnExit
      >
        <div className={styles.root}>
          <Heading className="heading">
            {type == "fundamentals" && "Fundamentals"}
            {type == "frameworks" && "Frameworks & Libraries"}
            {type == "tools" && "Tools"}
          </Heading>
          <IconButton onClick={onClose} className="close">
            <CloseIcon />
          </IconButton>

          <div className="powers-wrapper">
            {type == "fundamentals" &&
              renderPowers(fundamentalImgs, styles, isMobile)}
            {type == "frameworks" &&
              renderPowers(frameworkImgs, styles, isMobile)}
            {type == "tools" && renderPowers(toolImgs, styles, isMobile)}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
