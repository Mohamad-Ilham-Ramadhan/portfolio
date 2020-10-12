import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function NavbarMobile() {
  const styles = useStyles();
  return (
    <nav className={styles.root}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </nav>
  );
}
