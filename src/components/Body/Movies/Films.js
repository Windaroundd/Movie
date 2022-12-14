import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  COMING_SOON,
  NOW_SHOWING,
} from "../../../services/Constants/constants";

export default function Films({ comingSoon, nowShowing }) {
  let [status, setStatus] = useState(NOW_SHOWING);
  let [isActive, setActive] = useState("flase");

  let renderMovie = (status) => {
    if (status == NOW_SHOWING) {
      return nowShowing?.map((item) => {
        return (
          <div
            className="relative movie-item overflow-hidden"
            key={item.maPhim}
          >
            <Link to={`/detail/${item.maPhim}`}>
              <img className="rounded-md" src={item.hinhAnh} alt="" />
            </Link>
            <div className="absolute slide-detail_bot rounded-b-md text-white">
              <div className="text-left">
                <span className="text-xl font-bold">{item.tenPhim}</span>
                <i className="rated ml-2 text-sm">
                  <span className="">{item.danhGia}.0 IMDB</span>
                </i>
              </div>
              <div className="mt-4">
                <Link className="bg-red-500 text-white rounded-xl px-3 py-2 ">
                  Buy Tickets
                </Link>
              </div>
            </div>
          </div>
        );
      });
    } else if (status == COMING_SOON) {
      return comingSoon?.map((item) => {
        return (
          <div
            className="relative movie-item overflow-hidden"
            key={item.maPhim}
          >
            <Link to={`/detail/${item.maPhim}`}>
              <img className=" rounded-md" src={item.hinhAnh} alt="" />
            </Link>
            <div className="absolute slide-detail_bot rounded-b-md text-white ">
              <div className="text-left">
                <span className="text-2xl font-semibold">{item.tenPhim}</span>
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
          </div>
        );
      });
    }
  };
  let handleChangeStatus = (status) => {
    handleToggleClass();
    setStatus(status);
  };

  let handleToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="container py-12 bg-zinc-900">
      <div className="py-5 flex gap-7 text-gray-400 text-4xl border-b-4 mb-9">
        <div
          onClick={() => {
            handleChangeStatus(NOW_SHOWING);
          }}
          className={`cursor-pointer ${
            isActive ? "text-red-500 font-bold" : "text-gray-400"
          } mr-5`}
        >
          Now Showing
        </div>
        <div
          onClick={() => {
            handleChangeStatus(COMING_SOON);
          }}
          className={`cursor-pointer ${
            isActive ? "text-gray-400" : "text-red-500 font-bold"
          }`}
        >
          Coming Soon
        </div>
      </div>
      <div className="grid grid-cols-4 gap-9   ">{renderMovie(status)}</div>
    </div>
  );
}
