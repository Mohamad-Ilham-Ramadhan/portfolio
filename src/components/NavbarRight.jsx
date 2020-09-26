import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& ul": {
      display: "block",
      width: "100%",
    },
    "& li": {
      display: "inline-block",
      marginRight: 24,
    },
  },
}));

export default function NabarRight() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
      </ul>
    </div>
  );
}
