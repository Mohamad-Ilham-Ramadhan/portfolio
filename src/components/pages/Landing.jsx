import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavbarLeft from "../NavbarLeft";
import NavbarRight from "../NavbarRight";
import Home from "../Home";
import Projects from "../Projects";
import AboutMe from "../AboutMe";

// developing <SwiperProjectsMobile />
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
  },
}));
export default function Landing() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className={styles.root}>
      {!isMobile && <NavbarLeft />}
      {!isMobile && <NavbarRight />}

      <Home />
      <Projects />
      {/* <AboutMe /> */}
    </div>
  );
}
