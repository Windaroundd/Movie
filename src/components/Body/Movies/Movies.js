import React, { useEffect, useState } from "react";
import { userServices } from "../../../services/ApiServices/userServices";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Films from "./Films";

export default function Movies() {
  let [nowShowing, setNowShowing] = useState([]);
  let [comingSoon, setComingSoon] = useState([]);
  let isShowing = true;
  let isComing = true;
  let filterMovieByStatus = (movieArr) => {
    let cloneNowShowingMovie = [...nowShowing];
    let cloneComingSoonMovie = [...comingSoon];

    for (let i = 0; i < movieArr?.length; i++) {
      if (
        movieArr[i].dangChieu == isShowing &&
        movieArr[i].sapChieu != isComing
      ) {
        cloneNowShowingMovie.push(movieArr[i]);
      } else if (
        movieArr[i].dangChieu != isShowing &&
        movieArr[i].sapChieu == isComing
      ) {
        cloneComingSoonMovie.push(movieArr[i]);
      }
    }
    setComingSoon(cloneComingSoonMovie);

    setNowShowing(cloneNowShowingMovie);
  };
  useEffect(() => {
    userServices
      .getMovieList()
      .then((res) => {
        filterMovieByStatus(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderFilm = () => {
    return <Films comingSoon={comingSoon} nowShowing={nowShowing} />;
  };
  return (
    <div>
      <Header />
      {renderFilm()}
      <Footer />
    </div>
  );
}
