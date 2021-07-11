import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import waves from "../images/wave.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 24,
    fontWeight: 700,
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      fontSize: 32,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
    "&.giant": {
      fontSize: 171,
    },
    "& .waves": {
      position: "relative",
      top: "-50%",
      zIndex: 1,
      width: 22,
      [theme.breakpoints.up("sm")]: {
        width: "unset",
      },
    },
    "& .wrapper-text": {
      position: "relative",
      transform: "translateX(-12px)",
      zIndex: 2,
      [theme.breakpoints.up("sm")]: {
        transform: "translateX(-20px)",
      },
    },
    "& .text": {
      position: "relative",
      zIndex: 2,
    },
    "& .dot": {
      display: "inline-block",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
      marginLeft: 4,
      [theme.breakpoints.up("sm")]: {
        width: 12,
        height: 12,
      },
    },
  },
}));

export default function Heading({ className, children, variant, component }) {
  const styles = useStyles();
  return (
    <Typography
      className={clsx(styles.root, className, variant)}
      variant="h2"
      component={component}
    >
      <img className="waves" src={waves} alt="" />
      <span className="wrapper-text">
        <span className="text">{children}</span>
        <span className="dot"></span>
      </span>
    </Typography>
  );
}
