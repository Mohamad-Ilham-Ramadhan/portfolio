import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, darken } from "@material-ui/core/styles";
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
    height: "100vh",
    backgroundColor: "black",
    padding: [80, 100, 0, 100],
    "& .heading": {
      marginBottom: 72,
    },
    "& .close": {
      position: "absolute",
      top: 80,
      right: 100,
      backgroundColor: theme.palette.neutral.powerBG,
      color: "white",
    },
    "& .powers-wrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  power: {
    width: 160,
    height: 160,
    backgroundColor: theme.palette.neutral.powerBG,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    margin: 16,
    position: "relative",
    transition: "300ms",
    "& img": {
      width: 80,
    },
    "& .power-name": {
      fontSize: 56,
      fontWeight: 700,
      position: "absolute",
      zIndex: 10,
      width: "max-content",
      opacity: 0,
      transition: "300ms",
    },
    "&:hover": {
      backgroundColor: darken(theme.palette.neutral.powerBG, 0.5),
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
  { img: sassImg, width: 100, name: "Sass" },
];
const frameworkImgs = [
  { img: reactImg, width: 100, name: "React" },
  { img: reduxImg, name: "Redux" },
  { img: bootstrapImg, name: "Bootstrap" },
  { img: materialUIImg, name: "Material-UI" },
  { img: animejsImg, width: 100, name: "Animejs" },
];
const toolImgs = [
  { img: gitImg, name: "Git" },
  { img: webpackImg, name: "Webpack" },
  { img: terminalImg, name: "Terminal" },
  { img: npmImg, name: "NPM" },
];

function renderPowers(imgs, styles) {
  return (
    <>
      {imgs.map((item) => (
        <div className={styles.power}>
          <img
            src={item.img}
            alt={item.name}
            style={{ width: item.width && item.width }}
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
  useEffect(() => {}, []);
  console.log(type);
  return (
    <div>
      <CSSTransition
        in={open}
        timeout={300}
        classNames={styles.animation}
        unmountOnExit
      >
        <div className={styles.root}>
          <Heading className="heading">{heading}</Heading>
          <IconButton onClick={onClose} className="close">
            <CloseIcon />
          </IconButton>

          <div className="powers-wrapper">
            {type == "fundamentals" && renderPowers(fundamentalImgs, styles)}
            {type == "frameworks" && renderPowers(frameworkImgs, styles)}
            {type == "tools" && renderPowers(toolImgs, styles)}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
