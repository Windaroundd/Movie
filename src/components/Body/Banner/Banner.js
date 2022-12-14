import axios from "axios";
import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import { userServices } from "../../../services/ApiServices/userServices";

export default function Banner() {
  let [banner, setBanner] = useState([]);
  useEffect(() => {
    userServices
      .getBannerList()
      .then((res) => {
        setBanner(res.data.content);
      })
      .catch((err) => {});
  }, []);
  let renderBanner = () => {
    return banner.map((item) => {
      return (
        <SwiperSlide key={item.maBanner}>
          <img src={item.hinhAnh} alt="" />
        </SwiperSlide>
      );
    });
  };

  return (
    <div className="bg-black banner">
      <Swiper
        dir="rtl"
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {renderBanner()}
      </Swiper>
    </div>
  );
}
