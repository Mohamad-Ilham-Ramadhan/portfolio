import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import waves from "../images/wave.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 40,
    fontWeight: 700,
    position: "relative",
    "&.giant": {
      fontSize: 171,
    },
    "& .waves": {
      position: "absolute",
      top: "-50%",
      zIndex: 1,
    },
    "& .text": {
      position: "relative",
      zIndex: 2,
      marginLeft: 16,
    },
    "& .dot": {
      display: "inline-block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
      marginLeft: 4,
    },
  },
}));

export default function Heading({ className, children, variant }) {
  const styles = useStyles();
  return (
    <Typography className={clsx(styles.root, className, variant)} variant="h2">
      <img className="waves" src={waves} alt="" />
      <span className="text">{children}</span>
      <span className="dot"></span>
    </Typography>
  );
}
