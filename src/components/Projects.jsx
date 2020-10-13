import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
    padding: [80, 32],
    [theme.breakpoints.up("md")]: {
      // padding: [80, 0],
    },
  },
  heading: {
    marginBottom: 56,
  },
  subHeading: {
    marginBottom: 24,
  },
  swiper: {
    marginBottom: 156,
  },
  swiperMobile: {
    marginBottom: 40,
  },
  gridProjectContainer: {
    marginTop: 0,
  },
  gridProjectItem: {
    textAlign: "center",
    paddingTop: "8px !important",
    paddingBottom: "8px !important",
    [theme.breakpoints.up("md")]: {
      padding: "16px !important ",
    },
  },
  project: {
    "@media (min-width: 500px)": {
      maxWidth: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

export default function Projects() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [initialSlide, setInitialSlide] = useState(0);
  function onClickProject() {}
  function onSlideChangeSetInitialSlide(activeIndex) {
    setInitialSlide(activeIndex);
  }
  return (
    <section className={styles.root}>
      <Heading className={styles.heading}>Projects</Heading>
      <Typography className={styles.subHeading} variant="h3">
        Featured
      </Typography>
      {isMobile ? (
        <SwiperProjectsMobile
          initialSlide={initialSlide}
          setInitialSlide={onSlideChangeSetInitialSlide}
          className={styles.swiperMobile}
        />
      ) : (
        <SwiperProjects
          initialSlide={initialSlide}
          setInitialSlide={onSlideChangeSetInitialSlide}
          className={styles.swiper}
        />
      )}
      <Typography className={styles.subHeading} variant="h3">
        More projects
      </Typography>
      <Grid className={styles.gridProjectContainer} container spacing={8}>
        {Array.from({ length: 5 }).map((item, i) => (
          <Grid
            key={i}
            className={styles.gridProjectItem}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <CardProject className={styles.project} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
