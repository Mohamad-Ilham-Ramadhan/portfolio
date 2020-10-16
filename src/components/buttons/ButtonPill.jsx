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
    "&.active": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
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
    "&.tiny": {
      padding: [0, 16],
      height: 29,
      "& span": {
        fontSize: ".75rem",
      },
    },
    "&.shrink": {
      "& .MuiButton-endIcon": {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
}));

export default function ButtonPill({
  children,
  className,
  size,
  shrink,
  ...props
}) {
  const styles = useStyles();
  return (
    <Button
      className={clsx(styles.root, size, shrink ? "shrink" : null, className)}
      {...props}
    >
      {children}
    </Button>
  );
}
