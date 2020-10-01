import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import anime from "animejs";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Heading from "./Heading";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "./icons/IconFacebook";
import InstagramIcon from "@material-ui/icons/Instagram";
// images
import arrowMyPowers from "../images/arrow-my-powers.svg";
import claw from "../images/claw.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  heading: {
    marginBottom: 72,
  },
  name: {
    fontSize: 64,
    fontWeight: 700,
    lineHeight: 0.8,
  },
  passion: {
    fontSize: 32,
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: 72,
  },
  description: {
    marginBottom: 36,
  },
  gridArrow: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
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
  powers: {
    padding: [80, 100, 40, 100],
    backgroundColor: "black",
    marginLeft: -100,
    marginRight: -100,
    marginBottom: -80,
    "& .powers-heading": {
      marginBottom: 172,
    },
    "& .powers-grid-container": {
      marginBottom: 172,
    },
    "& .powers-grid-item": {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    "& .powers-category": {
      fontSize: 32,
      fontWeight: 700,
      position: "relative",
      zIndex: 2,
    },
    "& .powers-claw": {
      position: "absolute",
      zIndex: 1,
      width: 80,
      opacity: 0.5,
    },
  },
  sosmed: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

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
    <section className={styles.root}>
      <Heading className={styles.heading}>About me</Heading>
      <Typography className={styles.name} component="h3">
        Mohamad Ilham Ramadhan
      </Typography>
      <Typography className={styles.passion} component="h4">
        Front-end Web Developer
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            numquam praesentium dignissimos molestias eos ipsa. Saepe odit
            quidem ex eligendi iusto! Totam possimus cumque esse sit, iusto
            debitis aperiam quo!
          </Typography>
          <Typography className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            numquam praesentium dignissimos molestias eos ipsa. className=
            {styles.description} Saepe odit quidem ex eligendi iusto! Totam
            possimus cumque esse sit, iusto debitis aperiam quo!
          </Typography>
          <Typography className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            numquam praesentium dignissimos molestias eos ipsa. Saepe odit
            quidem ex eligendi iusto! Totam possimus cumque esse sit, iusto
            debitis aperiam quo!
          </Typography>
        </Grid>
        <Grid className={styles.gridArrow} item xs={6}>
          <div ref={myPowersRef} className="text">
            My powers
          </div>
          <img ref={arrowRef} className="arrow" src={arrowMyPowers} alt="" />
          <a className="trigger" href="#"></a>
          <img className="bg-claw" src={claw} alt="" />
        </Grid>
      </Grid>
      <div className={styles.powers}>
        <Heading className="powers-heading">Powers</Heading>
        <Grid className="powers-grid-container" container>
          <Grid className="powers-grid-item" item xs={4}>
            <Typography className="powers-category" variant="h4">
              Fundamentals
            </Typography>
            <img className="powers-claw" src={claw} alt="" />
          </Grid>
          <Grid className="powers-grid-item" item xs={4}>
            <Typography className="powers-category" variant="h4">
              Frameworks&libraries
            </Typography>
            <img className="powers-claw" src={claw} alt="" />
          </Grid>
          <Grid className="powers-grid-item" item xs={4}>
            <Typography className="powers-category" variant="h4">
              Tools
            </Typography>
            <img className="powers-claw" src={claw} alt="" />
          </Grid>
        </Grid>
        <div className={styles.sosmed}>
          <Link className="sosmed-icon" href="#">
            <GitHubIcon />
          </Link>
          <Link className="sosmed-icon" href="#">
            <TwitterIcon />
          </Link>
          <Link className="sosmed-icon" href="#">
            <FacebookIcon />
          </Link>
          <Link className="sosmed-icon" href="#">
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
