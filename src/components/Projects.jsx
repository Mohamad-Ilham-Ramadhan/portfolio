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

import imgShortly from "../images/project-imgs/shortly-url-shortening.svg";
import imgHuddle from "../images/project-imgs/huddle-landing-page.svg";
import imgFyloLanding from "../images/project-imgs/fylo-landing-page.svg";
import imgCodingBootcamp from "../images/project-imgs/coding-bootcamp-testimonial.svg";
import imgFourCard from "../images/project-imgs/four-card-feature-section.svg";
import imgBaseApparel from "../images/project-imgs/base-apparel.svg";
import imgIntroComponent from "../images/project-imgs/intro-component.svg";
import imgPingSingle from "../images/project-imgs/ping-single-column.svg";
import imgFyloData from "../images/project-imgs/fylo-data-storage-component.svg";

const projects = [
  { id: 1, img: imgShortly },
  { id: 2, img: imgHuddle },
  { id: 3, img: imgFyloLanding },
  { id: 4, img: imgCodingBootcamp },
  { id: 5, img: imgFourCard },
  { id: 6, img: imgBaseApparel },
  { id: 7, img: imgIntroComponent },
  { id: 8, img: imgPingSingle },
  { id: 9, img: imgFyloData },
];

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: [80, 32],
    [theme.breakpoints.up("sm")]: {
      padding: [80, 32],
    },
    [theme.breakpoints.up("lg")]: {
      padding: [80, 56, 0],
    },
    [theme.breakpoints.up("xl")]: {
      // paddingLeft: 100,
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
    [theme.breakpoints.up("md")]: {
      // untuk gridProjectItem padding : 16
      marginLeft: -16,
      marginRight: -16,
    },
  },
  gridProjectItem: {
    textAlign: "center",
    // padding: [8, 32],
    paddingTop: 8,
    paddingBottom: 8,
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
      {/* <Typography className={styles.subHeading} variant="h3">
        Featured
      </Typography> */}
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
      <Grid className={styles.gridProjectContainer} container>
        {projects.map((item) => (
          <Grid
            key={item.id}
            className={styles.gridProjectItem}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <CardProject className={styles.project} img={item.img} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
