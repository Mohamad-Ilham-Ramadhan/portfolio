import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import Landing from "./pages/Landing";
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
        <Route path="/project-detail">
          <ProjectDetail />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
