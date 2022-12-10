import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { TOKEN_CYBERSOFT } from "../../../services/ApiServices/apiServices";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Banner() {
  let [banner, setBanner] = useState([]);
  useEffect(() => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    })
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
    <div className="bg-black ">
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
