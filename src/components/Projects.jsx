import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Heading from "./Heading";

import SwiperProjects from "./SwiperProjects";
import trianglePink from "../images/triangle-pink-small.svg";
import plusBlue from "../images/plus.svg";
import circlePink from "../images/circle.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: 80,
  },
  heading: {
    marginBottom: 56,
  },
  triangle1: {
    position: "absolute",
    left: "38%",
    top: 172,
    transform: "rotate(35deg)",
    opacity: 0.25,
    width: 30,
  },
  plus1: {
    left: "7%",
    width: 30,
    opacity: 0.25,
    position: "absolute",
    transform: "rotate(-12deg)",
    bottom: "15%",
  },
  circle1: {
    left: "7%",
    width: 30,
    opacity: 0.25,
    position: "absolute",
    transform: "rotate(-12deg)",
    bottom: "15%",
  },
}));

export default function Projects() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <img className={styles.triangle1} src={trianglePink} alt="" />
      <img className={styles.plus1} src={plusBlue} alt="" />
      <img className={styles.circle1} src={circlePink} alt="" />
      <Heading className={styles.heading}>Projects</Heading>
      <SwiperProjects />
    </section>
  );
}
