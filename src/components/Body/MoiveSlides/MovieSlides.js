import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../../services/ApiServices/apiServices";
import {
  COMING_SOON,
  NOW_SHOWING,
} from "../../../../src/services/Constants/constants";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function MovieSlides() {
  let [nowShowing, setNowShowing] = useState([]);
  let [comingSoon, setComingSoon] = useState([]);
  let [status, setStatus] = useState(NOW_SHOWING);
  let [isActive, setActive] = useState("flase");
  useEffect(() => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    })
      .then((res) => {
        filterMovieByStatus(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  useEffect(() => {}, []);
  let filterMovieByStatus = (MovieDataArr) => {
    let cloneNowShowingMovie = [...nowShowing];
    let cloneComingSoonMovie = [...comingSoon];

    for (let i = 0; i < MovieDataArr?.length; i++) {
      if (
        MovieDataArr[i].dangChieu == true &&
        MovieDataArr[i].sapChieu == false
      ) {
        cloneNowShowingMovie.push(MovieDataArr[i]);
      } else if (
        MovieDataArr[i].dangChieu == false &&
        MovieDataArr[i].sapChieu == true
      ) {
        cloneComingSoonMovie.push(MovieDataArr[i]);
      }
    }
    setComingSoon(cloneComingSoonMovie);

    setNowShowing(cloneNowShowingMovie);
  };
  let renderMovieSlide = (status) => {
    if (status == NOW_SHOWING) {
      return nowShowing?.map((movie, index) => {
        return (
          <SwiperSlide className="relative overflow-hidden" key={index}>
            <img className=" rounded-xl" src={movie.hinhAnh} alt="" />
            <div className="absolute slide-detail_bot rounded-b-xl text-white">
              <div className="text-left">
                <span className="text-2xl font-semibold">{movie.tenPhim}</span>
                <i className="rated ml-2 text-sm">
                  <span className="">{movie.danhGia}.0 IMDB</span>
                </i>
              </div>
              <div className="mt-4">
                <Link className="bg-red-500 text-white rounded-xl px-3 py-2 ">
                  Buy Tickets
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      });
    } else if (status == COMING_SOON) {
      return comingSoon?.map((movie, index) => {
        return (
          <SwiperSlide className="relative overflow-hidden" key={index}>
            <img className=" rounded-xl" src={movie.hinhAnh} alt="" />
            <div className="absolute slide-detail_bot rounded-b-xl text-white ">
              <div className="text-left">
                <span className="text-2xl font-semibold">{movie.tenPhim}</span>
                <i className="rated ml-2 text-sm">
                  <span className="">Unrated</span>
                </i>
              </div>
              <div className="mt-4">
                <Link className="bg-gray-500 text-white rounded-xl px-3 py-2 ">
                  Trailer
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      });
    }
  };
  let handleChangeStatus = (status) => {
    handleToggleClass();
    switch (status) {
      case NOW_SHOWING:
        return setStatus(NOW_SHOWING);

      case COMING_SOON:
        return setStatus(COMING_SOON);
    }
  };
  let handleToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="movie-slide py-12">
      <div className="container overflow-x-hidden overflow-y-hidden ">
        <div className="ml-4 flex gap-5 mb-5 text-4xl   ">
          <div
            onClick={() => {
              handleChangeStatus(NOW_SHOWING);
            }}
            className={`cursor-pointer ${
              isActive ? "text-white font-bold" : "text-gray-400"
            }`}
          >
            Now Showing
          </div>
          <div
            onClick={() => {
              handleChangeStatus(COMING_SOON);
            }}
            className={`cursor-pointer ${
              isActive ? "text-gray-400" : "text-white font-bold"
            }`}
          >
            Coming Soon
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {renderMovieSlide(status)}
        </Swiper>
      </div>
    </div>
  );
}
