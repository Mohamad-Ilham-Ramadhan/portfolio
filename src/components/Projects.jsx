import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Heading from "./Heading";
import anime from "animejs";
import SwiperProjects from "./SwiperProjects";
import SwiperProjectsMobile from "./SwiperProjectsMobile";
import CardProject from "./CardProject";
// developing SwiperProjectsMobile;
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [initialSlide, setInitialSlide] = useState(0);
  function onClickProject() {}
  function onSlideChangeSetInitialSlide(activeIndex) {
    setInitialSlide(activeIndex);
  }
  return (
    <section className={styles.root}>
      {/* <Heading className={styles.heading}>Projects</Heading> */}
      {isMobile ? (
        <SwiperProjectsMobile
          initialSlide={initialSlide}
          setInitialSlide={onSlideChangeSetInitialSlide}
        />
      ) : (
        <SwiperProjects
          initialSlide={initialSlide}
          setInitialSlide={onSlideChangeSetInitialSlide}
          className={styles.swiper}
        />
      )}
      {/* <Grid container spacing={8}>
        <Grid className={styles.gridProject} item xs={12} md={6} lg={4}>
          <CardProject />
        </Grid>
      </Grid> */}
    </section>
  );
}
