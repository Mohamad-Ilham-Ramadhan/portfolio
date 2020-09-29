import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Heading from "./Heading";

import anime from "animejs";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import slideImg from "../images/slide-img.svg";
import slideDesktop1 from "../images/slide-desktop.svg";
import slideMobile1 from "../images/slide-mobile.svg";
import slideDesktop2 from "../images/slide-desktop-2.svg";
import slideMobile2 from "../images/slide-mobile-2.svg";
import slideDesktop3 from "../images/slide-desktop-3.svg";
import slideMobile3 from "../images/slide-mobile-3.svg";

SwiperCore.use([Navigation]);
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
        navigation
        // watchSlidesProgress
        virtualTranslate
        onSlideNextTransitionStart={(swiper) => {
          const slideActive = getSliderActive(swiper);
          console.log(
            "onSLideNextTransitionStart slide-active ==>",
            slideActive
          );
          const imgDesktop = slideActive.querySelector(".img-desktop");
          const imgMobile = slideActive.querySelector(".img-mobile");
          imgDesktop.style.transform = "translate(0)";
          imgMobile.style.transform = "translate(0)";
          //  Prev
          const slidePrev = getSliderPrev(swiper);
          const imgDesktopPrev = slidePrev.querySelector(".img-desktop");
          const imgMobilePrev = slidePrev.querySelector(".img-mobile");
          imgDesktopPrev.style.transform = "translateY(-115%)";
          imgMobilePrev.style.transform = "translateY(100%)";
        }}
        onSlidePrevTransitionStart={(swiper) => {
          const slideActive = getSliderActive(swiper);
          const imgDesktop = slideActive.querySelector(".img-desktop");
          const imgMobile = slideActive.querySelector(".img-mobile");
          imgDesktop.style.transform = "translate(0)";
          imgMobile.style.transform = "translate(0)";
          //  Next
          const slideNext = getSliderNext(swiper);
          const imgDesktopNext = slideNext.querySelector(".img-desktop");
          const imgMobileNext = slideNext.querySelector(".img-mobile");
          imgDesktopNext.style.transform = "translateY(115%)";
          imgMobileNext.style.transform = "translateY(-115%)";
        }}
        onSliderMove={(swiper, event) => {
          const diff = swiper.touches.diff;
          const slideActive = getSliderActive(swiper);
          const imgDesktop = slideActive.querySelector(".img-desktop");
          const imgMobile = slideActive.querySelector(".img-mobile");

          imgDesktop.style.transform = `translateY(${diff}px)`;
          imgMobile.style.transform = `translateY(${-diff}px)`;

          // slide Next
          let slideNext;
          if ((slideNext = getSliderNext(swiper))) {
            const imgDesktopNext = slideNext.querySelector(".img-desktop");
            const imgMobileNext = slideNext.querySelector(".img-mobile");
            imgDesktopNext.style.transform = `translateY(calc(115% + ${diff}px))`;
            imgMobileNext.style.transform = `translateY(calc(-115% - ${diff}px))`;
          }
          // slide Prev
          let slidePrev;
          if ((slidePrev = getSliderPrev(swiper))) {
            const imgDesktopPrev = slidePrev.querySelector(".img-desktop");
            const imgMobilePrev = slidePrev.querySelector(".img-mobile");
            imgDesktopPrev.style.transform = `translateY(calc(-115% + ${diff}px))`;
            imgMobilePrev.style.transform = `translateY(calc(+115% - ${diff}px))`;
          }
        }}
        onTouchStart={(swiper) => {
          // reset touches.diff to prevent glitch onTouchStart
          swiper.touches.diff = 0;
          // prevent transition onSliderMove
          const slideActive = getSliderActive(swiper);
          const imgDesktop = slideActive.querySelector(".img-desktop");
          const imgMobile = slideActive.querySelector(".img-mobile");
          imgDesktop.style.transition = "unset";
          imgMobile.style.transition = "unset";
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
            console.log("onTouchEnd => slideNext");
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
            console.log("onTouchEnd => slidePrev");
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
