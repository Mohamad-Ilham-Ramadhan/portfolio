import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imgCircle from "../images/circle.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    writingMode: "vertical-lr",
    top: 0,
    right: 0,
    width: 50,
    height: "100vh",
    display: "flex",
    zIndex: 99,
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",

    "& li": {
      display: "inline-block",
      marginBottom: 72,
      position: "relative",
      "&:last-child": {
        marginBottom: 0,
      },
      "&:hover": {
        "& img": {
          opacity: 1,
        },
      },
      "& a": {
        color: "white",
        textDecoration: "none",
        fontSize: 13,
        fontWeight: 600,
        textTransform: "uppercase",
      },
      "& img": {
        opacity: 0,
        opacity: 0,
        position: "absolute",
        left: -6,
        top: -14,
        zIndex: -1,
      },
    },
  },
}));

export default function NabarRight() {
  const styles = useStyles();
  return (
    <nav className={styles.root}>
      <li>
        <a href="#">Home</a>
        <img src={imgCircle} alt="" />
      </li>
      <li>
        <a href="#">Portfolio</a>
        <img src={imgCircle} alt="" />
      </li>
      <li>
        <a href="#">About me</a>
        <img src={imgCircle} alt="" />
      </li>
    </nav>
  );
}
