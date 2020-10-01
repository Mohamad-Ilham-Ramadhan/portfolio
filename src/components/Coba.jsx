import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  animation: {
    "&-enter": {
      opacity: 0,
    },
    "&-enter-active": {
      opacity: 1,
      transition: "opacity 300ms",
    },
    "&-exit": {
      opacity: 1,
    },
    "&-exit-active": {
      opacity: 0,
      transition: "opacity 300ms",
    },
    "&-exit-done": {
      opacity: 0,
      display: "none",
    },
  },
}));

export default function Coba() {
  const [inProp, setInProp] = useState(false);
  const styles = useStyles();
  return (
    <div>
      <CSSTransition
        in={inProp}
        timeout={300}
        classNames={styles.animation}
        unmountOnExit={false}
      >
        <h1>Mohamad Ilham Ramadhan</h1>
      </CSSTransition>
      <button
        onClick={() => {
          setInProp(true);
        }}
      >
        Open
      </button>
      <button
        onClick={() => {
          setInProp(false);
        }}
      >
        Close
      </button>
    </div>
  );
}
