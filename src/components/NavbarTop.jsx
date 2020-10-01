import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,

    "& li": {
      display: "inline-block",
      marginRight: 72,
      "&:last-child": {
        marginRight: 0,
      },

      "& a": {
        color: "white",
        textDecoration: "none",
        fontSize: 16,
        fontWeight: 300,
        textTransform: "uppercase",
      },
    },
  },
}));

export default function NabarTop({ className }) {
  const styles = useStyles();
  return (
    <nav className={clsx(styles.root, className)}>
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
