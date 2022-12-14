import React from "react";
import { Link } from "react-router-dom";

export default function FilmDetail({ content }) {
  console.log("content: ", content);
  return (
    <div className="bg-neutral-900 py-14">
      <div
        className="container
       bg-gray-800 p-8"
      >
        <div className="detail-wrapper flex justify-center">
          <div className="detail-img mr-7 w-1/2 flex justify-end">
            <img className="w-full h-full" src={content.hinhAnh} alt="" />
          </div>
          <div className="w-1/2">
            <div className="flex justify-between">
              <p className="text-white text-3xl mb-5 w-1/2 font-bold">
                {content.tenPhim}
              </p>
              <div>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </div>
            </div>
            <div className="">
              <p className="text-yellow-500 text-xl font-semibold">
                Rate: {content.danhGia}.0 IMDB
              </p>
            </div>
            <div>
              <p className="mt-6 w-1/2 text-white">{content.moTa}</p>
            </div>
            <div>
              <Link>
                <button
                  className={`mt-4 text-white ${
                    content.dangChieu ? "bg-red-500" : "bg-gray-400"
                  } py-3 px-5 rounded-xl`}
                >
                  {`${content.dangChieu ? "Buy Tickets" : "Trailer"}`}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
