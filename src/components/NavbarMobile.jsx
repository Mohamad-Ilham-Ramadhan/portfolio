import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo-white.svg";
import logoPath from "../images/logo-white-path.svg";
import IconMenu from "@material-ui/icons/Menu";
import IconClose from "@material-ui/icons/Close";
import Backdrop from "@material-ui/core/Backdrop";
const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 72,
    position: "relative",
    zIndex: 200,
    marginBottom: 40,
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
  toggle: {
    position: "absolute",
    left: 24,
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
}));

export default function NavbarMobile() {
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
      <Backdrop className={styles.backdrop} open={open} onClick={handleClose} />
      <nav className={styles.root}>
        <div onClick={toggleOpen} className={styles.toggle} role="button">
          {open ? <IconClose /> : <IconMenu />}
        </div>
        {!open && (
          <a className={styles.logo} href="#" arial-label="bootstrap">
            <img src={logoPath} alt="" />
          </a>
        )}
        {open && (
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
        )}
      </nav>
    </>
  );
}
