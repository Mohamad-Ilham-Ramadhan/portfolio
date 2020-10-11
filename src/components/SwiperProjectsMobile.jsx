import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import sliderImg from "../images/project-img.svg";
// swiper
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// Swiper's component initialization
SwiperCore.use([Navigation, Pagination]);

const useStyles = makeStyles((theme) => ({
  swiper: {
    "& .swiper-button-next, .swiper-button-prev": {
      color: theme.palette.primary.main,
      height: 30,
      overflow: "hidden",
    },
    "& .swiper-pagination-bullet": {
      width: 10,
      height: 10,
    },
    "& .swiper-pagination-bullet-active": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  sliderImg: {
    width: "100%",
  },
}));

export default function SwiperProjectsMobile({ className }) {
  const styles = useStyles();
  return (
    <Swiper
      className={clsx(styles.swiper, className)}
      slidesPerView={1}
      grabCursor
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
    >
      <SwiperSlide>
        <img className={styles.sliderImg} src={sliderImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src={sliderImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src={sliderImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src={sliderImg} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
