import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconVisitWeb from "./icons/IconVisitWeb";
import IconFacebook from "./icons/IconFacebook";
import IconGithub from "@material-ui/icons/GitHub";
import IconMoreHoriz from "@material-ui/icons/MoreHoriz";
import ButtonPill from "./buttons/ButtonPill";
import trianglePink from "../images/triangle-pink-small.svg";
import plusBlue from "../images/plus.svg";
import circlePink from "../images/circle.svg";
// Swiper
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowNext from "../images/arrow-next.svg";
import arrowPrev from "../images/arrow-prev.svg";
import slideDesktop1 from "../images/slide-desktop.svg";
import slideMobile1 from "../images/slide-mobile.svg";
import slideDesktop2 from "../images/slide-desktop-2.svg";
import slideMobile2 from "../images/slide-mobile-2.svg";
import slideDesktop3 from "../images/slide-desktop-3.svg";
import slideMobile3 from "../images/slide-mobile-3.svg";
import slideDesktop4 from "../images/slide-desktop-4.svg";
import slideMobile4 from "../images/slide-mobile-4.svg";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// import "swiper/swiper-bundle.min.css"; // for production only (navigation dan pagination scss nya nge bug)

// Swiper's component initialization
SwiperCore.use([Navigation, Pagination]);

const useStyles = makeStyles((theme) => ({
  triangle1: {
    position: "absolute",
    left: "38%",
    top: 0,
    transform: "rotate(30deg)",
    opacity: 0.25,
    width: 30,
    transform: "translateX(250px)",
  },
  plus1: {
    left: "7%",
    width: 30,
    opacity: 0.25,
    position: "absolute",
    transform: "rotate(-12deg)",
    bottom: "15%",
  },
  circle1: {
    right: "7%",
    width: 30,
    opacity: 0.25,
    position: "absolute",
    transform: "rotate(-12deg)",
    bottom: "14%",
  },
  // =========================================
  swiper: {
    overflow: "visible",
    "& .swiper-wrapper": {
      overflow: "hidden",
    },
    "& .project-title": {
      position: "absolute",
      top: 69,
      zIndex: 20,
      fontSize: 56,
      fontWeight: 700,
      // [theme.breakpoints.up("md")]: {
      //   fontSize: 56,
      // },
      "@media (min-width: 1100px)": {
        fontSize: 72,
      },
    },
    "& .project-actions": {
      position: "absolute",
      bottom: "34%",
      zIndex: 100,
    },
    "& button": {
      marginRight: 16,
    },
    "& .swiper-slide": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "absolute",
      "&:first-child": {
        position: "relative",
      },
    },
    "& .img-desktop": {
      marginRight: 40,
      [theme.breakpoints.up("md")]: {
        width: 350,
      },
      [theme.breakpoints.up("lg")]: {
        width: 485,
      },
      "@media (min-width: 1100px)": {
        width: 525,
      },
    },
    "& .img-mobile": {
      [theme.breakpoints.up("md")]: {
        width: 180,
      },
      [theme.breakpoints.up("lg")]: {
        width: 200,
      },
      "@media (min-width: 1100px)": {
        width: 230,
      },
    },
    "& .swiper-controls": {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: 50,
      marginTop: 40,
      paddingLeft: 140,
      paddingRight: 140,
    },
    "& .swiper-button": {
      position: "relative",
      height: 85,
      width: 85,
      borderRadius: "50%",
      "&::after": {
        content: "''",
      },
      [theme.breakpoints.up("md")]: {
        height: 70,
        width: 70,
      },
      "&.swiper-button-prev": {
        backgroundColor: "hsla(240, 22%, 22%, 1)",
        "& img": {
          marginRight: 8,
        },
      },
      "&.swiper-button-next": {
        backgroundColor: "hsla(240, 22%, 17%, 1)",
        "& img": {
          marginLeft: 8,
        },
      },
    },
    "& .swiper-pagination": {
      position: "unset",
      "& .swiper-pagination-bullet": {
        width: 13,
        height: 13,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: "white",
        opacity: 1,
        "&.swiper-pagination-bullet-active": {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  },
}));

function getSliderActive(swiper) {
  const slides = Array.from(swiper.slides);
  const slideActive = slides.filter((slide) =>
    slide.classList.contains("swiper-slide-active")
  )[0];
  return slideActive;
}
function getSliderNext(swiper) {
  return Array.from(swiper.slides).filter((slide) =>
    slide.classList.contains("swiper-slide-next")
  )[0];
}
function getSliderPrev(swiper) {
  return Array.from(swiper.slides).filter((slide) =>
    slide.classList.contains("swiper-slide-prev")
  )[0];
}
function moveNextOrPrevSlideToCenter({ imgMobile, imgDesktop }) {
  imgDesktop.style.transition = "transform 300ms";
  imgMobile.style.transition = "transform 300ms";
  imgDesktop.style.transform = "translateY(0%)";
  imgMobile.style.transform = "translateY(0%)";
}
export default function SwiperProjects({
  className,
  initialSlide,
  setInitialSlide,
}) {
  const styles = useStyles();
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Swiper
      className={clsx(styles.swiper, className)}
      initialSlide={initialSlide}
      // spaceBetween={50}
      slidesPerView={1}
      grabCursor
      updateOnWindowResize
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={{
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      }}
      virtualTranslate
      onSetTransition={(swiper, transition) => {}}
      onSlideChange={(swiper) => {
        console.log("on slide change!");
        // setInitialSlide untuk sinkronisasi dengan yg versi Mobile/Desktop
        setInitialSlide(swiper.activeIndex);
        const slides = Array.from(swiper.slides);
        const activeIndex = swiper.activeIndex;
        const previousIndex = swiper.previousIndex;
        // set up semua previous slides di posisi prev (siaga)
        if (activeIndex > previousIndex) {
          slides.slice(0, activeIndex).map((slide) => {
            const imgDesktop = slide.querySelector(".img-desktop");
            const imgMobile = slide.querySelector(".img-mobile");
            imgDesktop.style.transition = "unset";
            imgMobile.style.transition = "unset";
            imgDesktop.style.transform = "translateY(-135%)";
            imgMobile.style.transform = "translateY(135%)";
          });
          // jangan unset transition previous slide
          slides[previousIndex].querySelector(".img-desktop").style.transition =
            "transform 300ms";
          slides[previousIndex].querySelector(".img-mobile").style.transition =
            "transform 300ms";
        }
        // set up semua next slides di posisi next (siaga)
        if (activeIndex < previousIndex) {
          slides.slice(activeIndex + 1).map((slide) => {
            const imgDesktop = slide.querySelector(".img-desktop");
            const imgMobile = slide.querySelector(".img-mobile");
            imgDesktop.style.transition = "unset";
            imgMobile.style.transition = "unset";
            imgDesktop.style.transform = "translateY(135%)";
            imgMobile.style.transform = "translateY(-135%)";
          });
          // jangan unset transition previous slide
          slides[previousIndex].querySelector(".img-desktop").style.transition =
            "transform 300ms";
          slides[previousIndex].querySelector(".img-mobile").style.transition =
            "transform 300ms";
        }
      }}
      onSlideNextTransitionStart={(swiper) => {
        console.log("on slide next transition start!");

        // current slide
        const currentSlide = swiper.slides[swiper.previousIndex];
        const imgDesktopCurrent = currentSlide.querySelector(".img-desktop");
        const imgMobileCurrent = currentSlide.querySelector(".img-mobile");
        imgDesktopCurrent.style.transform = "translateY(-135%)";
        imgMobileCurrent.style.transform = "translateY(135%)";
        // incoming slide
        const imgDesktopNext = swiper.slides[swiper.activeIndex].querySelector(
          ".img-desktop"
        );
        const imgMobileNext = swiper.slides[swiper.activeIndex].querySelector(
          ".img-mobile"
        );
        moveNextOrPrevSlideToCenter({
          imgMobile: imgMobileNext,
          imgDesktop: imgDesktopNext,
        });
      }}
      onSlidePrevTransitionStart={(swiper) => {
        swiper.slides[swiper.previousIndex].querySelector(
          ".img-desktop"
        ).style.transform = "translateY(135%)";
        swiper.slides[swiper.previousIndex].querySelector(
          ".img-mobile"
        ).style.transform = "translateY(-135%)";
        // incoming slide
        const imgDesktopPrev = swiper.slides[swiper.activeIndex].querySelector(
          ".img-desktop"
        );
        const imgMobilePrev = swiper.slides[swiper.activeIndex].querySelector(
          ".img-mobile"
        );
        moveNextOrPrevSlideToCenter({
          imgMobile: imgMobilePrev,
          imgDesktop: imgDesktopPrev,
        });
      }}
      onSliderMove={(swiper, event) => {
        const diff = swiper.touches.diff;
        const slideActive = swiper.slides[swiper.activeIndex];
        const imgDesktopActive = slideActive.querySelector(".img-desktop");
        const imgMobileActive = slideActive.querySelector(".img-mobile");
        imgDesktopActive.style.transform = `translateY(${diff}px)`;
        imgMobileActive.style.transform = `translateY(${-diff}px)`;
        imgDesktopActive.style.transition = "unset";
        imgMobileActive.style.transition = "unset";

        // slide Next
        let slideNext;
        if ((slideNext = getSliderNext(swiper))) {
          const imgDesktopNext = slideNext.querySelector(".img-desktop");
          const imgMobileNext = slideNext.querySelector(".img-mobile");
          imgDesktopNext.style.transition = "unset";
          imgMobileNext.style.transition = "unset";
          imgDesktopNext.style.transform = `translateY(calc(135% + ${diff}px))`;
          imgMobileNext.style.transform = `translateY(calc(-135% - ${diff}px))`;
        }
        // slide Prev
        let slidePrev;
        if ((slidePrev = getSliderPrev(swiper))) {
          const imgDesktopPrev = slidePrev.querySelector(".img-desktop");
          const imgMobilePrev = slidePrev.querySelector(".img-mobile");
          imgDesktopPrev.style.transition = "unset";
          imgMobilePrev.style.transition = "unset";
          imgDesktopPrev.style.transform = `translateY(calc(-135% + ${diff}px))`;
          imgMobilePrev.style.transform = `translateY(calc(+135% - ${diff}px))`;
        }
      }}
      onTouchStart={(swiper) => {
        console.log("on touch start");
        // reset touches.diff to prevent glitch onTouchStart
        swiper.touches.diff = 0;

        let slideNext;
        if ((slideNext = getSliderNext(swiper))) {
          const imgDesktopNext = slideNext.querySelector(".img-desktop");
          const imgMobileNext = slideNext.querySelector(".img-mobile");
          imgDesktopNext.style.transform = `translateY( 135%)`;
          imgMobileNext.style.transform = `translateY( -135%)`;
        }
        let slidePrev;
        if ((slidePrev = getSliderPrev(swiper))) {
          const imgDesktopPrev = slidePrev.querySelector(".img-desktop");
          const imgMobilePrev = slidePrev.querySelector(".img-mobile");
          imgDesktopPrev.style.transform = `translateY( -135%)`;
          imgMobilePrev.style.transform = `translateY( 135%)`;
        }
      }}
      onTouchEnd={(swiper) => {
        console.log("on touch end");
        const slideActive = getSliderActive(swiper);
        const imgDesktop = slideActive.querySelector(".img-desktop");
        const imgMobile = slideActive.querySelector(".img-mobile");
        imgDesktop.style.transform = "translateY(0px)";
        imgMobile.style.transform = "translateY(0px)";
        imgDesktop.style.transition = "transform 300ms";
        imgMobile.style.transition = "transform 300ms";
        // slide-next
        let slideNext;
        if ((slideNext = getSliderNext(swiper))) {
          const imgDesktopNext = slideNext.querySelector(".img-desktop");
          const imgMobileNext = slideNext.querySelector(".img-mobile");
          imgDesktopNext.style.transform = "translateY(135%)";
          imgMobileNext.style.transform = "translateY(-135%)";
          imgDesktopNext.style.transition = "transform 300ms";
          imgMobileNext.style.transition = "transform 300ms";
        }
        // slide-prev
        let slidePrev;
        if ((slidePrev = getSliderPrev(swiper))) {
          const imgDesktopPrev = slidePrev.querySelector(".img-desktop");
          const imgMobilePrev = slidePrev.querySelector(".img-mobile");
          imgDesktopPrev.style.transform = "translateY(-135%)";
          imgMobilePrev.style.transform = "translateY(135%)";
          imgDesktopPrev.style.transition = "transform 300ms";
          imgMobilePrev.style.transition = "transform 300ms";
        }
      }}
      onSwiper={(swiper) => {
        const slides = Array.from(swiper.slides);
        slides.map((slide) => {
          slide.style.transform = `translateX(${-slide.swiperSlideOffset}px)`;
          if (slide.classList.contains("swiper-slide-active")) {
            // do nothing
            const imgDesktop = slide.querySelector(".img-desktop");
            const imgMobile = slide.querySelector(".img-mobile");
            imgDesktop.style.transition = "transform 300ms";
            imgMobile.style.transition = "transform 300ms";
          } else {
            const imgDesktop = slide.querySelector(".img-desktop");
            const imgMobile = slide.querySelector(".img-mobile");
            console.log(slide);
            slide.classList.add("n");
            imgDesktop.style.transform = "translateY(135%)";
            imgMobile.style.transform = "translateY(-135%)";
          }
        });
      }}
    >
      <img className={styles.triangle1} src={trianglePink} alt="" />
      <img className={styles.plus1} src={plusBlue} alt="" />
      <img className={styles.circle1} src={circlePink} alt="" />

      <Typography className="project-title" variant="h4">
        Link Shortening
      </Typography>
      <div className="project-actions">
        <ButtonPill size={!upLg ? "small" : null} endIcon={<IconVisitWeb />}>
          Visit web
        </ButtonPill>
        <ButtonPill size={!upLg ? "small" : null} endIcon={<IconGithub />}>
          Source code
        </ButtonPill>
        <ButtonPill
          size={!upLg ? "small" : null}
          endIcon={<IconMoreHoriz />}
          component={Link}
          to="/project-detail"
        >
          Detail
        </ButtonPill>
      </div>
      <SwiperSlide>
        <img className="img-desktop" src={slideDesktop1} alt="" />
        <img className="img-mobile" src={slideMobile1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="img-desktop" src={slideDesktop2} alt="" />
        <img className="img-mobile" src={slideMobile2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="img-desktop" src={slideDesktop3} alt="" />
        <img className="img-mobile" src={slideMobile3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="img-desktop" src={slideDesktop4} alt="" />
        <img className="img-mobile" src={slideMobile4} alt="" />
      </SwiperSlide>
      <div className="swiper-controls">
        <div className="swiper-button swiper-button-prev">
          <img className=".MuiButton-label" src={arrowPrev} alt="" />
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button swiper-button-next">
          <img className=".MuiButton-label" src={arrowNext} alt="" />
        </div>
      </div>
    </Swiper>
  );
}
