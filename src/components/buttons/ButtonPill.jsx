import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 50,
    fontSize: "1rem",
    fontWeight: 700,
    padding: [6, 24],
    backgroundColor: "white",
    transition: "color 0ms",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
    "& span": {
      // marginRight: 6,
    },
    "& .icon-visit": {
      fontSize: 20,
    },
    // size
    "&.small": {
      height: 33,
      "& span": {
        fontSize: ".8rem",
      },
    },
  },
}));

export default function ButtonPill({ children, className, size, ...props }) {
  const styles = useStyles();
  return (
    <Button className={clsx(styles.root, size, className)} {...props}>
      {children}
    </Button>
  );
}
