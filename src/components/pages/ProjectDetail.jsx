import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Heading from "../Heading";
import NavbarTop from "../NavbarTop";
import Grid from "@material-ui/core/Grid";
import titikDuaImg from "../../images/titik-dua.svg";
import imageDetailDesktop from "../../images/shortly-detail-desktop.svg";
import imageDetailMobile from "../../images/shortly-detail-mobile.svg";
import ButtonPill from "../buttons/ButtonPill";
import IconVisitWeb from "../icons/IconVisitWeb";
import IconGithub from "@material-ui/icons/GitHub";
import NavbarMobile from "../NavbarMobile";
const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    padding: [0, 24, 40],
  },
  navbar: {
    marginBottom: 72,
  },
  navbarMobile: {
    marginBottom: 24,
  },
  heading: {
    marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      marginBottom: 72,
    },
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 32,
    [theme.breakpoints.up("sm")]: {
      fontSize: "4.5rem",
    },
  },
  description: {
    lineHeight: 1.7,
    marginBottom: 32,
    fontSize: 14,
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginBottom: 40,
      fontSize: "1rem",
    },
  },
  gridImg: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
  },
  wrapperBtns: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
    "& button": {
      marginRight: 16,
      height: 30,
      padding: [0, 18],
      [theme.breakpoints.up("md")]: {
        height: 33,
        padding: [6, 24],
      },
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
  imgDetail: {
    width: "100%",
    marginBottom: 24,
    zIndex: -1,
    [theme.breakpoints.up("md")]: {
      width: "124%",
    },
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
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  function changeImgPreview(type) {
    if (type == "desktop") {
      setImgPreview(imageDetailDesktop);
    } else if (type == "mobile") {
      setImgPreview(imageDetailMobile);
    }
  }

  return (
    <div className={styles.root}>
      {downSm ? (
        <NavbarMobile className={styles.navbarMobile} />
      ) : (
        <NavbarTop className={styles.navbar} />
      )}
      <div className={styles.container}>
        <Heading className={styles.heading} component="h1">
          Shortly
        </Heading>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography className={styles.title} variant="h2">
              URL API Landing Page
            </Typography>
            {downSm && (
              <>
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
              </>
            )}
            <Typography className={styles.description}>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
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
          {!downSm && (
            <Grid className={styles.gridImg} item xs={12} md={6}>
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
          )}
        </Grid>
      </div>
    </div>
  );
}
