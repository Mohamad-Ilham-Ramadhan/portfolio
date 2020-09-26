import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    writingMode: "vertical-lr",
    top: 0,
    right: 0,
    width: 100,
    height: "100vh",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",

    "& li": {
      display: "inline-block",
      marginBottom: 72,
      "&:last-child": {
        marginBottom: 0,
      },

      "& a": {
        color: "white",
        textDecoration: "none",
        fontSize: 13,
        fontWeight: 300,
        textTransform: "uppercase",
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
      </li>
      <li>
        <a href="#">Portfolio</a>
      </li>
      <li>
        <a href="#">About me</a>
      </li>
    </nav>
  );
}
