import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function authoriumSlide() {
  return (
    <div className="authorium-slide object-cover">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://hwdadi-dev-public.obs.cn-north-4.myhuaweicloud.com/information/homePage/information_home_page_image_20211119170002_yuem6p.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://hwdadi-dev-public.obs.cn-north-4.myhuaweicloud.com/information/homePage/information_home_page_image_20211119161419_bg52lj.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://hwdadi-dev-public.obs.cn-north-4.myhuaweicloud.com/information/homePage/information_home_page_image_20211119173220_3mzhck.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
