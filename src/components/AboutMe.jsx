import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import anime from "animejs";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Heading from "./Heading";
import Powers from "./Powers";
// sosmed icons
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "./icons/IconFacebook";
import InstagramIcon from "@material-ui/icons/Instagram";
// images
import arrowMyPowers from "../images/arrow-my-powers.svg";
import claw from "../images/claw.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: [80, 32],
    [theme.breakpoints.up("lg")]: {
      padding: [80, 56],
    },
  },
  heading: {
    marginBottom: 72,
  },
  name: {
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 0.8,
    [theme.breakpoints.up("sm")]: {
      fontSize: 64,
    },
  },
  passion: {
    fontSize: 24,
    fontWeight: 700,
    color: theme.palette.primary.main,
    lineHeight: 0.8,
    marginBottom: 16,
    [theme.breakpoints.up("sm")]: {
      fontSize: 32,
      lineHeight: "unset",
    },
  },
  description: {
    marginBottom: 36,
  },
  gridArrow: {
    position: "relative",
    display: "none",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    "& .text": {
      display: "block",
      width: "100%",
      color: "white",
      textAlign: "center",
      fontSize: 36,
      fontWeight: 700,
      position: "relative",
      zIndex: 1,
    },
    "& .arrow": {
      position: "relative",
      zIndex: 1,
    },
    "& .trigger": {
      position: "absolute",
      zIndex: 5,
      width: 220,
      height: 220,
      backgroundColor: "transparent",
      borderRadius: "50%",
    },
    "& .bg-claw": {
      position: "absolute",
      zIndex: 0,
      opacity: 0.5,
    },
  },
  sosmed: {
    marginBottom: 72,
    "& .sosmed-icon": {
      marginRight: 24,
      color: "white",
      "&:last-child": {
        marginRight: 0,
      },
      "& svg": {
        fontSize: "2rem",
      },
    },
  },
}));

export default function AboutMe() {
  const styles = useStyles();
  const myPowersRef = useRef(null);
  const arrowRef = useRef(null);
  useEffect(() => {
    anime({
      targets: myPowersRef.current,
      translateY: -50,
      duration: 1000,
      direction: "alternate",
      autoplay: true,
      easing: "easeInOutSine",
      loop: true,
    });
    anime({
      targets: arrowRef.current,
      translateY: 50,
      duration: 1000,
      direction: "alternate",
      autoplay: true,
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  return (
    <section id="about-me" className={styles.root}>
      <Heading className={styles.heading}>About me</Heading>
      <Typography className={styles.name} component="h3">
        Mohamad Ilham Ramadhan
      </Typography>
      <Typography className={styles.passion} component="h4">
        Front-end Web Developer
      </Typography>
      <div className={styles.sosmed}>
        <a
          className="sosmed-icon"
          href="https://github.com/Mohamad-Ilham-Ramadhan"
        >
          <GitHubIcon />
        </a>
        <a className="sosmed-icon" href="https://twitter.com/milhamr_">
          <TwitterIcon />
        </a>
        <a
          className="sosmed-icon"
          href="https://web.facebook.com/profile.php?id=100008333649476&ref=bookmarks"
        >
          <FacebookIcon />
        </a>
        <a
          className="sosmed-icon"
          href="https://www.instagram.com/mhmd_ilham_rmdhn/"
        >
          <InstagramIcon />
        </a>
      </div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography className={styles.description}>
            My name is Mohamad Ilham Ramadhan I was born in Serang 31 January
            1997. Currently live in Serang Banten. I have an associate degree in
            informatics management of Polytechnic LP3i Bandung.
          </Typography>

          <Typography className={styles.description}>
            I'm a self-taught front-end web developer, very passionate to learn
            a new thing especially in programming world. I improve my skill by
            learning the fundamentals of programming language, make sure the
            foundation is pretty solid then making projects from coding
            challenge sites like{" "}
            <a href="https://www.frontendmentor.io">frontendmentor.io</a> ,{" "}
            <a href="https://devchallenges.io/">devchallanges.io</a>.
          </Typography>
          <Typography className={styles.description}>
            My style in writing code is "make it work, make it right, make it
            fast". First, I want to make sure the minimum functionality of an
            app work, and then make it clean, human-readable, scalable, get rid
            of redundant code, and then make it run faster (optional).
          </Typography>
        </Grid>
        <Grid className={styles.gridArrow} item xs={12} md={6}>
          <div ref={myPowersRef} className="text">
            My powers
          </div>
          <img ref={arrowRef} className="arrow" src={arrowMyPowers} alt="" />
          <a className="trigger" href="#"></a>
          <img className="bg-claw" src={claw} alt="" />
        </Grid>
      </Grid>
      {/* <Powers /> */}
    </section>
  );
}
