import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavbarLeft from "../NavbarLeft";
import NavbarRight from "../NavbarRight";
import NavbarMobile from "../NavbarMobile";
import Home from "../Home";
import Projects from "../Projects";
import AboutMe from "../AboutMe";

// developing <SwiperProjectsMobile />
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 80,
      paddingRight: 80,
    },
  },
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
    </div>
  );
}
