import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import Landing from "./pages/Landing";
// Test SwiperProject untuk mobile
import Projects from "./Projects";
const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      color: "white",
      backgroundImage: `linear-gradient(to right, ${theme.palette.neutral.darkBlue}, ${theme.palette.neutral.veryDarkBlue})`,
    },
  },
}));
export default function App() {
  const styles = useStyles();
  return (
    <Router>
      <Switch>
        <Route path="/project-detail/:project">
          <ProjectDetail />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
