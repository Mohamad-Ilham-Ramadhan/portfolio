import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavbarLeft from "../NavbarLeft";
import NavbarRight from "../NavbarRight";
import Home from "../Home";
import Projects from "../Projects";
import AboutMe from "../AboutMe";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 100,
    paddingRight: 100,
  },
}));
export default function Landing() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <NavbarLeft />
      <NavbarRight />
      <Home />
      <Projects />
      <AboutMe />
    </div>
  );
}
