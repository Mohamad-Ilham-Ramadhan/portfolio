import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    top: 0,
    position: "fixed",
    "& .indicator": {
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, .25)",
      marginBottom: 24,
      "&:last-child": {
        marginBottom: 0,
      },
      "&.active": {
        backgroundColor: "white",
      },
    },
  },
}));

export default function NavbarLeft() {
  const [active, setActive] = useState();
  const styles = useStyles();
  return (
    <nav className={styles.root}>
      <a href="#" className={clsx("indicator", "active")}></a>
      <a href="#" className="indicator"></a>
      <a href="#" className="indicator"></a>
    </nav>
  );
}
