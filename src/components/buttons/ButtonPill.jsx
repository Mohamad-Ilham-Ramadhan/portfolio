import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 50,
    fontSize: "1rem",
    fontWeight: 700,
    padding: [6, 24],
    background: "white",
    marginRight: 16,
    "& span": {
      marginRight: 6,
    },
    "& .icon-visit": {
      fontSize: 20,
    },
  },
}));

export default function ButtonPill({ children }, ...props) {
  console.log(children);
  const styles = useStyles();
  return (
    <Button className={styles.root} {...props}>
      Desktop
    </Button>
  );
}
