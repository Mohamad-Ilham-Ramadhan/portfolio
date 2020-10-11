import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Heading from "./Heading";
import anime from "animejs";
import SwiperProjects from "./SwiperProjects";
import CardProject from "./CardProject";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: 80,
    paddingBottom: 80,
  },
  heading: {
    marginBottom: 56,
  },

  swiper: {
    marginBottom: 156,
  },
  gridProject: {
    textAlign: "center",
  },
}));

export default function Projects() {
  const styles = useStyles();
  function onClickProject() {}
  return (
    <section className={styles.root}>
      <Heading className={styles.heading}>Projects</Heading>
      <SwiperProjects className={styles.swiper} />
      <Grid container spacing={8}>
        {Array.from({ length: 12 }).map((project) => (
          <Grid className={styles.gridProject} item xs={12} md={6} lg={4}>
            <CardProject />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
