import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import waveImg from "../../images/wave.svg";
import Heading from "../Heading";
import NavbarTop from "../NavbarTop";
import Grid from "@material-ui/core/Grid";
import titikDuaImg from "../../images/titik-dua.svg";
import imageDetailDesktop from "../../images/shortly-detail-desktop.svg";
import imageDetailMobile from "../../images/shortly-detail-mobile.svg";
import ButtonPill from "../buttons/ButtonPill";
import Button from "@material-ui/core/Button";
import IconVisitWeb from "../icons/IconVisitWeb";
import IconGithub from "@material-ui/icons/GitHub";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 80,
  },
  navbar: {
    marginBottom: 72,
  },
  heading: {
    marginBottom: 72,
  },
  title: {
    fontSize: "4.5rem",
    fontWeight: 700,
    marginBottom: 32,
  },
  description: {
    width: "80%",
    lineHeight: 1.7,
    marginBottom: 40,
  },
  gridImg: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
  },
  wrapperBtns: {
    display: "flex",
    justifyContent: "flex-end",
    "& button": {
      marginRight: 16,
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
  imgDetail: {
    marginBottom: 24,
    width: "124%",
    zIndex: -1,
  },
  builtWith: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 8,
  },
  builtWithList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    marginBottom: 32,
  },
}));

export default function ProjectDetail() {
  const styles = useStyles();
  const [imgPreview, setImgPreview] = useState(imageDetailDesktop);
  function changeImgPreview(type) {
    if (type == "desktop") {
      setImgPreview(imageDetailDesktop);
    } else if (type == "mobile") {
      setImgPreview(imageDetailMobile);
    }
  }

  return (
    <div className={styles.root}>
      <NavbarTop className={styles.navbar} />
      <Heading className={styles.heading} component="h1">
        Shortly
      </Heading>
      <Grid container>
        <Grid item xs={6}>
          <Typography className={styles.title} variant="h2">
            URL API Landing Page
          </Typography>
          <Typography className={styles.description}>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </Typography>
          <Typography className={styles.builtWith} variant="h3">
            Built with{" "}
            <span>
              <img src={titikDuaImg} alt="" />
            </span>
          </Typography>
          <ul className={styles.builtWithList}>
            <li>React</li>
            <li>Redux</li>
            <li>MaterialUI</li>
            <li>Webpack</li>
            <li>Love</li>
          </ul>

          <div
            className={styles.wrapperBtns}
            style={{ justifyContent: "flex-start" }}
          >
            <ButtonPill endIcon={<IconVisitWeb />}>Visit</ButtonPill>
            <ButtonPill endIcon={<IconGithub />}>Source code</ButtonPill>
          </div>
        </Grid>
        <Grid className={styles.gridImg} item xs={6}>
          <img className={styles.imgDetail} src={imgPreview} alt="" />
          <div className={styles.wrapperBtns}>
            <ButtonPill
              size="small"
              onClick={() => {
                changeImgPreview("desktop");
              }}
            >
              Desktop
            </ButtonPill>
            <ButtonPill
              size="small"
              onClick={() => {
                changeImgPreview("mobile");
              }}
            >
              Mobile
            </ButtonPill>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
