import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavbarLeft from "../NavbarLeft";
import NavbarRight from "../NavbarRight";
import NavbarMobile from "../NavbarMobile";
import Home from "../Home";
import Projects from "../Projects";
import AboutMe from "../AboutMe";
import Powers from "../Powers";

// developing <SwiperProjectsMobile />
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  root: {},
}));
export default function Landing() {
  const styles = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className={styles.root}>
      {/* {isDesktop && <NavbarLeft />} */}
      {isDesktop && <NavbarRight />}
      {!isDesktop && <NavbarMobile />}
      <Home />
      <Projects />
      <AboutMe />
      <Powers />
    </div>
  );
}
