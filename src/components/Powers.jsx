import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import anime from "animejs";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Heading from "./Heading";
import PowersDetail from "./PowersDetail";
import claw from "../images/claw.svg";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "./icons/IconFacebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import htmlImg from "../images/html.svg";
import cssImg from "../images/css.svg";
import javascriptImg from "../images/javascript.svg";
import reactImg from "../images/react.svg";
import reduxImg from "../images/redux.svg";
import materialUIImg from "../images/material-ui.svg";
import gitImg from "../images/git-logo.svg";
import webpackImg from "../images/webpack.svg";
import terminalImg from "../images/terminal.svg";
const useStyles = makeStyles((theme) => ({
  powers: {
    position: "relative",
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
      "&:hover": {
        cursor: "pointer",
      },
    },
    "& .powers-category": {
      fontSize: 32,
      fontWeight: 700,
      position: "relative",
      zIndex: 3,
      "&.active": {
        fontSize: 56,
      },
    },
    "& .powers-claw": {
      position: "absolute",
      zIndex: 1,
      width: 80,
      opacity: 0.5,
    },
    "& .power": {
      position: "absolute",
      zIndex: 2,
      width: 90,
      height: 90,
      backgroundColor: theme.palette.neutral.powerBG,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      opacity: 0,
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
  animation: {
    "&-enter": {
      opacity: 0,
    },
    "&-enter-active": {
      opacity: 1,
      transition: "opacity 300ms",
    },
    "&-exit": {
      opacity: 1,
    },
    "&-exit-active": {
      opacity: 0,
      transition: "opacity 300ms",
    },
  },
}));

export default function Powers() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [powersDetailType, setPowersDetailType] = useState(null);
  function onClosePowerDetail() {
    setOpen(false);
  }
  function onClickOpenPowerDetail(type) {
    setOpen(true);
    setPowersDetailType(type);
    console.log(type);
  }
  function onPowerMouseEnter(e) {
    const powers = e.currentTarget.querySelectorAll(".power");
    const move = 75;
    anime({
      targets: powers[0],
      translateY: move,
      opacity: 1,
      duration: 1000,
    });
    anime({
      targets: powers[1],
      translateY: -move,
      translateX: move,
      opacity: 1,
      duration: 1000,
    });
    anime({
      targets: powers[2],
      translateY: -move,
      translateX: -move,
      opacity: 1,
      duration: 1000,
    });
  }
  function onPowerMouseLeave(e) {
    const powers = e.currentTarget.querySelectorAll(".power");
    anime({
      targets: powers[0],
      translateY: 0,
      opacity: 0,
      duration: 1000,
    });
    anime({
      targets: powers[1],
      translateY: 0,
      translateX: 0,
      opacity: 0,
      duration: 1000,
    });
    anime({
      targets: powers[2],
      translateY: 0,
      translateX: 0,
      opacity: 0,
      duration: 1000,
    });
  }
  return (
    <div className={styles.powers}>
      <Heading className="powers-heading">Powers</Heading>
      <Grid className="powers-grid-container" container>
        <Grid
          onMouseEnter={onPowerMouseEnter}
          onMouseLeave={onPowerMouseLeave}
          onClick={() => onClickOpenPowerDetail("fundamentals")}
          className="powers-grid-item"
          item
          xs={4}
        >
          <Typography className="powers-category" variant="h4">
            Fundamentals
          </Typography>
          <img className="powers-claw" src={claw} alt="" />
          <div className="power">
            <img src={javascriptImg} width="45px" alt="" />
          </div>
          <div className="power">
            <img src={htmlImg} width="45px" alt="" />
          </div>
          <div className="power">
            <img src={cssImg} width="45px" alt="" />
          </div>
        </Grid>
        <Grid
          onMouseEnter={onPowerMouseEnter}
          onMouseLeave={onPowerMouseLeave}
          onClick={() => onClickOpenPowerDetail("frameworks")}
          className="powers-grid-item"
          item
          xs={4}
        >
          <Typography className="powers-category" variant="h4">
            Frameworks&libraries
          </Typography>
          <img className="powers-claw" src={claw} alt="" />
          <div className="power">
            <img src={materialUIImg} width="45px" alt="" />
          </div>
          <div className="power">
            <img src={reactImg} width="55px" alt="" />
          </div>
          <div className="power">
            <img
              src={reduxImg}
              style={{ marginLeft: 2, marginBottom: 4 }}
              width="45px"
              alt=""
            />
          </div>
        </Grid>
        <Grid
          onMouseEnter={onPowerMouseEnter}
          onMouseLeave={onPowerMouseLeave}
          onClick={() => onClickOpenPowerDetail("tools")}
          className="powers-grid-item"
          item
          xs={4}
        >
          <Typography className="powers-category" variant="h4">
            Tools
          </Typography>
          <img className="powers-claw" src={claw} alt="" />
          <div className="power">
            <img src={terminalImg} width="45px" alt="" />
          </div>
          <div className="power">
            <img src={webpackImg} width="45px" alt="" />
          </div>
          <div className="power">
            <img src={gitImg} width="45px" alt="" />
          </div>
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
      <PowersDetail
        open={open}
        onClose={onClosePowerDetail}
        heading="Fundamentals"
        type={powersDetailType}
      />
    </div>
  );
}
