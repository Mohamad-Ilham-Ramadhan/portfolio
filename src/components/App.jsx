import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import Home from "./Home";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Coba from "./Coba";
import ProjectDetail from "./pages/ProjectDetail";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      color: "white",
      backgroundImage: `linear-gradient(to right, ${theme.palette.neutral.darkBlue}, ${theme.palette.neutral.veryDarkBlue})`,
    },
  },
  root: {
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

export default function App() {
  const styles = useStyles();

  return (
    // <div className={styles.root}>
    //   <NavbarLeft />
    //   <NavbarRight />
    //   <Home />
    //   <Projects />
    //   <AboutMe />
    // </div>
    <ProjectDetail />
  );
}
