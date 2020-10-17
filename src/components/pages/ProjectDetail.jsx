import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
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
// aactions
import selectProjectDetail from "../../config/actions/selectProjectDetail";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 32,
    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
    },
  },
  container: {
    padding: [0, 24, 80],
    [theme.breakpoints.up("lg")]: {
      padding: [0, 80, 40],
    },
    [theme.breakpoints.up("xl")]: {
      padding: [0, 100, 40],
    },
  },
  navbar: {
    marginBottom: 40,
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
      fontSize: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.5rem",
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
    justifyContent: "flex-start",
    flexWrap: "wrap",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  },
  wrapperWrapperBtns: {
    height: "100%",
  },
  wrapperBtns: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
    "& .MuiButton-root": {
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
  wrapperImgPreview: {
    width: "100%",
    direction: "rtl",
    zIndex: -1,
  },
  imgPreview: {
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      width: "125%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "125%",
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

function ProjectDetail({
  activeProjectSlider,
  projectDetail,
  selectProjectDetail,
}) {
  const styles = useStyles();
  const [imgPreviewType, setImgPreviewType] = useState("desktop");
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const { project } = useParams();
  function changeImgPreview(type) {
    if (type == "desktop") {
      setImgPreviewType("desktop");
    } else if (type == "mobile") {
      setImgPreviewType("mobile");
    }
  }
  useEffect(() => {
    selectProjectDetail(project);
  }, []);
  console.log(projectDetail);
  return (
    <div className={styles.root}>
      {downSm ? (
        <NavbarMobile className={styles.navbarMobile} />
      ) : (
        <NavbarTop className={styles.navbar} />
      )}
      <div className={styles.container}>
        <Heading className={styles.heading} component="h1">
          {projectDetail.heading}
        </Heading>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography className={styles.title} variant="h2">
              {projectDetail.title}
            </Typography>
            {downSm && (
              <>
                {imgPreviewType == "desktop" ? (
                  <img
                    className={styles.imgPreview}
                    src={projectDetail.imgDetailDesktop}
                    alt=""
                  />
                ) : (
                  <img
                    className={styles.imgPreview}
                    src={projectDetail.imgDetailMobile}
                    alt=""
                  />
                )}
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
              <ButtonPill
                component="a"
                href={projectDetail.visit}
                size="small"
                endIcon={<IconVisitWeb />}
              >
                Visit
              </ButtonPill>
              <ButtonPill
                component="a"
                href={projectDetail.github}
                size="small"
                endIcon={<IconGithub />}
              >
                Source
              </ButtonPill>
            </div>
          </Grid>
          {!downSm && (
            <Grid className={styles.gridImg} item xs={12} md={6}>
              <div className={styles.wrapperImgPreview}>
                {imgPreviewType == "desktop" ? (
                  <img
                    className={styles.imgPreview}
                    src={projectDetail.imgDetailDesktop}
                    alt=""
                  />
                ) : (
                  <img
                    className={styles.imgPreview}
                    src={projectDetail.imgDetailMobile}
                    alt=""
                  />
                )}
              </div>
              <div styles={styles.wrapperWrapperBtns}>
                <div className={styles.wrapperBtns}>
                  <ButtonPill
                    className={imgPreviewType == "desktop" ? "active" : null}
                    size="small"
                    onClick={() => {
                      changeImgPreview("desktop");
                    }}
                  >
                    Desktop
                  </ButtonPill>
                  <ButtonPill
                    className={imgPreviewType == "mobile" ? "active" : null}
                    size="small"
                    onClick={() => {
                      changeImgPreview("mobile");
                    }}
                  >
                    Mobile
                  </ButtonPill>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}
function mapState(state) {
  return {
    activeProjectSlider: state.activeProjectSlider,
    projectDetail: state.projectDetail,
  };
}
function mapDispatch(dispatch) {
  return {
    selectProjectDetail: (link) => {
      dispatch(selectProjectDetail(link));
    },
  };
}
export default connect(mapState, mapDispatch)(ProjectDetail);
