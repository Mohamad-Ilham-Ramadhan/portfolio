import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/project-detail">
          <ProjectDetail />
        </Route>
      </Switch>
    </Router>
  );
}
