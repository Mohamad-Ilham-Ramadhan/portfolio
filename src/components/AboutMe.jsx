import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import anime from "animejs";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Heading from "./Heading";
import Powers from "./Powers";

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
    marginBottom: 72,
    lineHeight: 0.8,
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
    <section className={styles.root}>
      <Heading className={styles.heading}>About me</Heading>
      <Typography className={styles.name} component="h3">
        Mohamad Ilham Ramadhan
      </Typography>
      <Typography className={styles.passion} component="h4">
        Front-end Web Developer
      </Typography>
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
            of redundant code, and then make it run faster but it's optional.
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
