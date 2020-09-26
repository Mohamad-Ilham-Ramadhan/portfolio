import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundImage: `linear-gradient(to right, ${theme.palette.neutral.darkBlue}, ${theme.palette.neutral.veryDarkBlue})`,
    },
  },
}));

export default function App() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <NavbarLeft />
      <NavbarRight />
      <Home />
    </div>
  );
}
