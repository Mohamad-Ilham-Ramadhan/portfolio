import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import anime from "animejs";
import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavbarMobile from "./NavbarMobile";
import imgMouseScrollDown from "../images/mouse-scroll-down.svg";
import triangleBlue from "../images/triangle-blue.svg";
import trianglePinkSmall from "../images/triangle-pink-small.svg";
import arrowScrollDown from "../images/arrow-scroll-down.svg";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  "@keyframes pulse": {
    "0%": { opacity: 0, transform: "scale(0)" },
    "50%": { opacity: 1, transform: "scale(1.25)" },
    "100%": { opacity: 0, transform: "scale(1.5)" },
  },
  "@keyframes floating": {
    from: {
      transform: "translateY(25px)",
    },
    to: {
      transform: "translateY(-25px)",
    },
  },
  "@keyframes floating-mobile": {
    from: {
      transform: "translateY(10px)",
    },
    to: {
      transform: "translateY(-10px)",
    },
  },
  "@keyframes floating-letter": {
    from: {
      transform: "translateY(10px)",
    },
    to: {
      transform: "translateY(-10px)",
    },
  },
  "@keyframes floating-letter-mobile": {
    from: {
      transform: "translateY(5px)",
    },
    to: {
      transform: "translateY(-5px)",
    },
  },
  "@keyframes rotating": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  root: {
    position: "relative",
    paddingTop: 40,
    marginBottom: 200,
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      padding: [32, 32, 0],
    },
    [theme.breakpoints.up("lg")]: {
      padding: [56, 56, 0],
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: 0,
    },
  },
  navbarMobile: {
    // marginBottom: 40,
  },
  gridContianer: {
    height: "100%",
  },
  wrapperHello: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      height: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      // paddingLeft: 40,
      justifyContent: "flex-start",
    },
    [theme.breakpoints.up("xl")]: {
      // paddingLeft: 100,
    },
  },
  hello: {
    color: "white",
    fontSize: 72,
    fontWeight: 600,
    lineHeight: 1,
    transition: "transform 100ms",
    "& span": {
      display: "inline-block",
    },
    "& .dot": {
      display: "inline-block",
      borderRadius: "50%",
      height: 20,
      width: 20,
      backgroundColor: theme.palette.primary.main,
      marginLeft: 8,
    },
    "@media (min-width: 500px)": {
      fontSize: 90,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 100,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 90,
      textAlign: "left",
      "& .dot": {
        height: 22,
        width: 22,
      },
    },
    "@media (min-width: 860px)": {
      fontSize: 100,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 150,
      "& .dot": {
        height: 30,
        width: 30,
      },
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 171,
      "& .dot": {
        height: 40,
        width: 40,
      },
    },
  },
  wrapperTrianglePink: {
    animation: "$floating 3s infinite alternate",
  },
  triangles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
    transition: "transform 100ms",
    "& .wrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      height: 250,
    },
    "& .MuiTypography-root": {
      color: "white",
      fontSize: 24,
      fontWeight: 300,
      lineHeight: 1.25,
      zIndex: 3,
    },
    "& .triangle-blue": {
      position: "absolute",
      width: "70%",
      zIndex: 2,
      opacity: 0.15,
      transformOrigin: "40% 52%",
      animation: "$rotating 40s linear infinite reverse",
    },
    "& .triangle-pink": {
      position: "absolute",
      opacity: 0.25,
      "& img": {
        width: 24,
        [theme.breakpoints.up("md")]: {
          width: 32,
        },
      },
      "&.first": {
        left: -14,
        top: 100,
        transform: "rotate(35deg)",
        animation: "$floating-mobile 3.5s infinite alternate",
        "& img": {
          animation: "$rotating 5s linear infinite",
        },
        [theme.breakpoints.up("md")]: {
          animation: "$floating 3.5s infinite alternate",
        },
      },
      "&.second": {
        top: 32,
        right: "24%",
        transform: "rotate(45deg)",
        animation: "$floating-mobile 3s infinite alternate 1s",
        "& img": {
          animation: "$rotating 6s linear infinite .5s",
        },
        [theme.breakpoints.up("md")]: {
          animation: "$floating 3.5s infinite alternate",
        },
      },
      "&.third": {
        right: "20%",
        bottom: 32,
        transform: "rotate(27deg)",
        animation: "$floating-mobile 4s infinite alternate .5s",
        "& img": {
          animation: "$rotating 5s linear infinite 1s",
        },
        [theme.breakpoints.up("md")]: {
          animation: "$floating 3.5s infinite alternate",
        },
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& .wrapper": {
        height: 300,
      },
      "& .MuiTypography-root": {
        fontSize: 30,
      },
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      "& .wrapper": {
        height: 350,
      },
      "& .triangle-blue": {
        width: "75%",
      },
      "& .MuiTypography-root": {
        fontSize: 20,
      },
      "& .triangle-pink": {
        "&.second": {
          top: 40,
          right: "35%",
        },
        "&.third": {
          bottom: 64,
          right: "35%",
        },
      },
    },
    "@media (min-width: 860px)": {
      "& .MuiTypography-root": {
        fontSize: 24,
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& .triangle-blue": {
        width: "70%",
      },
      "& .MuiTypography-root": {
        fontSize: 30,
      },
    },
    [theme.breakpoints.up("xl")]: {
      "& .triangle-blue": {
        width: "80%",
      },
      "& .MuiTypography-root": {
        fontSize: 40,
      },
      "& .triangle-pink": {
        "&.second": {
          top: -31,
        },
        "&.third": {
          bottom: 0,
        },
      },
    },
  },
  scrollDown: {
    display: "none",
    position: "absolute",
    right: 64,
    bottom: 32,
    "& img": {
      width: 24,
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
  },

  pulse1: {
    border: "1px solid white",
    position: "absolute",
    height: 70,
    width: 70,
    borderRadius: "50%",
    animation: "$pulse 2s infinite",
  },
  pulse2: {
    border: "1px solid white",
    position: "absolute",
    height: 70,
    width: 70,
    borderRadius: "50%",
    animation: "$pulse 2s infinite 1s",
  },
  letter: {
    animation: "$floating-letter-mobile 5s infinite alternate",
    [theme.breakpoints.up("md")]: {
      animation: "$floating-letter 5s infinite alternate",
    },
  },
  letter2: {
    animation: "$floating-letter-mobile 5s infinite alternate-reverse",
    [theme.breakpoints.up("md")]: {
      animation: "$floating-letter 5s infinite alternate-reverse",
    },
  },
}));

