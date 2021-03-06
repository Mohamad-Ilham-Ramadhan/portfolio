import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import imageCircle from "../images/circle.svg";
import scrollTo from "../utils/scrollTo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,

    "& li": {
      display: "inline-block",
      marginRight: 72,
      position: "relative",
      "&:last-child": {
        marginRight: 0,
      },
      "&:hover": {
        cursor: "pointer",
        "& img": {
          display: "block",
          position: "absolute",
          top: -7,
          left: -10,
          zIndex: -1,
        },
      },
      "& img": {
        display: "none",
      },
      "& a": {
        color: "white",
        textDecoration: "none",
        fontSize: 16,
        fontWeight: 600,
        textTransform: "uppercase",
      },
    },
  },
}));

export default function NabarTop({ className }) {
  const styles = useStyles();
  function scrollToWait(id) {
    setTimeout(() => {
      scrollTo(id);
    });
  }
  return (
    <nav className={clsx(styles.root, className)}>
      <li>
        <Link to="/home" onClick={() => scrollToWait("home")}>
          Home
        </Link>
        <img src={imageCircle} alt="" />
      </li>
      <li>
        <Link to="/projects" onClick={() => scrollToWait("projects")}>
          Projects
        </Link>
        <img src={imageCircle} alt="" />
      </li>
      <li>
        <Link to="/about-me" onClick={() => scrollToWait("about-me")}>
          About me
        </Link>
        <img src={imageCircle} alt="" />
      </li>
    </nav>
  );
}
