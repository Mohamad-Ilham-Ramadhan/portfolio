import React, { useEffect } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonPill from "./buttons/ButtonPill";
import Typography from "@material-ui/core/Typography";
// swiper
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// import "swiper/swiper-bundle.min.css"; // for production only (navigation dan pagination scss nya nge bug)
import imgRestCountries from "../images/slider-mobile/rest-countries.svg";
import imgRockPaperScissors from "../images/slider-mobile/rock-paper-scissors.svg";
import imgIpAddressTracker from "../images/slider-mobile/ip-address-tracker.svg";
import imgJobList from "../images/slider-mobile/job-list-with-filtering.svg";
// icons
import IconVisit from "./icons/IconVisitWeb";
import IconGithub from "@material-ui/icons/GitHub";
import IconMore from "@material-ui/icons/MoreHoriz";
import arrowNext from "../images/arrow-next.svg";
import arrowPrev from "../images/arrow-prev.svg";
// actions:
import changeActiveSlider from "../config/actions/changeActiveSlider";
import selectProjectDetail from "../config/actions/selectProjectDetail";

// Swiper's component initialization
SwiperCore.use([Navigation, Pagination]);

const useStyles = makeStyles((theme) => ({
  swiper: {
    // "& .swiper-button-next, .swiper-button-prev": {
    //   color: theme.palette.primary.main,
    //   height: 20,
    //   overflow: "hidden",
    // },
    "& .swiper-pagination": {
      bottom: 45,
    },
    "& .swiper-pagination-bullet": {
      width: 10,
      height: 10,
      backgroundColor: "white",
      opacity: 0.3,
    },
    "& .swiper-pagination-bullet-active": {
      backgroundColor: "white",
      opacity: 1,
    },
  },
  title: {
    position: "absolute",
    top: 0,
    fontSize: 32,
    fontWeight: 700,
    zIndex: 200,
    lineHeight: 1,
  },
  sliderImg: {
    width: "100%",
    filter: "brightness(.7)",
  },
  wrapperBtns: {
    "& .MuiButton-root": {
      marginRight: 8,
    },
  },
  navigation: {
    position: "absolute",
    top: "50%",
    width: "100%",
  },
  btnNavigation: {
    height: 30,
    width: 30,
    borderRadius: "50%",
    "&::after": {
      content: '""',
    },
    "& img": {
      width: "30%",
    },
    "&.swiper-button-prev": {
      backgroundColor: "hsla(240, 22%, 22%, 1)",
      "& img": {
        marginRight: 3,
      },
    },
    "&.swiper-button-next": {
      backgroundColor: "hsla(240, 22%, 17%, 1)",
      "& img": {
        marginLeft: 3,
      },
    },
  },
}));

function SwiperProjectsMobile({
  className,
  initialSlide,
  setInitialSlide,
  projectsSlider,
  activeProjectSlider,
  changeActiveSlider,
}) {
  const styles = useStyles();
  const theme = useTheme();
  const up376Px = useMediaQuery("(min-width:376px)");
  useEffect(() => {
    anime({
      targets: "#title",
      translateX: [-50, 0],
      translateY: [-15, 0],
      opacity: [0, 1],
      duration: 1500,
    });
  }, [activeProjectSlider.title]);
  return (
    <Swiper
      className={clsx(styles.swiper, className)}
      initialSlide={initialSlide}
      slidesPerView={1}
      grabCursor
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={{ clickable: true }}
      spaceBetween={50}
      onSlideChange={(swiper) => {
        // setInitialSlide untuk sinkronisasi dengan yg versi Mobile/Desktop
        setInitialSlide(swiper.activeIndex);
        changeActiveSlider(swiper.slides[swiper.activeIndex].dataset.id);
      }}
    >
      <Typography component="h4" className={styles.title} id="title">
        {activeProjectSlider.title}
      </Typography>
      {projectsSlider.map((item) => (
        <SwiperSlide key={item.id} data-id={item.id}>
          <img className={styles.sliderImg} src={item.mobileImg} alt="" />
        </SwiperSlide>
      ))}
      <div className={styles.navigation}>
        <div
          className={clsx(styles.btnNavigation, "swiper-button-prev")}
          role="button"
        >
          <img src={arrowPrev} alt="" />
        </div>
        <div
          className={clsx(styles.btnNavigation, "swiper-button-next")}
          role="button"
        >
          <img src={arrowNext} alt="" />
        </div>
      </div>
      <div className={styles.wrapperBtns}>
        <ButtonPill
          component="a"
          href={activeProjectSlider.visit}
          shrink={!up376Px}
          size="tiny"
          endIcon={<IconVisit />}
        >
          {up376Px && "Visit"}
        </ButtonPill>
        <ButtonPill
          component="a"
          href={activeProjectSlider.github}
          shrink={!up376Px}
          size="tiny"
          endIcon={<IconGithub />}
        >
          {up376Px && "Source"}
        </ButtonPill>
        <ButtonPill
          component={Link}
          to={`/project-detail/${activeProjectSlider.detail}`}
          shrink={!up376Px}
          size="tiny"
          endIcon={<IconMore />}
        >
          {up376Px && "Detail"}
        </ButtonPill>
      </div>
    </Swiper>
  );
}

function mapState(state) {
  return {
    activeProjectSlider: state.activeProjectSlider,
    projectsSlider: state.projectsSlider,
  };
}
function mapDispatch(dispatch) {
  return {
    changeActiveSlider: (id) => {
      dispatch(changeActiveSlider(id));
    },
    // selectProjectDetail: (link) => {
    //   dispatch(selectProjectDetail(link));
    // },
  };
}
export default connect(mapState, mapDispatch)(SwiperProjectsMobile);