export default function Home() {
  const styles = useStyles();
  const helloRef = useRef(null);
  const hRef = useRef(null);
  const lRef = useRef(null);
  const aRef = useRef(null);
  const iRef = useRef(null);
  const h2Ref = useRef(null);
  const mRef = useRef(null);
  const trianglesRef = useRef(null);
  const scrollDownRef = useRef(null);

  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    setTimeout(() => {
      const fadeOutUntil = document.getElementById("projects").offsetTop;
      window.addEventListener("scroll", function (e) {
        helloRef.current.style.transform = `translateY(${
          window.pageYOffset / 3
        }px)`;
        hRef.current.style.transform = `translateY(${
          window.pageYOffset / 8
        }px)`;
        iRef.current.style.transform = `translateY(${
          window.pageYOffset / 7
        }px)`;
        lRef.current.style.transform = `translateY(${
          window.pageYOffset / 6.5
        }px)`;
        mRef.current.style.transform = `translateY(${
          window.pageYOffset / 9
        }px)`;
        h2Ref.current.style.transform = `translateY(${
          window.pageYOffset / 10
        }px)`;
        aRef.current.style.transform = `translateY(${
          window.pageYOffset / 7.5
        }px)`;
        trianglesRef.current.style.transform = `translateY(${
          window.pageYOffset / 3
        }px)`;
        scrollDownRef.current.style.transform = `translateY(${
          window.pageYOffset / 4
        }px)`;
        // harus 0 ketika pageYOffset = $projects.offsetTop
        helloRef.current.style.opacity = 1 - window.pageYOffset / fadeOutUntil;
        trianglesRef.current.style.opacity =
          1 - window.pageYOffset / fadeOutUntil;
        scrollDownRef.current.style.opacity =
          1 - window.pageYOffset / fadeOutUntil;
      });
    }, 5);
  }, []);
  return (
    <section id="home" className={styles.root}>
      {/* <div className={styles.curtain}></div> */}
      {/* {!upMd && <NavbarMobile className={styles.navbarMobile} />} */}
      <Grid container className={styles.gridContianer}>
        <Grid item xs={12} md={6}>
          <div className={styles.wrapperHello}>
            <Typography
              id="hello"
              ref={helloRef}
              className={styles.hello}
              variant="h1"
            >
              <span className={styles.letter} ref={hRef}>
                H
              </span>
              <span className={styles.letter2}>e</span>
              <span className={styles.letter2}>l</span>
              <span className={styles.letter} ref={lRef}>
                l
              </span>
              <span className={styles.letter2}>o</span>
              <span className={clsx(styles.letter, "dot")}></span>
              <br />
              <span className={styles.letter2}>I</span>
              <span>&nbsp;</span>
              <span className={styles.letter} ref={aRef}>
                a
              </span>
              <span className={styles.letter2}>m</span>
              <br />
              <span className={styles.letter} ref={iRef}>
                I
              </span>
              <span className={styles.letter2}>l</span>
              <span className={styles.letter} ref={h2Ref}>
                h
              </span>
              <span className={styles.letter2}>a</span>
              <span className={styles.letter} ref={mRef}>
                m
              </span>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div ref={trianglesRef} className={styles.triangles}>
            <div className="wrapper">
              <Typography component="p">
                Front-end web developer.
                <br /> Turn design into code into <br /> great UI fueled by
                coffee.
              </Typography>
              <img className="triangle-blue" src={triangleBlue} alt="" />
              <div className="triangle-pink first">
                <img
                  // className="triangle-pink first"
                  src={trianglePinkSmall}
                  alt=""
                />
              </div>
              <div className="triangle-pink second">
                <img src={trianglePinkSmall} alt="" />
              </div>
              <div className="triangle-pink third">
                <img src={trianglePinkSmall} alt="" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Tooltip title="Scroll down">
        <div ref={scrollDownRef} className={styles.scrollDown}>
          <img src={imgMouseScrollDown} alt="" />
          <div className={styles.pulse1}></div>
          <div className={styles.pulse2}></div>
        </div>
      </Tooltip>
    </section>
  );
}
