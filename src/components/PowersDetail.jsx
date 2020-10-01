import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
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
    padding: [40, 100],
    "& .heading": {
      marginBottom: 72,
    },
    "& .close": {
      position: "absolute",
      top: 16,
      right: 16,
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
    "& img": {
      width: 80,
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
  { img: htmlImg },
  { img: cssImg },
  { img: javascriptImg },
  { img: sassImg, width: 100 },
];
const frameworkImgs = [
  { img: reactImg },
  { img: reduxImg },
  { img: bootstrapImg },
  { img: materialUIImg },
  { img: animejsImg },
];
const toolImgs = [
  { img: gitImg },
  { img: webpackImg },
  { img: terminalImg },
  { img: npmImg },
];

function renderPowers(imgs, styles) {
  return (
    <>
      {imgs.map((item) => (
        <div className={styles.power}>
          <img
            src={item.img}
            alt=""
            style={{ width: item.width && item.width }}
          />
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
