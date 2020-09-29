import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Heading from "./Heading";

import anime from "animejs";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import slideImg from "../images/slide-img.svg";
import slideDesktop1 from "../images/slide-desktop.svg";
import slideMobile1 from "../images/slide-mobile.svg";
import slideDesktop2 from "../images/slide-desktop-2.svg";
import slideMobile2 from "../images/slide-mobile-2.svg";
import slideDesktop3 from "../images/slide-desktop-3.svg";
import slideMobile3 from "../images/slide-mobile-3.svg";

SwiperCore.use([Navigation, Pagination]);
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 80,
  },
  heading: {
    marginBottom: 100,
  },
  swiper: {
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
    },
    "& .swiper-slide-active": {},
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

export default function Projects() {
  const styles = useStyles();
  const [lastTranslate, setLastTranslate] = useState(0);

  return (
    <section className={styles.root}>
      <Heading className={styles.heading}>Projects</Heading>
      <Swiper
        className={styles.swiper}
        spaceBetween={50}
        slidesPerView={1}
        // speed={1000}
        navigation
        pagination={{ clickable: true }}
        // watchSlidesProgress
        virtualTranslate
        onSetTransition={(swiper, transition) => {}}
        onSlideChangeTransitionStart={(swiper) => {
          swiper.slides[swiper.activeIndex].querySelector(
            ".img-desktop"
          ).style.transform = "translateY(0)";
          swiper.slides[swiper.activeIndex].querySelector(
            ".img-mobile"
          ).style.transform = "translateY(0)";
          swiper.slides[swiper.activeIndex].style.opacity = 1;
        }}
        onSlideNextTransitionStart={(swiper) => {
          // imgDesktopNext.style.transform = `translateY( 115%)`;
          // imgMobileNext.style.transform = `translateY( -115%)`;

          swiper.slides[swiper.previousIndex].querySelector(
            ".img-desktop"
          ).style.transform = "translateY(-115%)";
          swiper.slides[swiper.previousIndex].querySelector(
            ".img-mobile"
          ).style.transform = "translateY(115%)";
        }}
        onSlidePrevTransitionStart={(swiper) => {
          swiper.slides[swiper.previousIndex].querySelector(
            ".img-desktop"
          ).style.transform = "translateY(115%)";
          swiper.slides[swiper.previousIndex].querySelector(
            ".img-mobile"
          ).style.transform = "translateY(-115%)";
        }}
        onSliderMove={(swiper, event) => {
          const diff = swiper.touches.diff;

          swiper.slides[swiper.activeIndex].querySelector(
            ".img-desktop"
          ).style.transform = `translateY(${diff}px)`;
          swiper.slides[swiper.activeIndex].querySelector(
            ".img-mobile"
          ).style.transform = `translateY(${-diff}px)`;

          // slide Next
          let slideNext;
          if ((slideNext = getSliderNext(swiper))) {
            slideNext.querySelector(
              ".img-desktop"
            ).style.transform = `translateY(calc(115% + ${diff}px))`;
            slideNext.querySelector(
              ".img-mobile"
            ).style.transform = `translateY(calc(-115% - ${diff}px))`;
          }
          // slide Prev
          let slidePrev;
          if ((slidePrev = getSliderPrev(swiper))) {
            slidePrev.querySelector(
              ".img-desktop"
            ).style.transform = `translateY(calc(-115% + ${diff}px))`;
            slidePrev.querySelector(
              ".img-mobile"
            ).style.transform = `translateY(calc(+115% - ${diff}px))`;
          }
        }}
        onTouchStart={(swiper) => {
          // reset touches.diff to prevent glitch onTouchStart
          swiper.touches.diff = 0;
          // prevent transition onSliderMove
          const slideActive = getSliderActive(swiper);
          slideActive.querySelector(".img-desktop").style.transition = "unset";
          slideActive.querySelector(".img-mobile").style.transition = "unset";
          let slideNext;
          if ((slideNext = getSliderNext(swiper))) {
            slideNext.style.opacity = 1;
            const imgDesktopNext = slideNext.querySelector(".img-desktop");
            const imgMobileNext = slideNext.querySelector(".img-mobile");
            imgDesktopNext.style.transform = `translateY( 115%)`;
            imgMobileNext.style.transform = `translateY( -115%)`;
            imgDesktopNext.style.transition = "unset";
            imgMobileNext.style.transition = "unset";
          }
          let slidePrev;
          if ((slidePrev = getSliderPrev(swiper))) {
            slidePrev.style.opacity = 1;
            const imgDesktopPrev = slidePrev.querySelector(".img-desktop");
            const imgMobilePrev = slidePrev.querySelector(".img-mobile");
            imgDesktopPrev.style.transform = `translateY( -115%)`;
            imgMobilePrev.style.transform = `translateY( 115%)`;
            imgDesktopPrev.style.transition = "unset";
            imgMobilePrev.style.transition = "unset";
          }
        }}
        onTouchEnd={(swiper) => {
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
            imgDesktopNext.style.transform = "translateY(115%)";
            imgMobileNext.style.transform = "translateY(-115%)";
            imgDesktopNext.style.transition = "transform 300ms";
            imgMobileNext.style.transition = "transform 300ms";
          }
          // slide-prev
          let slidePrev;
          if ((slidePrev = getSliderPrev(swiper))) {
            const imgDesktopPrev = slidePrev.querySelector(".img-desktop");
            const imgMobilePrev = slidePrev.querySelector(".img-mobile");
            imgDesktopPrev.style.transform = "translateY(-115%)";
            imgMobilePrev.style.transform = "translateY(115%)";
            imgDesktopPrev.style.transition = "transform 300ms";
            imgMobilePrev.style.transition = "transform 300ms";
          }
        }}
        onSwiper={(swiper) => {
          const slides = Array.from(swiper.slides);
          slides.map((slide) => {
            slide.style.transform = `translateX(${-slide.swiperSlideOffset}px)`;
            if (slide.classList.contains("swiper-slide-active")) {
              // nope
            } else {
              slide.style.opacity = 0;
              const imgDesktop = slide.querySelector(".img-desktop");
              const imgMobile = slide.querySelector(".img-mobile");
              imgDesktop.style.transform = "translateY(115%)";
              imgMobile.style.transform = "translateY(-115%)";
              imgDesktop.style.transition = "transform 300ms";
              imgMobile.style.transition = "transform 300ms";
            }
          });
        }}
      >
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
      </Swiper>
    </section>
  );
}
