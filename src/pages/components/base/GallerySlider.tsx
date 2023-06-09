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
            <div className="h-[140px] flex item-center object-cover">
              <Image
                alt=""
                width={1000}
                className="object-contain"
                height={1000}
                src={image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
