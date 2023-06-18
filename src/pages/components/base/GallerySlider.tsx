import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import Image from "next/image";
import { images } from "@/utils/constant";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySlider() {


  const swiperParams = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    navigation: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    modules: [EffectCoverflow, Pagination, Navigation],
    className: "mySwiper",
  };

  return (
    <>
      <Swiper {...swiperParams}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image alt="" width={410} height={300} src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
