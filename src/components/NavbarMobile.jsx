import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo-white.svg";
import logoPath from "../images/logo-white-path.svg";
import IconMenu from "@material-ui/icons/Menu";
import IconClose from "@material-ui/icons/Close";
import Backdrop from "@material-ui/core/Backdrop";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "./icons/IconFacebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import scrollTo from "../utils/scrollTo";
const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 72,
    position: "relative",
    zIndex: 200,
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "black",
    "& li": {
      marginRight: 12,
      marginLeft: 12,

      "& a": {
        color: "white",
        textDecoration: "none",
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& li": {
        marginLeft: 24,
        marginRight: 24,
        fontSize: 16,
      },
    },
  },
  toggleOpen: {
    position: "absolute",
    right: 24,
  },
  toggleClose: {
    position: "absolute",
    right: 24,
    bottom: 24,
  },
  logo: {
    textAlign: "center",
    "& img": {
      width: "40%",
    },
  },
  backdrop: {
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  menuOverlay: {
    backgroundColor: "black",
    position: "fixed",
    zIndex: 300,
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  navOverlay: {
    listStyle: "none",
    width: "100%",
    marginBottom: 32,
    "& li": {
      textAlign: "center",
      padding: [8, 0],
      "& a": {
        color: "white",
        textDecoration: "none",
        fontSize: 32,
      },
    },
  },
  sosmedOverlay: {
    listStyle: "none",
    width: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    "& li": {
      margin: [0, 16],
      "& a ": {
        display: "block",
        color: "white",
        "& svg": {
          fontSize: "2.25rem",
        },
      },
    },
  },
}));

export default function NavbarMobile({ className }) {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen((open) => !open);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      {/* <Backdrop className={styles.backdrop} open={open} onClick={handleClose} /> */}
      {open && (
        <div className={styles.menuOverlay}>
          <nav className={styles.navOverlay}>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOpen();
                  scrollTo("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOpen();
                  scrollTo("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOpen();
                  scrollTo("about-me");
                }}
              >
                About
              </a>
            </li>
          </nav>
          <ul className={styles.sosmedOverlay}>
            <li>
              <a href="https://github.com/Mohamad-Ilham-Ramadhan">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mhmd_ilham_rmdhn/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/profile.php?id=100008333649476&ref=bookmarks">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/milhamr_">
                <TwitterIcon />
              </a>
            </li>
          </ul>
          <div
            onClick={toggleOpen}
            className={styles.toggleClose}
            role="button"
          >
            <IconClose />
          </div>
        </div>
      )}
      <nav className={clsx(styles.root, className)}>
        <div onClick={toggleOpen} className={styles.toggleOpen} role="button">
          <IconMenu />
        </div>
        {!open && (
          <a className={styles.logo} href="#" arial-label="bootstrap">
            <img src={logoPath} alt="" />
          </a>
        )}
        {/* {open && (
          <>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </>
        )} */}
      </nav>
    </>
  );
}
